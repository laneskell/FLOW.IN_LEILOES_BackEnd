import app from "./app";
import { Request, Response } from "express";
import { connection } from "./connection";

// CRIAR NOVO LEILÃO
app.post("/Auction", async (req: Request, res: Response) => {
  try {
    if (!req.body.title) {
      throw new Error("title is required");
    }
    const createAuction = {
      title: req.body.title,
      initialValue: req.body.initialValue,
      bidProgression: req.body.bidProgression,
      expirationDate: req.body.expirationDate,
    };
    await connection("Auction").insert(createAuction);
    res.status(201).send("Auction Created");
  } catch (error) {
    res.status(401).send(error.message);
    console.log(error.message);
  }
});

// CRIAR UM LANCE EM UM LEILÃO
app.post("/Auction/bid", async (req: Request, res: Response) => {
  try {
    const auctions = await connection("Auction");

    if (!req.body.name) {
      throw new Error("name is required!");
    } else if (!req.body.value) {
      throw new Error("value is required!");
    } else if (!req.body.auction_id) {
      throw new Error("id_auction is required!");
    }
    auctions.map((auction) => {
      if (auction.id === req.body.auction_id) {
        const checkBidProgression = req.body.value % auction.bidProgression;
        if (checkBidProgression !== 0) {
          throw new Error(
            `The bidding progression for this auction is $ ${auction.bidProgression}`
          );
        }
      }
    });
    const makeBid = {
      name: req.body.name,
      value: req.body.value,
      auction_id: req.body.auction_id,
    };
    await connection("User_bid").insert(makeBid);
    res.status(201).send("Successful bid!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// RETORNA TODOS OS LEILÕES
app.get("/Auction", async (req: Request, res: Response) => {
  try {
    const result = await connection("Auction");
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Error");
  }
});

// RETORNA TODOS OS LANCES
app.get("/Auction/bid", async (req: Request, res: Response) => {
  try {
    const result = await connection("User_bid");
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Error");
  }
});

//  RETORNA OS DETALHES DE UM LEILÃO INDIVIDIUALMENTE
app.get("/Auction/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const [ auction ] = await connection.raw(`
      SELECT *,  
      TIMESTAMPDIFF(DAY,NOW(),expirationDate) AS daysToFinish  
      FROM Auction WHERE id = ${id} 
   `);

    const [bids] = await connection.raw(`  
      SELECT * 
      FROM User_bid WHERE auction_id = ${id} `);

    const auctionDetails = {
      auction,
      bids,
    };

    res.status(200).send(auctionDetails);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
