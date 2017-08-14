const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect

const Product = require('../models/Product')
const Service = require('./basket')

describe('Basket Service', () => {

  let _service;

  beforeEach(() => {
    _service = new Service()
  })

  it('should add a scanned item to an array of items', done => {
    _service.scan('A').then(() => {
      const items = _service.getItems()
      expect(items).to.be.an('array')
      expect(items).to.have.length(1)
      done()
    })
  })

  it('should return the correct total for the given product SKU\'s', done => {
    _service.scan('A').then(res => {
      _service.scan('B').then(res => {
        const total = _service.getTotalPrice()
        expect(total).to.equal(80)
        done()
      })
    })
  })
})
