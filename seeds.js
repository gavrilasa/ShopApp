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
        size: "M"
    },
    {
        name: "Slim Fit Formal Shirt",
        brand: "Zara",
        price: 349000,
        color: "Light Blue",
        size: "L"
    },
    {
        name: "Air Max Running Shoes",
        brand: "Nike",
        price: 899000,
        color: "Black",
        size: "L"
    },
    {
        name: "Classic Leather Biker Jacket",
        brand: "H&M",
        price: 1299000,
        color: "Brown",
        size: "XL"
    },
    {
        name: "Smart Chino Trousers",
        brand: "Dockers",
        price: 499000,
        color: "Beige",
        size: "M"
    },
    {
        name: "501 Original Fit Jeans",
        brand: "Levi's",
        price: 799000,
        color: "Dark Blue",
        size: "L"
    },
    {
        name: "Essentials Pullover Hoodie",
        brand: "Adidas",
        price: 549000,
        color: "Gray",
        size: "XL"
    },
    {
        name: "Classic Fit Polo Shirt",
        brand: "Lacoste",
        price: 499000,
        color: "Green",
        size: "S"
    },
    {
        name: "ThermoBall Eco Insulated Jacket",
        brand: "The North Face",
        price: 1499000,
        color: "Navy",
        size: "M"
    },
    {
        name: "Floral Print Summer Dress",
        brand: "Forever 21",
        price: 329000,
        color: "Pink",
        size: "S"
    }
];

Product.insertMany(seedProducts).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})
