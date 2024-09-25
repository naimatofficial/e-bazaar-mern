/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import { Link } from "react-router-dom";
import "react-international-phone/style.css";
import "./../../styles/customPhoneInput.css";

const SellerRegForm1 = ({ errors }) => {
	const { register } = useFormContext();

	return (
		<div className="flex flex-col lg:flex-row justify-between items-center gap-6 bg-primary-100 py-10 px-4 lg:px-8">
			<div className="flex flex-col justify-center items-center mb-6 lg:mb-0">
				<h2 className="text-2xl lg:text-3xl text-center lg:text-left">
					Vendor Registration
				</h2>
				<p className="text-sm lg:text-base text-center lg:text-left">
					Create your own store. Already have store?
					<Link
						to="/vendor/auth/login"
						className="text-primary-500 text-lg lg:text-xl font-bold ml-2"
					>
						Login
					</Link>
				</p>
				<img
					src="https://6valley.6amtech.com/public/assets/front-end/img/media/seller-registration.png"
					alt="vendor"
					className="h-40 w-40 lg:h-64 lg:w-64 object-contain mt-4 lg:mt-0"
				/>
			</div>
			<div className=" bg-white p-4 md:p-6 lg:p-8 rounded-lg flex-grow">
				<h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center lg:text-left">
					Account Information
				</h2>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
					<div className="mb-4">
						<label className="input-label">Email</label>
						<input
							{...register("email")}
							type="email"
							className={`input ${errors.email ? "border-red-500" : ""}`}
							placeholder="Enter email address"
						/>
						{errors.email && (
							<p className="text-red-500 text-xs italic">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="input-label">Password</label>
						<input
							{...register("password")}
							type="password"
							className={`input ${errors.password ? "border-red-500" : ""}`}
							placeholder="Enter password"
						/>
						{errors.password && (
							<p className="text-red-500 text-xs italic">
								{errors.password.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="input-label">Confirm Password</label>
						<input
							{...register("confirmPassword")}
							type="password"
							className={`input ${
								errors.confirmPassword ? "border-red-500" : ""
							}`}
							placeholder="Confirm password"
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-xs italic">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="input-label">Phone Number</label>
						<PhoneInput
							defaultCountry="pk"
							{...register("phoneNumber")}
							className={`custom-phone-input ${
								errors.password ? "border-red-500" : ""
							}`}
							inputClassName="custom-phone-input"
						/>
						{errors.phoneNumber && (
							<p className="text-red-500 text-xs italic">
								{errors.phoneNumber.message}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerRegForm1;
