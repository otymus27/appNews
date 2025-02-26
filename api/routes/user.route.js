const route = require('express').Router();

const userControle = require('../controllers/user.controller');

// Rota para criar registro
route.post("/", userControle.create);

// Rota para listar registros
route.get("/", userControle.listar);

// Rota para buscar registros por id
route.get("/:id", userControle.buscarPorId);

module.exports = route;