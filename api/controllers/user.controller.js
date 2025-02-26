// Importar o service para acessar o banco de dados
import UserService from "../services/UserService.js";


// const mongoose = require("mongoose");


// Função para cadastrar registros
const create = async (req, res) => {
     try {
          //Receber os dados de um formulário e desmembrar os dados
          const { nome, login, senha, email, foto, background } = req.body;

          // Validar dados
          if (!nome || !login || !senha || !email || !foto || !background) {
               res.status(400).send({ "message": "Preencher todos os campos!" });
          }

          // Aqui chamamos o service para cadastrar o registro no banco de dados
          const user = await UserService.create(req.body);

          if (!user) {
               return res.status(400).send({ message: "Erro ao criar registro!" })
          }

          // Resposta para o cliente
          res.status(201).send({
               user: {
                    id: user._id,
                    nome,
                    login,
                    senha,
                    email,
                    foto,
                    background
               },
               message: "Usuário criado com sucesso!"
          });

     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para leitura de registros
const listar = async (req, res) => {

     try {
          // Variável para receber um conjunto de registros ou array
          const users = await UserService.listar();

          if (users.length === 0) {
               return res.status(400).send({ message: "Nenhum registro cadastrado!" });
          }

          // Resposta para o cliente
          res.status(200).send(users);

     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para buscar registros por ID
const buscarPorId = async (req, res) => {
     try {
          // Aqui passamos o parâmetro para rota
          const id = req.params.id;

          // Variável para receber o registro vindo do banco de dados, além de passarmos o parâmetro para função 
          const user = await UserService.buscarPorId(id);

          // Resposta para o cliente
          res.status(200).send(user);
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para excluir registros por ID
const excluir = async (req, res) => {
     try {
          // Aqui passamos o parâmetro para rota
          const id = req.params.id;

          // Verificar se o parâmetro está correto
          if (!mongoose.Types.ObjectId.isValid(id)) {
               return res.status(400).send({ message: "ID inválido!" });
          }

          // Variável para receber o registro vindo do banco de dados, além de passarmos o parâmetro para função 
          const user = await UserService.excluir(id);

          // Verificar se existe algum registro vindo do banco de dados
          if (!user) {
               return res.status(400).send({ message: "Nenhum registro cadastrado!" });
          }

          // Resposta para o cliente
          res.status(200).send(user);
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

// Função para cadastrar registros
const editar = async (req, res) => {
     try {
          //Receber os dados de um formulário e desmembrar os dados
          const { nome, login, senha, email, foto, background } = req.body;

          // Aqui passamos o parâmetro para rota
          const id = req.params.id;

          // Aqui chamamos o service para buscarPorId o registro no banco de dados, passando o id 
          const user = await UserService.buscarPorId(id);

          // Aqui chamamos o service para atualizar o registro no banco de dados, passando o id e os dados
          await UserService.editar(id, nome, login, senha, email, foto, background);

          // Resposta para o cliente
          res.status(200).send({ message: "Registro atualizado com sucesso!" });
     } catch (error) {
          res.status(500).send({ message: error.message });
     }

}

export default { create, listar, buscarPorId, excluir, editar }