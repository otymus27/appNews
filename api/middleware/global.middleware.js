import mongoose from 'mongoose';
import userService from '../services/UserService.js';


// Aqui estamos criando um middleware, que literalmente é um interceptador

// Função para validar o ID
export const validId = (req, res, next) => {
    try {
        // Receber um ID
        const id = req.params.id;

        // Verificar se o parâmetro está correto
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID inválido!" });
        }

        // Função para avançar
        next();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

// Função para validar se registro existe
export const validUser = async (req, res, next) => {
    try {
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
    } catch (error) {
        res.status(500).send({ message: error.message });
    }


}



