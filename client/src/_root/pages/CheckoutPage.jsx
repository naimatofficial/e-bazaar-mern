import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
	saveShippingAddress,
	saveBillingAddress,
	savePaymentMethod,
} from "../../redux/slices/cartSlice";
import { addressSchema, paymentSchema } from "./../../utils/schema";
import PaymentMethod from "../../components/Checkout/PaymentMethod";
import BillingAddressForm from "../../components/Checkout/BillingAddressForm";
import { useCreateOrderMutation } from "../../redux/slices/ordersApiSlice";
import CartSummary from "../../components/Cart/CartSummery";

const CheckoutPage = () => {
	const [step, setStep] = useState(0);

	const { userInfo } = useSelector((state) => state.auth);
	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!userInfo && !userInfo?.user) {
			navigate("/customer/auth/sign-in");
		}
	}, [userInfo]);

	const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation();

	const methods = useForm({
		resolver: zodResolver(step === 0 ? addressSchema : paymentSchema),
		mode: "onSubmit", // Validates only on form submission
		reValidateMode: "onChange", // Validates on each change after initial submission
	});

	const handleNext = async () => {
		try {
			const isValid = await methods.trigger([
				"email",
				"password",
				"confirmPassword",
				"phoneNumber",
			]);

			console.log(methods.formState.isValid);

			console.log(isValid);
			if (!isValid) {
				toast.error("Please fill all the required fields.");
				return;
			}

			if (step === 0) {
				const shippingAddress = methods.getValues();
				// note: for testing purpose we add two same addresses
				dispatch(saveShippingAddress(shippingAddress));
				dispatch(saveBillingAddress(shippingAddress));

				setStep(step + 1);
			} else {
				// Final step, proceed to order
				const { paymentMethod } = methods.getValues();
				dispatch(savePaymentMethod(paymentMethod));
				// order creation
				const order = {
					products: cart?.cartItems,
					customer: userInfo?.user?._id,
					vendor: cart?.cartItems?.[0]?.userId || "",
					shippingAddress: cart?.shippingAddress,
					billingAddress: cart?.billingAddress,
					paymentMethod: paymentMethod,
					totalAmount: cart?.totalPrice,
				};

				console.log(order);

				// call the create order api
				const res = await createOrder(order);
				console.log(res);
				if (isSuccess && res?.data) {
					navigate(`/order-confirmation/${res?.data?._id}`);
					toast.success("Order create successfully");
				}
			}
		} catch (err) {
			console.log(err);
			toast.error(err);
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
