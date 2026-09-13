const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/shopnowDB`);

const productSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: [String],
        required: true
    },

    category: {
        type: String,
        required: true
    },

    subCategory: {
        type: String,
        required: true
    },

    sizes: {
        type: [String],
        required: true
    },

    date: {
        type: Number,
        required: true
    },

    bestseller: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Product", productSchema);