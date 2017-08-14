const Product = require('../models/Product')
const repository = new Product()

function Basket() {
  this.items = []
}

Basket.prototype.scan = async function(sku) {
  const product = await repository.find(sku)
  this.items = [...this.items, product]
  return this.items
}

Basket.prototype.getItems = function() {
  return this.items
}

Basket.prototype.getTotalPrice = function() {
  return this.items.map(item => item.price).reduce((a, b) => a + b, 0)
}

module.exports = Basket
