# UniFECAF Flix API

API REST desenvolvida em Node.js para o catálogo de filmes da plataforma UniFECAF Flix. O projeto segue a arquitetura MVC, utiliza Prisma ORM para acesso ao banco MySQL e adota rigorosamente o padrão REST.

---


# Tecnologias Utilizadas

A aplicação utiliza um stack moderno e robusto:

**Node.js / Express:** Servidor back-end e framework para rotas.

**Prisma ORM (v5.15.0):** Camada de acesso a dados (resolvendo a complexidade da conexão MySQL).

**MySQL:** Banco de dados relacional.

**Dotenv:** Gerenciamento seguro de variáveis de ambiente.

**Arquitetura MVC:** Para separação clara de responsabilidades.

**RESTful API:** Para comunicação padronizada.

---


# Estrutura do Projeto

A estrutura reflete o padrão MVC, facilitando a manutenção e a localização das camadas.

**unifecaf-flix-api/**

**app.js** — Ponto de entrada do servidor

**prisma/schema.prisma** — Definição do modelo de dados

**src/routes/filmes.routes.js** — Mapeamento de endpoints (Routing)

**src/controllers/filme.controller.js** — Lógica de requisições e respostas (Controller)

**src/models/filme.model.js** — Acesso ao banco de dados via Prisma (Model)

**package.json** — Dependências e scripts do projeto

**database.sql** — Script de criação da tabela e seed inicial

**.env** — Variável DATABASE_URL (configuração do MySQL)

---


# Endpoints da API

A API é acessada pelo prefixo /v1/controle-filmes. Todos os endpoints de consulta utilizam o método GET.


#### 1. Listar todos os filmes (Retorna o acervo completo).

GET

/v1/controle-filmes/filme/:id


#### 2. Buscar filme por ID (Busca um recurso específico).

GET

/v1/controle-filmes/filtro/filme?nome=xxx


#### 3. Filtrar filmes por nome ou sinopse (Busca parcial).

Exemplos de Uso:

GET http://localhost:3000/v1/controle-filmes/filme/1

GET http://localhost:3000/v1/controle-filmes/filtro/filme?nome=origem

---


#### Como Rodar o Projeto

Siga os passos abaixo para colocar a API em funcionamento no seu ambiente local:


#### 1. Preparação do Ambiente

Clonar o Repositório:

git clone [https://github.com/hawkzs0x01/unifecaf-flix-api.git](https://github.com/hawkzs0x01/unifecaf-flix-api.git)
cd unifecaf-flix-api


**Instalar Dependências:**

npm install


**Configurar o Banco de Dados:**

Crie o banco de dados unifecaf_flix no seu MySQL.

Execute o script database.sql para criar a tabela filmes e inserir os 5 filmes iniciais (o seed).

---


#### 2. Configuração e Inicialização


**Gerar o Prisma Client:**

npx prisma generate


**Criar o arquivo .env:**

Crie o arquivo .env na raiz do projeto com sua URL de conexão (ajuste usuário e senha se necessário):

DATABASE_URL="mysql://usuario:senha@localhost:3306/unifecaf_flix"


**Rodar a API:**

node app.js



**Servidor no ar em:**
http://localhost:3000/v1/controle-filmes

---


# Script SQL Utilizado

O arquivo database.sql é crucial. Ele contém a criação da tabela filmes e o seed inicial com 5 filmes (O Poderoso Chefão, A Origem, etc.), garantindo que o acervo esteja pronto para as consultas da API.

---


# Sobre o Desenvolvimento

Arquitetura 100% baseada em MVC.

Tratamento correto de erros e Status HTTP (200, 400, 404).

Padrões REST aplicados de forma completa.

Uso do Prisma para garantir consultas seguras e legíveis.

Teste de todos os endpoints realizado via Postman.

---


# Autor

Guilherme Rodrigues de Oliveira

Projeto desenvolvido para a disciplina Web Programming for Back-End – UniFECAF.