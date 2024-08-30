import Order from '../models/orderModel.js'
import catchAsync from '../utils/catchAsync.js'
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
// export const getAllOrders = catchAsync(async (req, res, next) => {
//     const { startDate, endDate, timeFrame } = req.query

//     // Initialize pipeline
//     const pipeline = []

//     // Handle custom date range filtering
//     if (startDate && endDate) {
//         pipeline.push({
//             $match: {
//                 createdAt: {
//                     $gte: new Date(startDate),
//                     $lte: new Date(endDate),
//                 },
//             },
//         })
//     }

//     // Handle predefined time frames
//     if (timeFrame) {
//         let start, end
//         const currentDate = new Date()

//         switch (timeFrame) {
//             case 'year':
//                 start = new Date(currentDate.getFullYear(), 0, 1)
//                 end = new Date(currentDate.getFullYear() + 1, 0, 1)
//                 break
//             case 'month':
//                 start = new Date(
//                     currentDate.getFullYear(),
//                     currentDate.getMonth(),
//                     1
//                 )
//                 end = new Date(
//                     currentDate.getFullYear(),
//                     currentDate.getMonth() + 1,
//                     1
//                 )
//                 break
//             case 'week':
//                 const day = currentDate.getDay() || 7
//                 start = new Date(currentDate)
//                 start.setHours(0, 0, 0, 0)
//                 start.setDate(currentDate.getDate() - day + 1)
//                 end = new Date(start)
//                 end.setDate(start.getDate() + 6)
//                 end.setHours(23, 59, 59, 999)
//                 break
//             default:
//                 return next(new AppError('Invalid time frame specified', 400))
//         }

//         pipeline.push({
//             $match: {
//                 createdAt: {
//                     $gte: start,
//                     $lte: end,
//                 },
//             },
//         })
//     }

//     // Execute the aggregation pipeline
//     const orders = await Order.aggregate(pipeline)

//     res.status(200).json({
//         status: 'success',
//         results: orders.length,
//         doc: orders,
//     })
// })

// Delete an order
export const deleteOrder = deleteOne(Order)

// Get order by ID
export const getOrderById = getOne(Order)

// Update an order's status
export const updateOrderStatus = updateStatus(Order)
