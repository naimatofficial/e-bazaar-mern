import SubSubCategory from '../models/subSubCategoryModel.js'
import SubCategory from '../models/subCategoryModel.js'
import Category from '../models/categoryModel.js'
import slugify from 'slugify'
import {
    sendErrorResponse,
    sendSuccessResponse,
} from '../utils/responseHandler.js'
import { client } from '../utils/redisClient.js'
import {
    deleteOne,
    getAll,
    getOne,
    getOneBySlug,
    updateOne,
} from './handleFactory.js'
import { getCacheKey } from '../utils/helpers.js'
import redisClient from '../config/redisConfig.js'
import catchAsync from '../utils/catchAsync.js'

// Create a new sub-subcategory
export const createSubSubCategory = catchAsync(async (req, res) => {
    const { name, mainCategory, subCategory, priority } = req.body

    const newSubSubCategory = new SubSubCategory({
        name,
        mainCategory,
        subCategory,
        priority,
    })

    const doc = await newSubSubCategory.save()

    if (!doc) {
        return next(new AppError(`Sub sub category could not be created`, 400))
    }

    const cacheKeyOne = getCacheKey('SubSubCategory', doc?._id)
    await redisClient.setEx(cacheKeyOne, 3600, JSON.stringify(doc))

    // delete all documents caches related to this model
    const cacheKey = getCacheKey('SubSubCategory', '', req.query)
    await redisClient.del(cacheKey)

    res.status(201).json({
        status: 'success',
        doc,
    })
})

export const getAllSubSubCategories = getAll(SubSubCategory)

// Get a sub-subcategory by ID
export const getSubSubCategoryById = getOne(SubSubCategory)

// Get a sub-subcategory by slug
export const getSubSubCategoryBySlug = getOneBySlug(SubSubCategory)

// Update a sub-subcategory by ID
export const updateSubSubCategoryById = updateOne(SubSubCategory)

// Delete a sub-subcategory by ID
export const deleteSubSubCategoryById = deleteOne(SubSubCategory)

// Get sub-subcategories by subcategory slug
export const getSubSubCategoriesBySubCategorySlug = async (req, res) => {
    try {
        const { slug } = req.params

        const subCategory = await SubCategory.findOne({ slug })
        if (!subCategory) {
            return sendErrorResponse(res, 'Subcategory not found.', 404)
        }

        const cacheKey = `subsubcategories_sub_${subCategory._id}`
        const cachedSubSubCategories = await client.get(cacheKey)
        if (cachedSubSubCategories) {
            return sendSuccessResponse(
                res,
                JSON.parse(cachedSubSubCategories),
                'Sub-subcategories fetched successfully'
            )
        }

        const subSubCategories = await SubSubCategory.find({
            subCategory: subCategory._id,
        }).populate('mainCategory', 'name')

        await client.set(cacheKey, JSON.stringify(subSubCategories))

        sendSuccessResponse(
            res,
            subSubCategories,
            'Sub-subcategories fetched successfully'
        )
    } catch (error) {
        sendErrorResponse(res, error.message)
    }
}
