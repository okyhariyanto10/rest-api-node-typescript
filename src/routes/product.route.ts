import { Router } from 'express'
import { createNewProduct, getProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:name', getProduct)
ProductRouter.post('/', createNewProduct)
