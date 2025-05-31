var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar 
    jogoController.cadastrar(req, res);
});

module.exports = router;