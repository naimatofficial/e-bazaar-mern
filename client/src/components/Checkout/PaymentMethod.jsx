import { useFormContext } from "react-hook-form";

const PaymentMethod = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className="space-y-4 w-full">
			<div>
				<label className="input-label">Payment Method</label>
				<select {...register("paymentMethod")} className="input">
					<option value="">Select Payment Method</option>
					<option value="credit-card">Credit Card</option>
					<option value="cash_on_delivery">Cash on Delivery</option>
					<option value="paypal">Paypal</option>
				</select>
				{errors.paymentMethod && (
					<p className="text-red-500 text-xs mt-1">
						{errors.paymentMethod.message}
					</p>
				)}
			</div>
		</div>
	);
};

export default PaymentMethod;
