// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');
//importando a rota 
const userRoute = require('./routes/user.route');

//Importando modulo de conexão do banco de dados
const db = require('./database/database');


// Chamar a função express
const app = express();

//Habilita o envio de arquivos json
app.use(express.json());

// Usando a rota
app.use("/user", userRoute);

// Chamando a função para conectar ao banco de dados
db();


// Variável para porta
const port = 3001;

app.listen(port, () => console.log(`Rodando servidor backend na porta ${port}`));




