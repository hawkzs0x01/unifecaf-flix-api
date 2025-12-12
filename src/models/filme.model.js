// src/models/filme.model.js
// Camada Model: Lógica de Acesso e Persistência de Dados (DB)

import { PrismaClient } from '@prisma/client';
// Inicializa o Prisma Client para realizar todas as operações no DB.
const prisma = new PrismaClient();

// Função para listar todos os filmes do acervo.
export async function listarTodos() {
  return prisma.filmes.findMany({
    // Ordena os resultados pelo nome do filme para melhor visualização.
    orderBy: { nome: 'asc' }
  });
}

// Função para buscar um filme específico pelo ID.
export async function buscarPorId(id) {
  
  // Validação: Garante que o ID é um número inteiro, retornando 400 se for inválido.
  if (!Number.isInteger(Number(id))) {
    throw { status: 400, message: "ID de filme inválido. Deve ser um número inteiro." };
  }

  // Busca o filme pela chave primária (ID).
  const filme = await prisma.filmes.findUnique({
    where: { id: Number(id) }
  });

  // Validação: Retorna 404 Not Found se o filme não for encontrado no banco.
  if (!filme) {
    throw { status: 404, message: `Filme com ID ${id} não encontrado.` };
  }

  return filme;
}

// Função para buscar filmes por termo no nome ou sinopse.
export async function buscarPorFiltro(termo) {
  
  // A busca parcial (contains) funciona de forma padronizada.
  // Evitamos argumentos 'mode'/'search' para manter a compatibilidade com o Prisma 5.
  return prisma.filmes.findMany({
    where: {
      // Cláusula OR: Permite que a busca encontre o termo em pelo menos um dos campos.
      OR: [
        { nome: { contains: termo } }, // Busca no campo nome.
        { sinopse: { contains: termo } } // Busca no campo sinopse.
      ]
    },
    orderBy: { nome: 'asc' }
  });
}