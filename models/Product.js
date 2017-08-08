const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  sku: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number
  },
})

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel
