const express = require("express");
const { GetProducts } = require("../controllers/productController");

const router = express.Router();

router.get("/products" , GetProducts);

module.exports = router;