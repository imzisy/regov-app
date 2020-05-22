var express = require("express");
var router = express.Router();
var _ = require("underscore");


let products = [];

// sample
let product = {
  id : 1,
  name: "product name"
}

// login need to have middleware to check if user loged in or not.
var jwt = require('jsonwebtoken');
var token = jwt.sign({ name: 'emad' }, 'secret');
console.log(token);

var decoded = jwt.verify(token, 'secret');
console.log(decoded) // bar


/* GET All products. */
router.get("/", function (req, res, next) {
  res.json(`it's working`);
});

/* GET All products. */
router.get("/products", function (req, res, next) {
  res.json(products);
});

/* post new product. */
router.post("/Products", function (req, res, next) {
  let product = {
    id: req.body.id,
    name: req.body.name,
  }
  products.push(product);
  res.json('Added!');
});

/* Delete porduct */
router.delete("/products", function (req, res, next) {
  let productID = req.body.id;
  products = _.without(products, _.findWhere(products, {
    id: productID
  }));
  res.json(products);
});

module.exports = router;
