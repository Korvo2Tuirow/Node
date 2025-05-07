console.log("Hello, World!");

let nome:string = "Korvo";
let idade:number = 40; 
let token:string = process.env.TESTE_TOKEN as string; //para pegar o token do arquivo .env, use o comando: npm i dotenv e crie um arquivo .env na raiz do projeto com a variável TESTE_TOKEN=seu_token

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
console.log(`Meu token é ${token}`);

//para compilar o arquivo, use o comando:npx tsc teste.ts
//npx = node package execute
//tsc = typescript compiler	
//npx tsc --init para criar o arquivo tsconfig.json
//descomente a linha "outDir" e coloque o caminho da pasta onde deseja salvar os arquivos compilados
//npm i -D @types/node para instalar os tipos do node
