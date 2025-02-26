const User = require("../models/User");

const create = (body) => User.create(body);

const listar = () => User.find();

const buscarPorId = (id) => User.findById(id);

const excluir = (id) => User.findByIdAndDelete(id);

const editar = (id, nome, login, senha, email, foto, background) => User.findOneAndUpdate(
     { _id: id },
     { nome, login, senha, email, foto, background },
);




module.exports = { create, listar, buscarPorId, editar, excluir };