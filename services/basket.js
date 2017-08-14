const _ = require('underscore')
const Product = require('../models/Product')
const repository = new Product()

/**
 * Basket
 *
 * @param {Array} items
 */
function Basket(items = []) {
  this.items = items || []
}

/**
 * scan
 *
 * @param {String} sku
 */
Basket.prototype.scan = async function(sku) {
  const product = await repository.find(sku)
  this.items = [...this.items, product]
}

/**
 * getItems
 *
 * @return {Array}
 */
Basket.prototype.getItems = function() {
  return this.items
}

/**
 * getTotalPrice
 *
 * @return {Number}
 */
Basket.prototype.getTotalPrice = function() {

  // Fetch all instances of sku's for the given sku
  const getCount = sku => this.items.filter(product => product.sku === sku)

  // Apply new price to each item, which has a given
  // `special` value, which contains the quantity and
  // the new price. We're also removing duplicates at this
  // point, which is actually not quite correct, because
  // if we get more than two groups of the same item, it
  // won't carry over.
  const result = _.uniq(this.items.map(p => {
  	const amount = getCount(p.sku).length
    if (p.special) {

      // If the amount of items found with this sku
      // apply the new price
    	if (amount === p.special.quantity) {
        p.price = p.special.price
      }
    }
    return p
  }), 'sku')

  // Get total
  return result.map(item => item.price).reduce((a, b) => a + b, 0)
}

module.exports = Basket
