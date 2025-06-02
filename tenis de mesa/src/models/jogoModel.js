var database = require("../database/config")

    function cadastrarPartida(
        fkUsuario,
        nome_jogador1,
        nome_jogador2,
        pontuacao_maxima,
        pontos_jogador1,
        pontos_jogador2,
        vencedor
        ) {
            console.log("Cheguei no models")
            var instrucao = `
                INSERT INTO Partida (
                    fkJogo, 
                    fkUsuario, 
                    nome_jogador1, 
                    nome_jogador2, 
                    pontuacao_maxima, 
                    pontos_jogador1, 
                    pontos_jogador2,
                    vencedor
                ) VALUES (1 , ${fkUsuario}, '${nome_jogador1}', '${nome_jogador2}', '${pontuacao_maxima}', '${pontos_jogador1}', '${pontos_jogador2}', '${vencedor}');
            `;

            console.log("Executando a instrução SQL: \n" + instrucao);
            return database.executar(instrucao);
        }

module.exports = {
    cadastrarPartida
};