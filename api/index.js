// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades

import express from 'express';
import userRoute from './routes/user.route.js';
//Importando modulo de conexão do banco de dados
import db from './database/database.js';



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




