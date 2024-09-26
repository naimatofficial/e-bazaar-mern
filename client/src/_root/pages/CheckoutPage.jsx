// //////////////////////////
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useForm, FormProvider } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import {
//     saveShippingAddress,
//     saveBillingAddress,
//     savePaymentMethod,
// } from '../../redux/slices/cartSlice'
// import { addressSchema, paymentSchema } from './../../utils/schema'
// import PaymentMethod from '../../components/Checkout/PaymentMethod'
// import BillingAddressForm from '../../components/Checkout/BillingAddressForm'
// import { useCreateOrderMutation } from '../../redux/slices/ordersApiSlice'
// import CartSummary from '../../components/Cart/CartSummery'

// const CheckoutPage = () => {
//     const [step, setStep] = useState(0)

//     const { userInfo } = useSelector((state) => state.auth)
//     const cart = useSelector((state) => state.cart)

//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (!userInfo && !userInfo?.user) {
//             navigate('/customer/auth/sign-in')
//         }
//     }, [navigate, userInfo])

//     const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation()

//     const methods = useForm({
//         resolver: zodResolver(step === 0 ? addressSchema : paymentSchema),
//         mode: 'onSubmit', // Validates only on form submission
//         reValidateMode: 'onChange', // Validates on each change after initial submission
//     })
//     const handleNext = async () => {
//         try {
//             // Trigger validation for all fields based on the current step
//             const isValid = await methods.trigger()

//             // Check if the form is valid
//             if (!isValid) {
//                 toast.error('Please fill all the required fields.')
//                 return
//             }

//             if (step === 0) {
//                 // Step 1: Save shipping and billing addresses
//                 const shippingAddress = methods.getValues()
//                 dispatch(saveShippingAddress(shippingAddress))
//                 dispatch(saveBillingAddress(shippingAddress))

//                 // Move to the payment step
//                 setStep(step + 1)
//             } else {
//                 // Step 2: Handle order creation
//                 const { paymentMethod } = methods.getValues()
//                 dispatch(savePaymentMethod(paymentMethod))

//                 const order = {
//                     products: cart?.cartItems,
//                     customer: userInfo?.user?._id,
//                     vendor: cart?.cartItems?.[0]?.userId || '',
//                     shippingAddress: cart?.shippingAddress,
//                     billingAddress: cart?.billingAddress,
//                     paymentMethod: paymentMethod,
//                     totalAmount: cart?.totalPrice,
//                 }

//                 // Call the create order API
//                 const res = await createOrder(order).unwrap()
//                 if (isSuccess && res?.data) {
//                     navigate(`/order-confirmation/${res?.data?._id}`)
//                     toast.success('Order created successfully')
//                 }
//             }
//         } catch (err) {
//             console.log(err)
//             toast.error(
//                 err.message ||
//                     'An error occurred while processing your request.'
//             )
//         }
//     }

//     return (
//         <div className="w-full p-4 sm:p-6 md:p-8">
//             <FormProvider {...methods}>
//                 <form
//                     onSubmit={methods.handleSubmit(handleNext)}
//                     className="flex flex-col lg:flex-row gap-8"
//                 >
//                     {step === 0 && <BillingAddressForm />}
//                     {step === 1 && <PaymentMethod />}
//                     <CartSummary
//                         cart={cart}
//                         handleNext={handleNext}
//                         isLoading={isLoading}
//                         step={step}
//                     />
//                 </form>
//             </FormProvider>
//         </div>
//     )
// }

// export default CheckoutPage


import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    saveShippingAddress,
    saveBillingAddress,
    savePaymentMethod,
} from '../../redux/slices/cartSlice';
import { addressSchema, paymentSchema } from './../../utils/schema';
import PaymentMethod from '../../components/Checkout/PaymentMethod';
import BillingAddressForm from '../../components/Checkout/BillingAddressForm';
import { useCreateOrderMutation } from '../../redux/slices/ordersApiSlice';
import CartSummary from '../../components/Cart/CartSummery';

const CheckoutPage = () => {
    const [step, setStep] = useState(0);

    const { userInfo } = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo?.user) {
            navigate('/customer/auth/sign-in');
        }
    }, [navigate, userInfo]);

    const [createOrder, { isLoading, isSuccess, isError, error }] = useCreateOrderMutation();

    const methods = useForm({
        resolver: zodResolver(step === 0 ? addressSchema : paymentSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    const handleNext = async () => {
        try {
            const isValid = await methods.trigger();

            if (!isValid) {
                toast.error('Please fill all the required fields.');
                return;
            }

            if (step === 0) {
                const shippingAddress = methods.getValues();
                dispatch(saveShippingAddress(shippingAddress));
                dispatch(saveBillingAddress(shippingAddress));
                setStep(step + 1);
            } else {
                const { paymentMethod } = methods.getValues();
                dispatch(savePaymentMethod(paymentMethod));

                const order = {
                    products: cart?.cartItems,
                    customer: userInfo?.user?._id,
                    vendor: cart?.cartItems?.[0]?.userId || '',
                    shippingAddress: cart?.shippingAddress,
                    billingAddress: cart?.billingAddress,
                    paymentMethod: paymentMethod,
                    totalAmount: cart?.totalPrice,
                };

                const res = await createOrder(order).unwrap();
                if (isSuccess && res?.data) {
                    navigate(`/order-confirmation/${res?.data?._id}`);
                    toast.success('Order created successfully');
                    methods.reset(); // Reset the form after successful submission
                }
            }
        } catch (err) {
            console.error(err);
            toast.error(error?.data?.message || 'An error occurred while processing your request.');
        }
    };

    return (
        <div className="w-full p-4 sm:p-6 md:p-8">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)} className="flex flex-col lg:flex-row gap-8">
                    {step === 0 && <BillingAddressForm />}
                    {step === 1 && <PaymentMethod />}
                    <CartSummary
                        cart={cart}
                        handleNext={handleNext}
                        isLoading={isLoading}
                        step={step}
                    />
                    {isError && <div className="text-red-500">{error?.data?.message}</div>}
                </form>
            </FormProvider>
        </div>
    );
};

export default CheckoutPage;
