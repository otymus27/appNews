const User = require("../models/User");

const create = (body) => User.create(body);

const listar = () => User.find();

const buscarPorId = (id) => User.findById(id);

const editar = (id, body) => User.findByIdAndUpdate(id, body, { new: true });

const excluir = (id) => User.findByIdAndDelete(id);


module.exports = { create , listar, buscarPorId, editar, excluir};