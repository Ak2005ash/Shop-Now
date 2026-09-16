const Product = require("../models/Product");

//Get All Products
module.exports.GetProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Add Product
module.exports.AddProduct = async (req, res) => {
    try {
        const { name, description, price, image, category, bestseller } = req.body;
        if (!name || !description || !price || !image || !category) {
            return res.status(400).json({ message: "Fill all the required fields" });
        }

        const product = {
            name, description, price, image, category, bestseller
        }

        await Product.create(product);

        return res.status(201).json({ message: "Product Added" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Delete Product
module.exports.DeleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(400).json({ message: "Product Id Not Recieved" })
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" })
        }

        await Product.findByIdAndDelete(productId);

        return res.status(200).json({ message: "Product Deleted" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}