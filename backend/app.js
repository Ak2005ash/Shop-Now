const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");

const productRoutes = require("./routes/productRoutes");


const app = express();

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Shop Now Backend is running");
});



app.listen(5000, () => {
    console.log("Server running on port 5000");
});