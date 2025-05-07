import express from 'express';


const server = express();
const PORT = 3333;

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server rodando na porta 3333 http://localhost:${PORT}`);});




//npm i express
//npm i -D @types/express