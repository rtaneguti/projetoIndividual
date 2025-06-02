var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/obterDadosDashboard/:fkUsuario", function (req, res) {
    // função a ser chamada quando acessar /rota_metricas/dashboard
    metricasController.obterDadosDashboard(req, res);
});

router.get("/obterRanking", function (req, res) {
    // função a ser chamada quando acessar /rota_metricas/dashboard
    metricasController.obterRanking(req, res);
});

module.exports = router;