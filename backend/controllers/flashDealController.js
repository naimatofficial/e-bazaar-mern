import FlashDeal from '../models/flashDealModel.js'
import { getCache, setCache, deleteCache } from '../utils/redisUtils.js'
import { deleteOne, getAll, updateStatus } from './handleFactory.js'
import catchAsync from '../utils/catchAsync.js'
import AppError from '../utils/appError.js'
import { getCacheKey } from '../utils/helpers.js'
import redisClient from './../config/redisConfig.js'
import mongoose from 'mongoose'

const checkExpiration = (flashDeal) => {
    const currentDate = new Date()
    const endDate = new Date(flashDeal.endDate)
    return currentDate > endDate
}

// Create Flash Deal
export const createFlashDeal = catchAsync(async (req, res) => {
    const { title, startDate, endDate } = req.body
    const image = req.file ? req.file.path : ''

    const doc = new FlashDeal({
        title,
        startDate,
        endDate,
        image,
    })

    await doc.save()

    if (!doc) {
        return res.status(400).json({
            status: 'fail',
            message: `Flash deal could not be created`,
        })
    }

    // delete pervious cache
    const cacheKey = getCacheKey('FlashDeal', '', req.query)
    await redisClient.del(cacheKey)

    res.status(201).json({
        status: 'success',
        doc,
    })
})

// Get Flash Deals with Caching
export const getFlashDeals = getAll(FlashDeal)
// Get Flash Deal by ID
export const getFlashDealById = catchAsync(async (req, res) => {
    const { id } = req.params

    console.log(id)

    // Check cache first
    const cacheKey = getCacheKey('FlashDeal', id)
    const cachedData = await redisClient.get(cacheKey)

    if (cachedData) {
        return res.status(200).json({
            success: 'success',
            cached: true,
            doc: JSON.parse(cachedData),
        })
    }

    const flashDeal = await FlashDeal.findById(id)

    console.log(flashDeal)

    if (!flashDeal) {
        return next(new AppError('No flash deal found with that ID', 404))
    }

    // if (checkExpiration(flashDeal)) {
    //     flashDeal.status = 'expired'
    //     await flashDeal.save()
    // }

    const cacheKeyOne = getCacheKey('FlashDeal', id)
    await redisClient.setEx(cacheKeyOne, 3600, JSON.stringify(flashDeal))

    res.status(200).json({
        status: 'success',
        cached: false,
        doc: flashDeal,
    })
})

export const updateFlashDeal = catchAsync(async (req, res) => {
    const { id } = req.params

    const updatedFlashDeal = await FlashDeal.findByIdAndUpdate(id, req.body, {
        new: true,
    }).exec()

    if (!updatedFlashDeal) {
        return next(new AppError('No flash deal found with that ID', 404))
    }

    if (checkExpiration(updatedFlashDeal)) {
        updatedFlashDeal.status = 'expired'
        await updatedFlashDeal.save()
    }

    const cacheKeyOne = getCacheKey('FlashDeal', id)
    await redisClient.setEx(cacheKeyOne, 3600, JSON.stringify(updatedFlashDeal))

    const cacheKey = getCacheKey('FlashDeal', '')
    await redisClient.del(cacheKey)

    res.status(200).json({
        status: 'success',
        doc: updatedFlashDeal,
    })
})

// Delete Flash Deal
export const deleteFlashDeal = deleteOne(FlashDeal)
// Add Product to Flash Deal
export const addProductToFlashDeal = catchAsync(async (req, res, next) => {
    const { flashDealId } = req.params
    const { products } = req.body

    // Validate the FlashDeal ID
    if (!mongoose.Types.ObjectId.isValid(flashDealId)) {
        return next(new AppError('Invalid FlashDeal ID', 400))
    }

    // Check if the FlashDeal exists
    const flashDeal = await FlashDeal.findOne({ _id: flashDealId })

    console.log(flashDeal)

    if (!flashDeal) {
        return next(new AppError('No flash deal found with that ID', 404))
    }

    // Validate productIds array
    if (!Array.isArray(products) || products.length === 0) {
        return next(new AppError('Please provide an array of product IDs', 400))
    }

    // Filter out invalid product IDs
    const validProductIds = products.filter((id) =>
        mongoose.Types.ObjectId.isValid(id)
    )

    if (validProductIds.length === 0) {
        return next(new AppError('No valid product IDs provided', 400))
    }

    // Add the products to the products array
    flashDeal.products = [
        ...new Set([
            ...flashDeal.products,
            ...validProductIds.map((id) => new mongoose.Types.ObjectId(id)),
        ]),
    ]

    // Save the updated FlashDeal
    await flashDeal.save()

    const cacheKeyOne = getCacheKey('FlashDeal', flashDealId)
    await redisClient.setEx(cacheKeyOne, 3600, JSON.stringify(flashDeal))

    const cacheKey = getCacheKey('FlashDeal', '', req.query)
    await redisClient.del(cacheKey)

    res.status(200).json({
        status: 'success',
        doc: flashDeal,
    })
})
// Remove Product from Flash Deal
export const removeProductFromFlashDeal = catchAsync(async (req, res, next) => {
    const { flashDealId, productId } = req.params

    // Ensure the IDs are valid MongoDB ObjectId
    if (
        !mongoose.Types.ObjectId.isValid(flashDealId) ||
        !mongoose.Types.ObjectId.isValid(productId)
    ) {
        return next(new AppError('Invalid FlashDeal ID or Product ID', 400))
    }

    // Find the FlashDeal by ID
    const flashDeal = await FlashDeal.findById(flashDealId)

    if (!flashDeal) {
        return next(new AppError('No flash deal found with that ID', 404))
    }

    // Check if the product exists in the FlashDeal's products array
    const productExists = flashDeal.products.some(
        (prod) => prod.toString() === productId
    )

    if (!productExists) {
        return next(new AppError('Product not found in FlashDeal', 404))
    }

    // Remove the product from the products array
    flashDeal.products = flashDeal.products.filter(
        (prod) => prod.toString() !== productId
    )

    // Save the updated FlashDeal
    await flashDeal.save()

    const cacheKeyOne = getCacheKey('FlashDeal', flashDealId)
    await redisClient.setEx(cacheKeyOne, 3600, JSON.stringify(flashDeal))

    const cacheKey = getCacheKey('FlashDeal', '')
    await redisClient.del(cacheKey)

    res.status(200).json({
        status: 'success',
        doc: flashDeal,
    })
})

// Update Flash Deal Status
export const updateFlashDealStatus = updateStatus(FlashDeal)

// Update Publish Status of Flash Deal
export const updatePublishStatus = catchAsync(async (req, res) => {
    const { id } = req.params
    const { publish } = req.body

    // Validate publish status (true/false)
    if (typeof publish !== 'boolean') {
        return next(new AppError('Invalid publish status!', 404))
    }

    // Update the publish status
    const updatedFlashDeal = await FlashDeal.findByIdAndUpdate(
        id,
        { publish },
        { new: true }
    )

    if (!updatedFlashDeal) {
        return next(new AppError('No flash deal found with that ID', 404))
    }

    const cacheKeyOne = getCacheKey('FlashDeal', id)
    await redisClient.setEx(cacheKeyOne, 3600, JSON.stringify(updatedFlashDeal))

    const cacheKey = getCacheKey('FlashDeal', '')
    await redisClient.del(cacheKey)

    res.status(200).json({
        status: 'success',
        doc: updatedFlashDeal,
    })
})
