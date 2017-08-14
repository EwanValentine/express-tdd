const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const Product = require('./Product')

describe('Product Model', () => {
  let _product;

  beforeEach(() => {
    _product = new Product()
  })

  it('should return all products', () => {
    _product.findAll().then(products => {
      expect(products).to.have.length(4)
    })
  })

  it('should return a single product', () => {
    const expected = 'A'
    _product.find(expected).then(product => {
      expect(product.sku).to.equal(expected)
    })
  })
})
