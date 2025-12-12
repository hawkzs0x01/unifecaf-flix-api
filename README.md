🎬 UniFECAF Flix API

API REST desenvolvida em Node.js para o catálogo de filmes da plataforma UniFECAF Flix.
O projeto segue a arquitetura MVC, utiliza Prisma ORM para acesso ao banco MySQL e adota rigorosamente o padrão REST.

🚀 Tecnologias Utilizadas

A aplicação utiliza um stack moderno e robusto:

Node.js / Express – Servidor back-end e framework para rotas

Prisma ORM (v5.15.0) – Camada de acesso a dados

MySQL – Banco de dados relacional

Dotenv – Gerenciamento seguro de variáveis de ambiente

Arquitetura MVC – Separação clara de responsabilidades

RESTful API – Comunicação padronizada

📁 Estrutura do Projeto

A estrutura reflete o padrão MVC, facilitando manutenção, organização e escalabilidade:

unifecaf-flix-api/
├── app.js               # Ponto de entrada do servidor
├── prisma/
│   └── schema.prisma    # Definição do modelo de dados
├── src/
│   ├── routes/
│   │   └── filmes.routes.js     # Mapeamento de Endpoints (GET /filme)
│   ├── controllers/
│   │   └── filme.controller.js  # Lógica de requisição/resposta e Status HTTP
│   └── models/
│       └── filme.model.js       # Lógica de acesso ao DB (Prisma ORM)
├── package.json         # Dependências e scripts
├── database.sql         # Script para criação da tabela e seed inicial
└── .env                 # Arquivo com a DATABASE_URL

🔌 Endpoints da API

A API é acessada pelo prefixo:

/v1/controle-filmes


Todos os endpoints retornam JSON e utilizam o método GET.

Método	Endpoint	Descrição
GET	/v1/controle-filmes/filme	1. Listar todos os filmes (acervo completo)
GET	/v1/controle-filmes/filme/:id	2. Buscar filme por ID
GET	/v1/controle-filmes/filtro/filme?nome=xxx	3. Filtrar filmes por nome ou sinopse
Exemplos:
GET /v1/controle-filmes/filme/1
GET /v1/controle-filmes/filtro/filme?nome=origem

🛠️ Como Rodar o Projeto
1. Preparação

Clonar o Repositório:

git clone https://github.com/hawkzs0x01/unifecaf-flix-api.git
cd unifecaf-flix-api


Instalar Dependências:

npm install


Configurar o Banco de Dados:

Criar o banco unifecaf_flix no MySQL

Executar o arquivo database.sql para criar a tabela filmes e inserir os 5 filmes iniciais

2. Configuração e Inicialização

Gerar o Prisma Client:

npx prisma generate


Criar o arquivo .env:

Crie um arquivo .env na raiz com sua URL de conexão:

DATABASE_URL="mysql://usuario:senha@localhost:3306/unifecaf_flix"


Rodar a API:

node app.js


Servidor disponível em:

👉 http://localhost:3000/v1/controle-filmes

📦 Script SQL Utilizado

O arquivo database.sql contém:

Criação da tabela filmes

Seed inicial com 5 filmes (ex.: O Poderoso Chefão, A Origem, etc.)

Isso garante que o acervo esteja pronto para as consultas da API.

📌 Sobre o Desenvolvimento

Arquitetura 100% MVC

Tratamento correto de erros (200, 400, 404)

Padrões REST implementados corretamente

Prisma ORM garantindo consultas seguras

Testes realizados via Postman

👤 Autor

Guilherme Rodrigues de Oliveira
Projeto desenvolvido para a disciplina Web Programming for Back-End – UniFECAF.