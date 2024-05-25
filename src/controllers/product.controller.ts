import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'

export const createNewProduct = (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }
  logger.info('Success add new product')
  return res.status(200).send({ status: true, statusCode: 201, message: 'Add Product Success', data: value })
}

export const getProduct = (req: Request, res: Response) => {
  const products = [
    { name: 'Sepatu Adidas', price: 250000, size: 41 },
    { name: 'Sepatu Nike', price: 350000, size: 41 }
  ]
  const {
    params: { name }
  } = req

  if (name) {
    const filterProduct = products.filter((product) => {
      if (product.name === name) {
        return product
        // return res.status(404).send({ status: false, statusCode: 404, message: 'Data Not Found' })
      }
    })
    if (filterProduct.length === 0) {
      logger.info('Data Not Found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Data Not Found' })
    }
    logger.info('Succes get product data')
    return res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] })
  }

  logger.info('Succes get product data')
  return res.status(200).send({ status: true, statusCode: 200, data: products })
}
