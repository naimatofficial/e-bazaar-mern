import Joi from 'joi'

const refundValidationSchema = Joi.object({
    order: Joi.string().required().messages({
        'string.base': 'Order ID must be a string.',
        'string.empty': 'Please provide an order ID.',
        'any.required': 'Order ID is required.',
    }),
    reasonByCustomer: Joi.string().required().messages({
        'any.required': 'Please provide refund reason.',
        'string.base': 'Refund reason must be a string',
        'string.empty': 'Refund reason cannot be empty',
    }),
    approveReason: Joi.string().optional().allow('').messages({
        'string.base': 'Approve reason must be a string',
    }),
    rejectReason: Joi.string().optional().allow('').messages({
        'string.base': 'Reject reason must be a string',
    }),
    status: Joi.string()
        .valid('pending', 'approved', 'refunded', 'rejected')
        .default('pending')
        .messages({
            'string.base': 'Status must be a string',
            'any.only':
                'Status must be one of the following: pending, approved, refunded, rejected',
        }),
})

export default refundValidationSchema
