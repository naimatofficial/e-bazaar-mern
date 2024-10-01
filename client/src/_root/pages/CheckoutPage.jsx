import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import {
    saveShippingAddress,
    saveBillingAddress,
    savePaymentMethod,
    clearCartItems,
} from '../../redux/slices/cartSlice'
import { addressSchema, paymentSchema } from './../../utils/schema'
import PaymentMethod from '../../components/Checkout/PaymentMethod'
import BillingAddressForm from '../../components/Checkout/BillingAddressForm'
import { useCreateOrderMutation } from '../../redux/slices/ordersApiSlice'
import CartSummary from '../../components/Cart/CartSummery'
import toast from 'react-hot-toast'

const CheckoutPage = () => {
    const [step, setStep] = useState(0)

    const { userInfo } = useSelector((state) => state.auth)
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo || !userInfo?.user) {
            navigate('/customer/auth/sign-in')
        }
    }, [navigate, userInfo])

    const [createOrder, { isLoading }] = useCreateOrderMutation()

    const methods = useForm({
        resolver: zodResolver(step === 0 ? addressSchema : paymentSchema),
        mode: 'onSubmit', // Validates only on form submission
        reValidateMode: 'onChange', // Validates on each change after initial submission
    })

    const handleNext = async () => {
        try {
            const isValid = await methods.trigger() // Validate the current step's form inputs

            if (!isValid) {
                toast.error('Please fill all the required fields.')
                return
            }

            if (step === 0) {
                const shippingAddress = methods.getValues()
                // note: for testing purpose we add two same addresses
                dispatch(saveShippingAddress(shippingAddress))
                dispatch(saveBillingAddress(shippingAddress))

                setStep(step + 1)
            } else {
                try {
                    // Final step, proceed to order
                    const { paymentMethod } = methods.getValues()
                    dispatch(savePaymentMethod(paymentMethod))

                    // Initialize an empty array to store product IDs
                    let productIds = []

                    // Loop through cartItems to get the product IDs
                    cart?.cartItems.forEach((item) => {
                        // Check if the product ID already exists in the productIds array
                        if (!productIds.includes(item._id)) {
                            // If the product ID doesn't exist, add it to the array
                            productIds.push(item._id)
                        }
                    })

                    // Order creation
                    const order = {
                        products: productIds,
                        customerId: userInfo?.user?._id,
                        shippingAddress: cart?.shippingAddress,
                        billingAddress: cart?.billingAddress,
                        paymentMethod: paymentMethod,
                        totalAmount: cart?.totalPrice,
                        vendors: cart?.vendors,
                    }

                    // Call the create order API
                    const res = await createOrder(order).unwrap()

                    toast.success('Order created successfully')
                    // Clear cart items after successful order
                    dispatch(clearCartItems())
                    navigate(`/order-confirmation/${res?.data?._id}`)
                } catch (err) {
                    console.log(err?.data)
                    toast.error(err?.data?.message || 'Something went wrong')
                }
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message || 'Something went wrong')
        }
    }

    return (
        userInfo &&
        userInfo?.user && (
            <div className="w-full p-4 sm:p-6 md:p-8">
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(handleNext)}
                        className="flex flex-col lg:flex-row gap-8"
                    >
                        {step === 0 && <BillingAddressForm />}
                        {step === 1 && <PaymentMethod />}
                        <CartSummary
                            cart={cart}
                            handleNext={handleNext}
                            isLoading={isLoading}
                            step={step}
                        />
                    </form>
                </FormProvider>
            </div>
        )
    )
}

export default CheckoutPage
