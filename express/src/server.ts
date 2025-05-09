import express from 'express';
import helmet from 'helmet';
import path from 'path';


const server = express();
const PORT = 3333;

server.use(helmet()); // Adiciona segurança ao servidor
server.use(express.json()); // Permite o envio de JSON no corpo da requisição
server.use(express.urlencoded({ extended: true })); // Permite o envio de dados no formato x-www-form-urlencoded
server.use(express.static(path.join(__dirname, '../public'))); // Permite o envio de arquivos estáticos


server.get('/ping', (req, res) => {
  res.send({pong: true}); // Responde com "Pong!" quando a rota /ping é acessada
});


server.get('/', (req, res) => {

  res.send('Hello World!');

  let name = 'Lucas';
  let age = 25;

  res.json({ name, age })// Envia um JSON como resposta

});

server.listen(PORT, () => {
  console.log(`Server rodando na porta 3333 http://localhost:${PORT}`);
});




//npm i express
//npm i -D @types/express
//npm i helmet para configuração de segurança

