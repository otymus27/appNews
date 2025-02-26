const route = require('express').Router();
const userControle = require('../controllers/user.controller');
const { validId, validUser } = require('../middleware/global.middleware');


// Rota para criar registro
route.post("/", userControle.create);

// Rota para listar registros
route.get("/", userControle.listar);

// Rota para buscar registros por id
route.get("/:id",validId, validUser, userControle.buscarPorId);

// Rota para excluir registro por id
route.delete("/:id", userControle.excluir);

// Rota para atualizar um registro por id
route.patch("/:id", validId, validUser, userControle.editar);

module.exports = route;