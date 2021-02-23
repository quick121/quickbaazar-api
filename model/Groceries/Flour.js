const mongoose = require('mongoose');

const flourSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    types: {
        type: Number,
        required: true

    },
    imageUrl: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true

    }
})


module.exports = mongoose.model("Groceries/flour", flourSchema)