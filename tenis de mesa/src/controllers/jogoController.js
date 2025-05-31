var jogoModel = require("./models/jogoModel");

function cadastrar(req, res) {
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    jogoModel.cadastrar(nome).then(function(resposta){
        res.status(200).send("Dados inseridos com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}