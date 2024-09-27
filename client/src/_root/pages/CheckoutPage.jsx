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
import CartSummary from '../../components/Cart/CartSummery'
const CheckoutPage = () => {
    const [step, setStep] = useState(0);

    const { userInfo } = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo || !userInfo?.user) {
            navigate('/customer/auth/sign-in');
        }
    }, [navigate, userInfo]);

    const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation();

    const methods = useForm({
        resolver: zodResolver(step === 0 ? addressSchema : paymentSchema),
        mode: 'onSubmit', // Validates only on form submission
        reValidateMode: 'onChange', // Validates on each change after initial submission
    });

    const handleNext = async () => {
        const isValid = await methods.trigger(); // Validate the current step's form inputs

        if (!isValid) {
            toast.error('Please fill all the required fields.');
            return;
        }

        if (step === 0) {
            const shippingAddress = methods.getValues(); // Get shipping address from the form
            dispatch(saveShippingAddress(shippingAddress));
            dispatch(saveBillingAddress(shippingAddress));
            setStep(step + 1); // Move to the next step
        } else if (step === 1) {
            const { paymentMethod } = methods.getValues(); // Get payment method from the form
            dispatch(savePaymentMethod(paymentMethod));

            // Collect unique vendor IDs from cart items
            const vendorIds = cart?.cartItems
                ?.map((item) => item?.userId)
                ?.filter((id, index, self) => id && self.indexOf(id) === index); // Remove duplicates and falsy values

            if (!vendorIds?.length) {
                toast.error('Vendors are required.');
                return;
            }

            const order = {
                products: cart?.cartItems?.map(item => {
                    const productId = item?._id; // Get the _id from the item
            
                    // Check if productId exists and is valid
                    if (!productId) {
                        console.error('Invalid product ID found in cart:', item); // Log the invalid item for debugging
                        return null; // Return null to filter out this item later
                    }
            
                    return {
                        ...item,
                        productId: productId.toString(), // Ensure product ID is a string
                    };
                }).filter(Boolean), // Filter out any null entries
                customer: userInfo?.user?._id, // Customer ID from user info
                vendors: vendorIds, // Use the list of vendor IDs
                shippingAddress: cart?.shippingAddress, // Shipping address from the cart
                billingAddress: cart?.billingAddress, // Billing address from the cart
                paymentMethod, // Payment method chosen by the user
                totalAmount: cart?.totalPrice || 0, // Ensure totalAmount is defined; fallback to 0
            };
            
            // Check if products array is empty or if any product ID is not a string
            if (order.products.length === 0 || order.products.some(product => typeof product.productId !== 'string')) {
                toast.error('No valid products found in the cart or product IDs are invalid.'); // Notify user
                return; // Prevent further execution
            }
            
            try {
                const res = await createOrder(order).unwrap(); // Send order to API
                if (isSuccess && res?.data) {
                    navigate(`/order-confirmation/${res?.data?._id}`); // Navigate to confirmation page
                    toast.success('Order created successfully'); // Show success message
                }
            } catch (err) {
                toast.error(err?.data?.message || 'Error creating order'); // Handle errors
            }
            

            try {
                const res = await createOrder(order).unwrap(); // Send order to API
                if (isSuccess && res?.data) {
                    navigate(`/order-confirmation/${res?.data?._id}`); // Navigate to confirmation page
                    toast.success('Order created successfully'); // Show success message
                }
            } catch (err) {
                toast.error(err?.data?.message || 'Error creating order'); // Handle errors
            }
        }
    };

    return (
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
    );
};

export default CheckoutPage;
