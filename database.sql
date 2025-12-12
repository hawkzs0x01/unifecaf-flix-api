-- Garante que estamos usando o banco correto
USE unifecaf_flix;

-- -----------------------------------------------------
-- Tabela 'filmes'
-- -----------------------------------------------------
-- O comando DROP evita erros rodar o script duas vezes
DROP TABLE IF EXISTS filmes;

CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    imagem VARCHAR(500), -- URL da imagem da capa
    data_lancamento DATE,
    duracao INT, -- Em minutos
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Inserção de Dados (Seed)
-- -----------------------------------------------------
INSERT INTO filmes (nome, sinopse, imagem, data_lancamento, duracao) VALUES 
(
    'O Poderoso Chefão', 
    'O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.', 
    'https://upload.wikimedia.org/wikipedia/pt/c/c4/Godfather_vhs.jpg',
    '1972-03-24',
    175
),
(
    'A Origem', 
    'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos é dado a tarefa inversa de plantar uma ideia na mente de um CEO.', 
    'https://upload.wikimedia.org/wikipedia/pt/b/b6/Inception.jpg',
    '2010-07-16',
    148
),
(
    'Matrix', 
    'Um programador de computador descobre que a realidade simulada criada por máquinas, e se junta a uma rebelião cibernética.', 
    'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg',
    '1999-03-31',
    136
),
(
    'Interestelar', 
    'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade.', 
    'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.jpg',
    '2014-11-06',
    169
),
(
    'Cidade de Deus', 
    'Nos subúrbios do Rio de Janeiro, dois meninos crescem em um bairro violento. Um se torna fotógrafo, o outro um traficante.', 
    'https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg',
    '2002-08-30',
    130
);

-- Confirmação visual
SELECT * FROM filmes;
