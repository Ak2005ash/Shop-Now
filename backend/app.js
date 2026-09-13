const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();
const app = express();
app.use(express.json());

//Routers
app.use("/api", productRoutes);

app.get("/", (req, res) => {
    res.send("Shop Now Backend is running");
});

//Connection to Database
const main = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
}
main().then(async () => {
    console.log("Connected to Database")
}).catch((err) => {
    console.log("Failed to connect to Database")
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});