// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');
//importando a rota 
const userRoute = require('./routes/user.route');

// Chamar a função express
const app = express();

// Usando a rota
app.use("/soma", userRoute)

app.listen(3001);




