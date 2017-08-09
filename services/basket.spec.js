const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect

const mongoose = require('mongoose')
require('sinon-mongoose')

const Product = require('../models/Product')

const Service = require('./basket')
const service = new Service()

describe('Basket Service', () => {
  it('should add a scanned item to an array of items', () => {

    const expected = [
      { sku: 'a1', price: 100, },
      { sku: 'b2', price: 100, },
    ]

    const productMock = sinon.mock(Product)
    productMock.expects('find').resolves(expected)

    service.scan('a1').then(res => {
      productMock.verify()
      productMock.restore()
      expect(res).to.be.an('array')
    })

    service.getItems('getItems').then(res => {
      productMock.verify()
      productMock.restore()
      expect(res).to.have.length(2)
    })
  })

  it('should return the correct total for the given product SKU\'s', () => {
    const serviceMock = sinon.mock(service)
    const expected = { total: 200 }
    serviceMock.expects('getTotalPrice').yields(null, expected)
  })
})
