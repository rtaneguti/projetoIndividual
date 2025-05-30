CREATE DATABASE individual;

USE individual;

show tables;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY auto_increment,
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

SELECT * FROM Usuario;
truncate table Usuario;
INSERT INTO Usuario (nome, email, senha) VALUES 
	('Rafael Taneguti', 'rafael.taneguti@gmail.com', 'caroline21#');
