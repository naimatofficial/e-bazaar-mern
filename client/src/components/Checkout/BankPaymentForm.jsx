/* eslint-disable react/prop-types */
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
	accountNumber: yup.string().required("Account number is required"),
	amount: yup
		.number()
		.required("Amount is required")
		.positive("Amount must be positive"),
	reference: yup.string(),
	note: yup.string(),
});

const BankPaymentForm = ({ open, setOpen, handleOpen }) => {
	const cart = useSelector((state) => state.cart);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		setOpen(false);
	};

	return (
		<div className="p-4">
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Bank Payment</DialogHeader>
				<DialogBody>
					<div>
						<h1 className="text-center text-xl font-bold p-4">
							Amount: ${cart?.totalPrice}
						</h1>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div className="mb-4">
							<label className="input-label">Account number</label>
							<input
								{...register("accountNumber")}
								className="input"
								placeholder="02xxxxx"
							/>
							{errors.accountNumber && (
								<p className="text-red-500 text-sm">
									{errors.accountNumber.message}
								</p>
							)}
						</div>
						<div className="flex space-x-4 mb-4">
							<div className="w-1/2">
								<label className="input-label">Amount</label>
								<input
									{...register("amount")}
									className="input"
									placeholder="500"
									type="number"
								/>
								{errors.amount && (
									<p className="text-red-500 text-sm">
										{errors.amount.message}
									</p>
								)}
							</div>
							<div className="w-1/2">
								<label className="input-label">Reference</label>
								<input
									{...register("reference")}
									className="input"
									placeholder="XRt56bgST6"
								/>
								{errors.reference && (
									<p className="text-red-500 text-sm">
										{errors.reference.message}
									</p>
								)}
							</div>
						</div>
						<div className="mb-4">
							<label className="input-label">Payment note</label>
							<textarea
								{...register("note")}
								className="input"
								placeholder="Insert note"
							/>
						</div>
						<div className="flex justify-end space-x-2">
							<button
								type="button"
								onClick={handleOpen}
								className="btn bg-orange-400 text-white"
							>
								Close
							</button>
							<button type="submit" className="btn primary-btn">
								Submit
							</button>
						</div>
					</form>
				</DialogBody>
			</Dialog>
		</div>
	);
};

export default BankPaymentForm;
