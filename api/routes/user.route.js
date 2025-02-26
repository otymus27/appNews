import express from 'express';
import userControle from '../controllers/user.controller.js';
import { validId, validUser } from '../middleware/global.middleware.js';

const router = express.Router();

// Rota para criar registro
router.post("/", userControle.create);

// Rota para listar registros
router.get("/", userControle.listar);

// Rota para buscar registros por id
router.get("/:id",validId, validUser, userControle.buscarPorId);

// Rota para excluir registro por id
router.delete("/:id", userControle.excluir);

// Rota para atualizar um registro por id
router.patch("/:id", validId, validUser, userControle.editar);

export default router;