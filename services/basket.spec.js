const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect

const mongoose = require('mongoose')
require('sinon-mongoose')

const service = require('./basket')

describe('Basket Service', () => {
  it('should add a scanned item to an array of items', () => {
    const serviceMock = sinon.mock(service)
    const expected = [
      { sku: 'a1', price: 100, },
      { sku: 'b2', price: 100, },
    ]

    serviceMock.expects('scan').yields(new Promise().resolve(true))
    serviceMock.expects('getItems').yields(new Promise().resolve(expected))

    service.scan('a1').then(res => {
      serviceMock.verify()
      serviceMock.restore()
      expect(res).to.be.true
    })
  })

  it('should return the correct total for the given product SKU\'s', () => {
    const serviceMock = sinon.mock(service)
    const expected = { total: 200 }
    serviceMock.expects('getTotalPrice').yields(null, expected)
  })
})
