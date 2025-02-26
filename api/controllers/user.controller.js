// Importar o service para acessar o banco de dados
const UserService = require("../services/UserService");

const mongoose = require("mongoose");


// Função para cadastrar registros
const create = async(req, res) => {
     //Receber os dados de um formulário e desmembrar os dados
     const {nome, login, senha, email, foto, background} = req.body;   

     // Validar dados
     if(!nome || !login || !senha || !email || !foto || !background){
          res.status(400).send({"message":"Preencher todos os campos!"});          
     }

     // Aqui chamamos o service para cadastrar o registro no banco de dados
     const user = await UserService.create(req.body);

     if(!user){
          return res.status(400).send({message: "Erro ao criar registro!"})
     }

     //console.log(user);
     res.status(201).send({
          user:{
               id:user._id,
               nome,
               login,
               senha,
               email,
               foto,
               background
          },
          message:"Usuário criado com sucesso!"
     });
}

// Função para leitura de registros
const listar = async(req, res) => {
     // Variável para receber um conjunto de registros ou array
     const users = await UserService.listar();

     if (users.length === 0) {
          return res.status(400).send({ message: "Nenhum registro cadastrado!" });
     }

     //
     res.status(200).send(users);
}

// Função para buscar registros por ID
const buscarPorId = async(req, res) => {
     // Aqui passamos o parâmetro para rota
     const id = req.params.id;

     // Verificar se o parâmetro está correto
     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).send({ message: "ID inválido!" });
     }

     // Variável para receber o registro vindo do banco de dados, além de passarmos o parâmetro para função 
     const user = await UserService.buscarPorId(id);

     // Verificar se existe algum registro vindo do banco de dados
     if (!user) {
          return res.status(400).send({ message: "Nenhum registro cadastrado!" });
     }

     //
     res.status(200).send(user);
}

     


module.exports = { create, listar, buscarPorId }