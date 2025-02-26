// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

app.get("/", (req, res) =>{
     res.send("Rodando servidor backend na porta 3001!")   
     console.log("Rodando servidor backend na porta 3001!")  
})

app.listen(3001);




