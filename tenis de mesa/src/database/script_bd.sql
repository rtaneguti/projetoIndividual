CREATE DATABASE individual;

USE individual;

USE individual;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(60) NOT NULL
);

CREATE TABLE resultado_partida (
idPartidas INT PRIMARY KEY,
dtPartida DATETIME,
duracao_partida INT,
pontuacao_jogador INT,
pontuacao_maquina INT, 
fkUsuario INT,
CONSTRAINT fkResultadoUser 
	FOREIGN KEY (fkUsuario)
    REFERENCES Usuario(idUsuario)
);

