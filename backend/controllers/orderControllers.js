import Order from '../models/orderModel.js'
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateStatus,
} from './handleFactory.js'

// Create a new order
export const createOrder = createOne(Order)

export const getAllOrders = getAll(Order)

// Delete an order
export const deleteOrder = deleteOne(Order)

// Get order by ID
export const getOrderById = getOne(Order)

// Update an order's status
export const updateOrderStatus = updateStatus(Order)
