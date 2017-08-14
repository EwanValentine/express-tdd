/**
 * Product
 *
 * @param {Array} products
 */
function Product(products = []) {
  this.products = products || [
    { sku: 'A', price: 50, special: { quantity: 3, price: 130 } },
    { sku: 'B', price: 30, special: { quantity: 2, price: 45 } },
    { sku: 'C', price: 20, },
    { sku: 'D', price: 15, },
  ]
}

/**
 * find
 *
 * @param {String} sku
 * @return {Array}
 */
Product.prototype.find = function (sku) {
  return Promise.resolve(this.products.find(item => item.sku === sku))
}

/**
 * findAll
 *
 * @return {Array}
 */
Product.prototype.findAll = function() {
  return Promise.resolve(this.products)
}

module.exports = Product
