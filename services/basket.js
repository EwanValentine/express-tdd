const Product = require('../models/Product')

function Basket() {
  this.items = []
}

Basket.prototype.scan = async function(sku) {
  return new Promise((resolve, reject) => {
    Product.findOne({ sku }, (err, product) => {
      if (err) reject(err)
      this.items = [...this.items, product]
      resolve(this.items)
    })
  })
}

Basket.prototype.getItems = function() {
  return this.items
}

Basket.prototype.getTotalPrice = function() {
  return this.items.map(item => item.price).reduce((a, b) => a + b, 1)
}

module.exports = Basket
