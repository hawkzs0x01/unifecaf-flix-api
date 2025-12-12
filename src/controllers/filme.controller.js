// src/controllers/filme.controller.js
// Camada Controller: Lógica de Requisição/Resposta e Status HTTP

import * as FilmeModel from '../models/filme.model.js';

// GET /v1/controle-filmes/filme
export async function listarFilmes(req, res) {
  try {
    // 1. Chama o Model para buscar os dados no DB
    const filmes = await FilmeModel.listarTodos();
    
    // 2. Retorna 200 OK em caso de sucesso
    res.status(200).json({
      status: 200,
      message: "Lista de filmes recuperada com sucesso.",
      data: filmes
    });
  } catch (err) {
    // Retorno padrão 500 para erros inesperados no servidor/DB
    res.status(500).json({ status: 500, message: "Erro interno do servidor ao listar filmes.", error: err.message });
  }
}

// GET /v1/controle-filmes/filme/:id
export async function buscarFilmePorId(req, res) {
  try {
    // Chama o Model, que lida com as validações de 400 (ID inválido) e 404 (não encontrado)
    const filme = await FilmeModel.buscarPorId(req.params.id);
    
    // 200 OK: Filme encontrado
    res.status(200).json({
      status: 200,
      message: "Filme encontrado com sucesso.",
      data: filme
    });
  } catch (err) {
    // Trata os Status Codes (400, 404) lançados pelo Model, ou 500 se for erro interno.
    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message || "Erro interno do servidor ao buscar filme."
    });
  }
}

// GET /v1/controle-filmes/filtro/filme?nome=xxx
export async function filtrarFilmes(req, res) {
  try {
    const termo = req.query.nome || '';
    
    // VALIDAÇÃO DE ENTRADA (Requisito REST/Status 400)
    // Se o termo for muito curto ou vazio, lançamos um erro 400.
    if (termo.length < 2) {
      throw { status: 400, message: "O parâmetro 'nome' é obrigatório e deve ter pelo menos 2 caracteres para a busca." };
    }

    // Busca os filmes no Model
    const filmes = await FilmeModel.buscarPorFiltro(termo);
    
    // 200 OK: Retorna os resultados encontrados (pode ser lista vazia)
    res.status(200).json({
      status: 200,
      message: `Filmes filtrados com sucesso. Encontrados ${filmes.length} resultados.`,
      data: filmes
    });
  } catch (err) {
    // Captura o erro 400 da validação ou erros 500/404 do Model/DB.
    res.status(err.status || 500).json({ status: err.status || 500, message: err.message || "Erro interno do servidor ao filtrar filmes." });
  }
}