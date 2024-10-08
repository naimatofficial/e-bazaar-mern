import mongoose from 'mongoose'
import slugify from 'slugify'
import SubCategory from './subCategoryModel.js'
import SubSubCategory from './subSubCategoryModel.js'
import Product from './productModel.js'

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide category name.'],
            unique: true,
        },
        logo: {
            type: String,
            // required: [true, 'Please provide category logo.'],
        },
        priority: Number,
        slug: String,
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'inactive',
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
)

// Virtual to count products associated with the category
categorySchema.virtual('productCount', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'category',
    // This tells mongoose to return a count instead of the documents
    count: true,
})

// categorySchema.virtual('slug').get(function () {
//     return slugify(this.name, { lower: true })
// })

categorySchema.post('findByIdAndDelete', async function (next) {
    console.log('DELETE MANY 🔥')
    await SubCategory.deleteMany({ mainCategory: this._id })
    await SubSubCategory.deleteMany({ mainCategory: this._id })
    await Product.deleteMany({ category: this._id })
    next()
})

categorySchema.post('findByIdAndDelete', async function (doc) {
    console.log('Delete Many')
    if (doc) {
        await mongoose
            .model('SubCategory')
            .deleteMany({ mainCategory: doc._id })
    }

    if (doc) {
        await mongoose
            .model('SubSubCategory')
            .deleteMany({ mainCategory: doc._id })
    }

    if (doc) {
        await mongoose.model('Product').deleteMany({ category: doc._id })
    }
})

const Category = mongoose.model('Category', categorySchema)

export default Category
