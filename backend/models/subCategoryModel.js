import mongoose from 'mongoose'
import { checkReferenceId } from '../utils/helpers.js'

const subCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide sub category name.'],
            unique: true,
        },
        mainCategory: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'Please provide main category.'],
            ref: 'Category',
        },
        priority: Number,
        slug: String,
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
)
subCategorySchema.pre(/^find/, function (next) {
    this.populate({
        path: 'mainCategory',
        select: 'name',
    })
    next()
})

subCategorySchema.pre('save', async function (next) {
    await checkReferenceId('Category', this.mainCategory, next)

    next()
})

subCategorySchema.post('findByIdAndDelete', async function (doc) {
    if (doc) {
        await mongoose.model('Product').deleteMany({ subCategory: doc._id })
    }

    if (doc) {
        await mongoose
            .model('SubSubCategory')
            .deleteMany({ subCategory: doc._id })
    }
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory
