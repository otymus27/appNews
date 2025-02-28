import express from 'express';
import noticiasControle from '../controllers/noticias.controller.js';
import { validId, validUser } from '../middleware/global.middleware.js';
import autenticacao from '../middleware/autenticacao.middleware.js';

const router = express.Router();

// Rota para criar registro
router.post("/", autenticacao, noticiasControle.create);

// Rota para listar registros
router.get("/", noticiasControle.listar);

// Rota diferencia para listar primeiro item de uma lista destaque
router.get("/top", noticiasControle.topNews);


// Rota para buscar registros por id
//router.get("/:id",validId, validUser, noticiasControle.buscarPorId);

// Rota para excluir registro por id
//router.delete("/:id", noticiasControle.excluir);

// Rota para atualizar um registro por id
//router.patch("/:id", validId, validUser, noticiasControle.editar);

export default router;