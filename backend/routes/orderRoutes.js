// routes/orderRoutes.js
import express from 'express'
import {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrderStatus,
    deleteOrder,
} from '../controllers/orderControllers.js'
import { validateSchema } from '../middleware/validationMiddleware.js'
import orderValidationSchema from './../validations/orderValidator.js'
import { protect, restrictTo } from '../middleware/authMiddleware.js'

const router = express.Router()

router
    .route('/')
    .post(validateSchema(orderValidationSchema), createOrder)
    .get(getAllOrders)

router.route('/:id').get(getOrderById).delete(deleteOrder)

router.route('/:id/status').put(protect, restrictTo('admin'), updateOrderStatus)

export default router
