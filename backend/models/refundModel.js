import mongoose from 'mongoose'
import { checkReferenceId } from '../utils/helpers.js'

const refundSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
            required: [true, 'Please provide order Id.'],
            unique: true,
        },
        reasonByCustomer: {
            type: String,
            required: [true, 'Please provide refund reason.'],
        },
        approveReason: {
            type: String,
        },
        rejectReason: {
            type: String,
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'refunded', 'rejected'],
            default: 'pending',
        },
    },
    { timestamps: true }
)

refundSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'order',
        select: '-__v -createdAt -updatedAt',
    })
    next()
})

refundSchema.pre('save', async function (next) {
    try {
        await checkReferenceId('Order', this.order, next)

        next()
    } catch (err) {
        next(err)
    }
})

const Refund = mongoose.model('Refund', refundSchema)

export default Refund
