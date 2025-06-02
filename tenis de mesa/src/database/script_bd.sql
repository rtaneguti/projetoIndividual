CREATE DATABASE individual;

USE individual;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(60) NOT NULL
);

ALTER TABLE Usuario 
	MODIFY COLUMN nome VARCHAR(100) NOT NULL, 
	MODIFY COLUMN email VARCHAR(100) NOT NULL UNIQUE, 
	MODIFY COLUMN senha VARCHAR(60) NOT NULL;

CREATE TABLE Jogo (
idJogo INT PRIMARY KEY auto_increment,
nome VARCHAR(45) NOT NULL,
descricao VARCHAR(100),
data_lancamento DATE
);

CREATE TABLE Partida (
idPartida INT auto_increment, 
fkJogo INT,
fkUsuario INT,
nome_jogador1 VARCHAR(50),
nome_jogador2 VARCHAR(50),
pontuacao_maxima INT,
pontos_jogador1 INT, 
pontos_jogador2 INT, 
data_partida DATETIME default current_timestamp,
CONSTRAINT pkPartida PRIMARY KEY (idPartida, fkJogo, fkUsuario),
CONSTRAINT fkPartidaUsuario 
	FOREIGN KEY (fkUsuario)
    REFERENCES Usuario(idUsuario), 
CONSTRAINT fkPartidaJogo 
	FOREIGN KEY (fkJogo)
    REFERENCES Jogo(idJogo)
);

ALTER TABLE Partida MODIFY COLUMN nome_jogador1 VARCHAR(100),
	MODIFY COLUMN nome_jogador2 VARCHAR(100);

SHOW TABLES;

SELECT * FROM Usuario;
INSERT INTO Usuario (nome, email, senha) VALUES 
	('Rafael Taneguti', 'rafael.taneguti@gmail.com', 'caroline21#');

SELECT * FROM Partida;

INSERT INTO Jogo VALUES 
	(default, 'Jogo Pong', 'Dois jogadores controlam raquetes para rebater uma bola. Vence quem alcançar a pontuação máxima.', '2025-06-03');
ALTER TABLE Partida ADD COLUMN vencedor VARCHAR(50) NOT NULL;
