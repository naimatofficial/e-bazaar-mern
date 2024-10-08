import mongoose from 'mongoose'

const dealOfTheDaySchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, 'Please provide product'],
        },
        title: {
            type: String,
            required: [true, 'Please provide title'],
        },
        status: {
            type: String,
            enum: ['active', 'expired', 'inactive'],
            default: 'inactive',
        },
    },
    {
        timestamps: true,
    }
)

dealOfTheDaySchema.pre('save', async function (next) {
    await checkReferenceId('Product', this.product, next)

    next()
})

dealOfTheDaySchema.pre(/^find/, function (next) {
    this.populate({
        path: 'product',
        select: '-__v -createdAt -updatedAt',
    })
    next()
})

const DealOfTheDay = mongoose.model('DealOfTheDay', dealOfTheDaySchema)

export default DealOfTheDay
