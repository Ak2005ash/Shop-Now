const express = require("express");
const { GetProducts, AddProduct, DeleteProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/products", GetProducts);
router.post("/addproduct", AddProduct)
router.delete("/product/:id", DeleteProduct)

module.exports = router;