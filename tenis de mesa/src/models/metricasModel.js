var database = require("../database/config");

function obterDadosDashboard(fkUsuario) {
    var instrucao = 
        `SELECT 
	        ROUND(SUM(CASE WHEN pontos_jogador1 > pontos_jogador2 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1) AS percentual_vitorias,
            SUM(pontos_jogador1) as pontos_ganhos,
            SUM(pontos_jogador1 + pontos_jogador2) as pontos_disputados,
            ROUND(AVG(pontos_jogador1), 1) as media_pontos
	        FROM Partida
	        WHERE fkUsuario = ${fkUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterDadosDashboard
};