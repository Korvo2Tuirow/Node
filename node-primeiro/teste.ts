console.log("Hello, World!");

let nome:string = "Korvo";
let idade:number = 20; 

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//para compilar o arquivo, use o comando:npx tsc teste.ts
//npx = node package execute
//tsc = typescript compiler	
//npx tsc --init para criar o arquivo tsconfig.json
//descomente a linha "outDir" e coloque o caminho da pasta onde deseja salvar os arquivos compilados