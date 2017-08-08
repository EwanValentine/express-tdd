const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect

const mongoose = require('mongoose')
require('sinon-mongoose')

const Service = require('./basket')
const service = new Service()

describe('Basket Service', () => {
  it('should add a scanned item to an array of items', () => {
    const serviceMock = sinon.mock(service)
    const expected = [
      { sku: 'a1', price: 100, },
      { sku: 'b2', price: 100, },
    ]

    sinon.stub(service, 'scan').returns(new Promise((resolve, reject) => {
      resolve(expected)
    }))

    sinon.stub(service, 'getItems').returns(Promise.resolve(expected))

    service.scan('a1').then(res => {
      serviceMock.verify()
      serviceMock.restore()
      expect(res).to.be.an('array')
    })

    service.getItems('getItems').then(res => {
      serviceMock.verify()
      serviceMock.restore()
      expect(res).to.have.length(2)
    })
  })

  it('should return the correct total for the given product SKU\'s', () => {
    const serviceMock = sinon.mock(service)
    const expected = { total: 200 }
    serviceMock.expects('getTotalPrice').yields(null, expected)
  })
})
