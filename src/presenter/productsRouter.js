// Dependencias
var express = require("express");

var router = express.Router();

// Casos de uso
//var products = require("../application/products");

// Crear Ruta
router.get("/products", function(rec, res){
	res.json({success: true, products: [1,2,3]});
});

// Exportar archivo
module.exports = router;