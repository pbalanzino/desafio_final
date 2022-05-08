import express from 'express'
import { Products } from '../controller/products.controller.js'
import { verifyToken } from '../middleware/authJWT.js'

const router = express.Router()
const { show, add, update, clean } = Products
// router.use(verifyAuth)
router.use(express.json())

router.get('/:pid?', show)
router.post('/', verifyToken, add)
router.put('/:pid', verifyToken, update)
router.delete('/:pid', verifyToken, clean)

export default router
