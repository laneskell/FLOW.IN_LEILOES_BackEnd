import app from './app';
import { connection } from './connection';


app.get('/', (req, res)=> {res.send("Flow.in Leilões")})

app.get('/Auction', async(req, res) => {
    try{
        const result =await connection('Auction')
        res.send(result)
    }catch(error){
        console.log(error.message);
        res.status(500).send('Internal Error')
    }
})

app.post('/Auction', async(req,res) => {
    try{
        if(!req.body.title){
            throw new Error("title is required")
    }
    const createAuction = {
        title: req.body.title,
        initialValue: req.body.initialValue,
        bidProgression: req.body.bidProgression,
        expirationDate: req.body.expirationDate
    }
    await connection('Auction').insert(createAuction)
        res.status(201).send('Auction Created')


}catch(error){
    res.status(500).send('Internal Server Error')
    console.log(error.message);
}

})
