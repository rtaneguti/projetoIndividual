var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/cadastrarPartida", function (req, res) {
    // função a ser chamada quando acessar 
    console.log("Passei pela rota");
    jogoController.cadastrarPartida(req, res);
});

module.exports = router;