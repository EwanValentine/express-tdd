const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const mongoose = require('mongoose')
require('sinon-mongoose')
mongoose.Promise = global.Promise
const Product = require('./Product')

describe('Product Model', () => {
  it('should return all products', () => {
    const ProductMock = sinon.mock(Product)
    const expected = [
      { sku: 'a1', title: 'Product A', price: 100 },
      { sku: 'b2', title: 'Product B', price: 150 },
    ]
    ProductMock.expects('find').yields(null, expected)
    Product.find((_, result) => {
      ProductMock.verify()
      ProductMock.restore()
      expect(result).to.have.length(2)
    })
  })

  it('should return a single product', () => {
    const ProductMock = sinon.mock(Product)
    const expected = { sku: 'a1', title: 'Product A', price: 100 }
    ProductMock.expects('find').yields(null, expected)
    Product.find((_, result) => {
      ProductMock.verify()
      ProductMock.restore()
      expect(result.sku).to.equal(expected.sku)
    })
  })

  it('should save a single product', () => {
    const ProductMock = sinon.mock(new Product({ sku: 'a1', title: 'Product A' }))
    const expected = { sku: 'a1' }
    ProductMock.expects('save').yields(null, expected)
    const product = new Product()
    product.sku = expected.sku
    product.save((_, result) => {
      ProductMock.verify()
      ProductMock.restore()
      expect(result.sku).to.equal(expected.sku)
    })
  })
})
