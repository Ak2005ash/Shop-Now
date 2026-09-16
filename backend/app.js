const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();
const app = express();
app.use(express.json());

//Routers
app.use("/api/v1", productRoutes);

app.get("/", (req, res) => {
    res.send("Shop Now Backend is running");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database")

        app.listen(PORT, () => {
            console.log("Server running on port 5000");
        });
    } catch (error) {
        console.error("Failed to connect to Database", error.message)
        process.exit(1);
    }
}

startServer();