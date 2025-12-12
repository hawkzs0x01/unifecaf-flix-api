// app.js
// Arquivo Principal: Inicializa o Servidor Express e as Configurações Globais

import express from 'express';
import dotenv from 'dotenv';
import filmeRoutes from './src/routes/filmes.routes.js';

// 1. Configuração de Variáveis de Ambiente
// Carrega todas as variáveis do arquivo .env (incluindo DATABASE_URL e PORT).
dotenv.config();

// 2. Inicialização do Servidor
const app = express();
// Define a porta do servidor, usando a variável de ambiente ou a 3000 como padrão.
const PORT = process.env.PORT || 3000;

// 3. Middlewares
// Permite que o Express entenda e processe dados JSON nas requisições (POST/PUT).
app.use(express.json());

// 4. Configuração das Rotas
// Define o prefixo global da API (/v1/controle-filmes), mantendo a organização REST.
app.use('/v1/controle-filmes', filmeRoutes);

// 5. Tratamento de rotas não encontradas (404)
// Este middleware captura requisições para rotas que não foram definidas.
app.use((req, res, next) => {
    res.status(404).json({ 
        status: 404,
        message: 'Rota não encontrada. Consulte a rota principal para endpoints válidos.' 
    });
});

// 6. Inicia o Servidor
app.listen(PORT, () => {
  console.log(`🎬 Servidor UniFECAF Flix rodando na porta ${PORT}`);
  console.log(`🔗 Link: http://localhost:${PORT}`);
});