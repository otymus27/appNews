const mongoose = require('mongoose');
const userService = require('../services/UserService');

// Aqui estamos criando um middleware, que literalmente é um interceptador

// Função para validar o ID
const validId = (req, res, next) => {

    // Receber um ID
    const id = req.params.id;

    // Verificar se o parâmetro está correto
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido!" });
    }

    // Função para avançar
    next();
}

// Função para validar se registro existe
const validUser = async (req, res, next) => {
    // Receber um ID
    const id = req.params.id;

    // Verificar se o parâmetro está correto
    const user = await userService.buscarPorId(id);

    // Verificar se existe algum registro vindo do banco de dados
    if (!user) {
        return res.status(400).send({ message: "Nenhum registro cadastrado!" });
    }

    // Função para avançar
    next();

}

module.exports = { validId, validUser };

