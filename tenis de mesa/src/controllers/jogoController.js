var jogoModel = require("../models/jogoModel");

function cadastrarPartida(req, res) {
    // var idPartida = req.body.idPartidaServer;
    // var fkJogo = req.body.fkJogoServer;

    var fkUsuario = req.body.fkUsuarioServer;
    var nome_jogador1 = req.body.nome_jogador1Server; 
    var nome_jogador2 = req.body.nome_jogador2Server;
    var pontuacao_maxima = req.body.pontuacao_maximaServer;
    var pontos_jogador1 = req.body.pontos_jogador1Server;
    var pontos_jogador2 = req.body.pontos_jogador2Server;

    console.log("Entrei no controller")
    console.log("fkUsuario:" + fkUsuario)
    console.log("nome_jogador1:" + nome_jogador1)
    console.log("nome_jogador2:" + nome_jogador2)
    console.log("pontuacao_maxima:" + pontuacao_maxima)
    console.log("pontos_jogador1:" + pontos_jogador1)
    console.log("pontos_jogador2:" + pontos_jogador2)

    // if (idPartida == undefined) {
    //     res.status(400).send("Seu nome está undefined!");
    // } else 
    // if (fkJogo == undefined) {
    //     res.status(400).send("O fkJogo está undefined!");
    // } else 
    if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!");
    } else if (nome_jogador1 == undefined) {
        res.status(400).send("O nome do jogador 1 está undefined!");
    } else if (nome_jogador2 == undefined) {
        res.status(400).send("O nome do jogador 2 está undefined!");
    } else if (pontuacao_maxima == undefined) {
        res.status(400).send("A pontuação máxima está undefined!");
    } else if (pontos_jogador1 == undefined) {
        res.status(400).send("Os pontos do jogador 1 está undefined!");
    } else if (pontos_jogador2 == undefined) {
        res.status(400).send("Os pontos do jogador 2 está undefined!");
    }
    else {
        console.log("Passei pela validação do control")
        jogoModel.cadastrarPartida( 
            fkUsuario,
            nome_jogador1, 
            nome_jogador2, 
            pontuacao_maxima, 
            pontos_jogador1, 
            pontos_jogador2
        ).then(function (resultado) {
            res.status(200).send("Dados inseridos com sucesso");
            console.log("Deu certo")
        }).catch(function (erro) {
            console.log("Deu errado")
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    cadastrarPartida
}