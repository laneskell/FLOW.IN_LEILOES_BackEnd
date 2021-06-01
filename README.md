
<p align="center">
<img  src="https://somosflow.in/static/media/logo-degrade.f39e57c7.png" />
</p>

<p align="center">
 <a href="#objetivo_do_case">Objetivo</a> •
 <a href="#getting_started">Getting started</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#aplicação">Aplicação</a> • 
 <a href="#desenvolvedora">Desenvolvedor</a> 
</p>
</h3>
  
<hr>

<h1 align="center">FLOW.IN LEILÕES</h1>

### Objetivo_do_Case

<p>Buscando estarmos imersos em todas as frentes de blockchain e criptoeconomia, surge o Flow.in Leilões!
Flow.in Leilões é uma galeria de NFTs em que os usuário poderão adicionar suas obras para serem leiloadas sejam elas artes digitais, músicas, vídeos, etc.
Neste case foi desenvolvido uma pequena API para o Flow.in Leilões!</p>

### Aplicação
##### Veja o Deploy dos Endpoints na aws
-[Detalhes de um Leilão](http://ec2-15-228-23-22.sa-east-1.compute.amazonaws.com:3001/Auction/1)

-[Todos os Leilões]( http://ec2-15-228-23-22.sa-east-1.compute.amazonaws.com:3001/Auction)

-[Todos os Lances](http://ec2-15-228-23-22.sa-east-1.compute.amazonaws.com:3001/Auction/bid)

### Getting_started
##### Para clonar a aplicação instale as dependências e configure as credenciais do banco.
```
git clone https://github.com/laneskell/FLOW.IN_LEILOES.git
```
```
npm i
```
```
npm i typescript ts-node 
```
```
npm i kenex mysql
```
```
npm i express cors
```
##### Crie as tabelas tabelas no mysql
```
CREATE TABLE Auction (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  title VARCHAR(255) NOT NULL ,
  initialValue INT NOT NULL, 
  bidProgression INT NOT NULL,
  expirationDate DATE NOT NULL 
  );
  
  CREATE TABLE User_bid (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  name VARCHAR(30) NOT NULL,
  value INT NOT NULL,
  auction_id INT NOT NULL,
  FOREIGN KEY ( auction_id) REFERENCES Auction(id)
  );

```
##### instale o dotenv 
```
npm i dotenv
```
##### Configure com as credencias do seu banco
```
DB_HOST = 00.000.000.000
DB_PASSWORD = suasenhax12345xx
DB_USER = seuUsuarioxxxx
DB_SCHEMA = seuSchemaxxxx

```
##### Rode localmente
```
npm run dev-start
```

### Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [Mysql](https://dev.mysql.com/doc/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- 
### Imagens: 

![image](https://user-images.githubusercontent.com/77758983/120268650-95ce7180-c27c-11eb-932f-b7ad4bcef0b8.png)
![image](https://user-images.githubusercontent.com/77758983/120268969-43418500-c27d-11eb-8732-b6c522f3c952.png)
![image](https://user-images.githubusercontent.com/77758983/120269241-cf53ac80-c27d-11eb-949c-d5a60d6667c7.png)
![image](https://user-images.githubusercontent.com/77758983/120269276-e09cb900-c27d-11eb-94ce-92496f4437e8.png)


### Desenvolvedora

 <a href="https://www.linkedin.com/in/kell-lanes-dev/">Kell Lanes </a>

