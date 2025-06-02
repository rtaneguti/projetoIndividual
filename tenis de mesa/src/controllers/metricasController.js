var metricasModel = require("../models/metricasModel");

function obterDadosDashboard(req, res) {

    var fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        metricasModel.obterDadosDashboard(fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    obterDadosDashboard
}