const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1/shop_db')
    .then((result) => {
        console.log('Connected to MongoDB')
    }).catch((err) => {
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Project Set Up Succeed')
})

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.listen(3000, () => {
    console.log('ShopApp listening on http://127.0.0.1:3000')
})