import express from 'express'
import { verifyToken } from '../middleware/authJWT.js'
import { adminToken } from '../controller/user.controller.js'

const router = express.Router()

router.get('/', adminToken)
router.post('/', verifyToken)

export default router
