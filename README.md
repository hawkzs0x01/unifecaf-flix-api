# 🎬 UniFECAF Flix API  
API REST desenvolvida em Node.js para o catálogo de filmes da plataforma UniFECAF Flix.  
O projeto segue arquitetura **MVC**, utiliza **Prisma ORM** para acesso ao banco MySQL e adota rigorosamente o padrão **REST**.

---

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express**
- **Prisma ORM (v5.15.0)**
- **MySQL**
- **Dotenv**
- **Arquitetura MVC**
- **RESTful API**

---

## 📁 Estrutura do Projeto

unifecaf-flix-api/
├── app.js
├── prisma/
│ └── schema.prisma
├── src/
│ ├── routes/
│ │ └── filmes.routes.js
│ ├── controllers/
│ │ └── filme.controller.js
│ └── models/
│ └── filme.model.js
├── package.json
├── database.sql
├── .gitignore

---

## 🔌 Endpoints da API

### ▶️ **1. Listar todos os filmes**
**GET** `/v1/controle-filmes/filme`  
Retorna todos os filmes cadastrados.

---

### ▶️ **2. Buscar filme por ID**
**GET** `/v1/controle-filmes/filme/:id`  
Exemplo:  
`/v1/controle-filmes/filme/1`

---

### ▶️ **3. Filtrar filmes por nome ou sinopse**
**GET** `/v1/controle-filmes/filtro/filme?nome=xxx`

Exemplo:  
`/v1/controle-filmes/filtro/filme?nome=origem`

---

## 🛠️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/unifecaf-flix-api.git

2️⃣ Instalar dependências
npm install

3️⃣ Gerar o Prisma Client
npx prisma generate

4️⃣ Criar o arquivo .env
DATABASE_URL="mysql://usuario:senha@localhost:3306/unifecaf_flix"

5️⃣ Rodar a API
npm start


Servidor no ar em:
👉 http://localhost:3000/v1/controle-filmes

📦 Script SQL Utilizado

O arquivo database.sql contém:

criação da tabela filmes

seed com 5 filmes

limpeza e recriação da tabela

📌 Sobre o Desenvolvimento

Arquitetura 100% baseada em MVC

Tratamento correto de erros e Status HTTP

Padrões REST aplicados de forma completa

Testes feitos no Postman

Uso do Prisma para garantir consultas seguras e legíveis

👤 Autor

Guilherme Rodrigues de Oliveira
Projeto desenvolvido para a disciplina Web Programming for Back-End – UniFECAF.