const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

app.get("/", (req, res) => {
    res.send("Shop Now Backend is running");
});

app.get("/test-product", async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            { _id: "test001" },
            {
                _id: "test001",
                name: "Test T-Shirt",
                description: "This is a test product",
                price: 499,
                image: ["test.jpg"],
                category: "Men",
                subCategory: "Topwear",
                sizes: ["S", "M", "L", "XL"],
                date: Date.now(),
                bestseller: true
            },
            { upsert: true, new: true }
        );

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});