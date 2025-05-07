import { createServer } from "node:http";

const server = createServer((req, res) => {
res.end("Hello World!");
});

server.listen(33333, () => {
    console.log("Servidor rodando na porta http://localhost:33333/");
});