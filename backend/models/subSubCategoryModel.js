import mongoose from 'mongoose'
import slugify from 'slugify'
import { checkReferenceId } from '../utils/helpers'

const subSubCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide sub sub category name.'],
            unique: true,
        },
        mainCategory: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'Please provide main category.'],
            ref: 'Category',
        },
        subCategory: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'Please provide sub category.'],
            ref: 'SubCategory',
        },
        priority: Number,
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
)

subSubCategorySchema.virtual('slug').get(function () {
    return slugify(this.name, { lower: true })
})

subSubCategorySchema.pre(/^find/, function (next) {
    this.populate({
        path: 'mainCategory subCategory',
        select: 'name',
    })
    next()
})

subSubCategorySchema.post('findByIdAndDelete', async function (doc) {
    if (doc) {
        await mongoose.model('Product').deleteMany({ subSubCategory: doc._id })
    }
})

subSubCategorySchema.pre('save', async function (next) {
    await checkReferenceId('Category', this.mainCategory, next)
    await checkReferenceId('SubCategory', this.subCategory, next)

    next()
})

const SubSubCategory = mongoose.model('SubSubCategory', subSubCategorySchema)

export default SubSubCategory
