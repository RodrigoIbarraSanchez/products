// Dependencias
var express = require("express");

var router = express.Router();

// Casos de uso
var Product = require("../application/products");

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Iniciando ejecución.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/products')

    // creando un producto en POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var product = new Product();					// create a new instance of the Products model
        product.name = req.body.name;					// set the products name (comes from the request)
        product.description = req.body.description;		// set the products description (comes from the request)
        product.price = req.body.price;					// set the products price (comes from the request)

        // save the bear and check for errors
        product.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Producto creado!' });
        });
        
    })

    // get all the products (accessed at GET http://localhost:8080/api/products)
    .get(function(req, res) {
        Product.find(function(err, products) {
            if (err)
                res.send(err);

            res.json(products);
        });
    });

router.route('/products/:product_id')

    // get the product with that id (accessed at GET http://localhost:8080/api/products/:product_id)
    .get(function(req, res) {
        Product.findById(req.params.product_id, function(err, product) {
            if (err)
                res.send(err);
            res.json(product);
        });
    })

    // update the product with this id (accessed at PUT http://localhost:8080/api/product/:product_id)
    .put(function(req, res) {

        // use our product model to find the product we want
        Product.findById(req.params.product_id, function(err, product) {

            if (err)
                res.send(err);

            product.name = req.body.name;				// actualiza el nombre del producto
            product.description = req.body.description 	// actualiza la descripción del producto
            product.price = req.body.price 				// actualiza el precio del producto

            // save the product
            product.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Producto actualizado!' });
            });

        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Product.remove({
            _id: req.params.product_id
        }, function(err, product) {
            if (err)
                res.send(err);

            res.json({ message: 'Se ha eliminado el producto' });
        });
    });

// Crear Ruta
/*router.get("/products", function(req, res){
	res.json({success: true, products: ['productoA', 'productoB', 'productoC']});
});*/

// Exportar archivo
module.exports = router;