
<p align="center">
<img  src="https://somosflow.in/static/media/logo-degrade.f39e57c7.png" />
</p>

<p align="center">
 <a href="#objetivo_do_case">Objetivo</a> •
 <a href="#getting_started">Getting started</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#aplicação">Aplicação</a> • 
 <a href="#autor">Autor</a> 
</p>
</h3>
  
<hr>

<h1 align="center">FLOW.IN LEILÕES</h1>

### Objetivo_do_Case

<p>Buscando estarmos imersos em todas as frentes de blockchain e criptoeconomia, surge o Flow.in Leilões!
Flow.in Leilões é uma galeria de NFTs em que os usuário poderão adicionar suas obras para serem leiloadas sejam elas artes digitais, músicas, vídeos, etc.</p>

### Getting_started
```
git clone https://github.com/laneskell/FLOW.IN_LEILOES.git
```
```
npm install
```
```
npm i typescript ts-node
```
```
npm i kenex 
```
```
npm i express cors
```
##### Crie as tabelas tabela no mysql
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
npm run dev 
```


### Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [Mysql](https://dev.mysql.com/doc/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Aplicação

-link Deploy: 

-Documentação da API: 


### Autor

 <a href="https://www.linkedin.com/in/kell-lanes-dev/">Kell Lanes </a>

