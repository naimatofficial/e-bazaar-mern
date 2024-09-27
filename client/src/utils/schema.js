import { z } from 'zod'

export const addressSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    country: z.string().min(1, 'Country is required'),
    city: z.string().min(3, 'City is required'),
    zipCode: z.string().min(3, 'Zip code is required'),
    state: z.string().min(3, 'State is required'),
    address: z.string().min(3, 'Address is required'),
})

export const paymentSchema = z.object({
    paymentMethod: z.string().min(1, 'Payment method is required'),
})
