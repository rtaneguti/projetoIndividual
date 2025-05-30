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
idPartida INT, 
fkJogo INT,
fkUsuario INT,
pontuacao_maxima INT,
pontosJogador1 INT, 
pontosJogador2 INT, 
data_partida DATETIME,
CONSTRAINT pkPartida PRIMARY KEY (idPartida, fkJogo, fkUsuario),
CONSTRAINT fkPartidaUsuario 
	FOREIGN KEY (fkUsuario)
    REFERENCES Usuario(idUsuario), 
CONSTRAINT fkPartidaJogo 
	FOREIGN KEY (fkJogo)
    REFERENCES Jogo(idJogo)
);

SELECT * FROM Usuario;

INSERT INTO Usuario (nome, email, senha) VALUES 
	('Rafael Taneguti', 'rafael.taneguti@gmail.com', 'caroline21#');
