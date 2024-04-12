const express = require("express");
const productsRounter = express.Router();
const products = require("../data/products.json");


productsRounter.route("/").get((req, res) => {
    res.render("products",{
      products,
    }
    );
  });
  
  productsRounter.route("/:id").get((req, res) => {
    const id =req.params.id;
    res.render("product",{
      product:products[id],
    });
  });

module.exports = productsRounter;