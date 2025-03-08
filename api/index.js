// Incluir as bibliotecas e imports
// Biblioteca para gerenciar as requisições, rotas e URLs, entre outra funcionalidades
import express from 'express';

//Importando modulo de conexão do banco de dados
import db from './database/database.js';


// Importando rotas de acesso
import userRoute from './routes/user.route.js';
import loginRoute from './routes/login.route.js';
import noticiasRoute from './routes/noticias.route.js';
import swaggerRoute from './routes/swagger.route.js';


// Módulo para uso de variaveis globais
import dotenv from 'dotenv';
dotenv.config();

import cors from "cors";//compartilhamento de recursos diferentes entre o frontend com backend !!!muito importante!!!


// Chamar a função express
const app = express();

//Habilita o envio de arquivos json
app.use(express.json());


app.use(cors());//usamos aqui para liberar segurança da aplicação e tem que ser configurado antes de chamar as rotas

// Usando as rotas
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/noticias", noticiasRoute);
app.use("/doc", swaggerRoute);





// Chamando a função para conectar ao banco de dados
db();


// Variável para porta
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Rodando servidor backend na porta ${port}`));




