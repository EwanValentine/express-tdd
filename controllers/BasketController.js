const BasketService = require('../services/basket')
const service = new BasketService()

/**
 * getItems
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @return {Response}
 */
const getItems = (req, res) => res.status(200).json(service.getItems())

/**
 * getTotalPrice
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @return {Response}
 */
const getTotalPrice = (req, res) => res.status(200).json(service.getTotalPrice())

/**
 * scan
 *
 * @param {Request} req
 * @param {Response} res
 *
 * @return {Response}
 */
const scan = (req, res) => res.status(201).json(service.scan(req.body.sku))

module.exports = {
  getItems,
  getTotalPrice,
  scan,
}
