const sinon = require('sinon')
const chai = require('chai')
const expect = chai.expect
const invalidSKU = 'Invalid SKU'
const BasketController = require('./BasketController')
const request = require('supertest')
const app = require('../index')

describe('BasketController', () => {
  it('should return a json response with a basket total', () => {
    request(app)
      .get('/api/v1/basket/total')
      .expect('Content-Type', /json/)
      .expect(200, 'ok')
      .end((err, res) => {
        if (err) throw err
      })
  })

  it('should return a json response containing all basket items', () => {
    request(app)
      .get('/api/v1/basket')
      .expect('Content-Type', /json/)
      .expect(200, 'ok')
      .end((err, res) => {
        if (err) throw err
      })
  })

  it('should add a value SKU item to the basket', () => {
    request(app)
      .patch('/api/v1/basket')
      .send({ sku: 'A' })
      .expect(201, null)
      .end((err, res) => {
        if (err) throw err
      })
  })
})
