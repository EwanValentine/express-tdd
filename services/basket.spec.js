const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect

const mongoose = require('mongoose')
require('sinon-mongoose')

const Product = require('../models/Product')

const Service = require('./basket')
const service = new Service()

describe('Basket Service', () => {
  it('should add a scanned item to an array of items', done => {

    service.scan('a1').then(res => {
      expect(res).to.be.an('array')
      const items = service.getItems()
      expect(items).to.have.length(1)
      done()
    })
    done()
  })

  it('should return the correct total for the given product SKU\'s', async(done) => {
    const productMock = sinon.mock(Product)
    productMock.expects('find').withArgs('a1').resolves({ sku: 'a1', price: 100 })
    service.scan('a1').then(() => done())
    service.scan('a1').then(() => done())
    const total = service.getTotalPrice()
    console.log(total)
    expect(total).to.be(200)
    done()
  })
})
