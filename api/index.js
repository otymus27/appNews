// Incluir as bibliotecas e imports
// Biblioteca para gerenciar as requisições, rotas e URLs, entre outra funcionalidades
import express from 'express';

//Importando modulo de conexão do banco de dados
import db from './database/database.js';


// Importando rotas de acesso
import userRoute from './routes/user.route.js';
import loginRoute from './routes/login.route.js';


// Módulo para uso de variaveis globais
import dotenv from 'dotenv';
dotenv.config();


// Chamar a função express
const app = express();

//Habilita o envio de arquivos json
app.use(express.json());

// Usando as rotas
app.use("/user", userRoute);
app.use("/login", loginRoute);


// Chamando a função para conectar ao banco de dados
db();


// Variável para porta
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Rodando servidor backend na porta ${port}`));




