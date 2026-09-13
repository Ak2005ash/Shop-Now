const express = require("express");
const Products = require("../models/product");

const app = express();



app.get("/", async (req, res) => {
    res.send("Product API is running");
});



