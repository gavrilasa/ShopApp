const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1/shop_db')
    .then((result) => {
        console.log('Connected to MongoDB')
    }).catch((err) => {
        console.log(err)
    })

const seedProducts = [
    {
        name: "Men's Crew Neck T-Shirt",
        brand: "Uniqlo",
        price: 149000,
        color: "White",
        category: "Baju"
    },
    {
        name: "Slim Fit Formal Shirt",
        brand: "Zara",
        price: 349000,
        color: "Light Blue",
        category: "Baju"
    },
    {
        name: "Air Max Running Shoes",
        brand: "Nike",
        price: 899000,
        color: "Black",
        category: "Aksesoris"
    },
    {
        name: "Classic Leather Biker Jacket",
        brand: "H&M",
        price: 1299000,
        color: "Brown",
        category: "Jaket"
    },
    {
        name: "Smart Chino Trousers",
        brand: "Dockers",
        price: 499000,
        color: "Beige",
        category: "Celana"
    },
    {
        name: "501 Original Fit Jeans",
        brand: "Levi's",
        price: 799000,
        color: "Dark Blue",
        category: "Celana"
    },
    {
        name: "Essentials Pullover Hoodie",
        brand: "Adidas",
        price: 549000,
        color: "Gray",
        category: "Jaket"
    },
    {
        name: "Classic Fit Polo Shirt",
        brand: "Lacoste",
        price: 499000,
        color: "Green",
        category: "Baju"
    },
    {
        name: "ThermoBall Eco Insulated Jacket",
        brand: "The North Face",
        price: 1499000,
        color: "Navy",
        category: "Jaket"
    },
    {
        name: "Floral Print Summer Dress",
        brand: "Forever 21",
        price: 329000,
        color: "Pink",
        category: "Baju"
    }
];


Product.insertMany(seedProducts).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})
