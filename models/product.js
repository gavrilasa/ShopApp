const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Must be Entered']
    },
    brand: {
        type: String,
        required: [true, 'Brand Must be Entered']
    },
    price: {
        type: Number,
        required: [true, 'Price Number Must be Entered']
    },
    color: {
        type: String,
        required: [true, 'Color Must be Entered']
    },
    category: {
        type: String,
        enum: ['Baju', 'Celana', 'Topi', 'Aksesoris', 'Jaket'],
        required: true
    },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product