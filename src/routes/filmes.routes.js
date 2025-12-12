// src/routes/filmes.routes.js
// Camada de Rotas: Mapeia os Endpoints para as funções do Controller

import express from 'express';
import * as FilmeController from '../controllers/filme.controller.js';

const router = express.Router();

// A ordem das rotas é importante: a rota específica (filtro) deve vir antes da rota dinâmica (:id).
// Se o filtro vier depois, o Express pode interpretar "filtro" como um ID.

// GET /v1/controle-filmes/filtro/filme?nome=xxx
// Endpoint 3: Filtra filmes por nome ou sinopse.
router.get('/filtro/filme', FilmeController.filtrarFilmes);

// GET /v1/controle-filmes/filme/:id
// Endpoint 2: Busca um filme específico pelo ID.
router.get('/filme/:id', FilmeController.buscarFilmePorId);

// GET /v1/controle-filmes/filme
// Endpoint 1: Lista todos os filmes do acervo.
router.get('/filme', FilmeController.listarFilmes);

export default router;