import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useVendorLoginMutation } from "../../redux/slices/vendorsApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const VendorLoginForm = () => {
	const { register, handleSubmit } = useForm();
	const recaptcha = useRef();

	console.log(recaptcha);

	const [showPassword, setShowPassword] = useState(false);
	const [vendorLogin, { isLoading, isSuccess, error }] =
		useVendorLoginMutation();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = async (data) => {
		const { email, password } = data;
		const captchaValue = recaptcha.current.getValue();

		if (!captchaValue) {
			return toast.error("Please verify the reCAPTCHA!");
		}

		try {
			const res = await vendorLogin({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate("/");
			isSuccess && toast.success("Vendor login successfully");
		} catch (err) {
			console.error(err?.data?.message);
			toast.error(err?.data?.message || err.error);
		}
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="w-[500px] mx-auto p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out">
			<div className="text-center text-blue-gray-800 mb-8">
				<h2 className="text-2xl font-bold mb-4">Sign in</h2>
				<h3 className="text-xl font-bold mb-4">Welcome back to vendor login</h3>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="email" className="input-label">
						Your Email
					</label>
					<input
						id="email"
						type="text"
						{...register("email", { required: true })}
						className="input"
						placeholder="email@address.com"
					/>
				</div>
				<div className="mb-4 relative">
					<label htmlFor="password" className="input-label">
						Password
					</label>
					<input
						id="password"
						type={showPassword ? "text" : "password"}
						{...register("password", { required: true })}
						className="input"
						placeholder="8+ Characters requried"
					/>
					<button
						type="button"
						onClick={handleTogglePassword}
						className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
					>
						{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
					</button>
				</div>
				<ReCAPTCHA
					ref={recaptcha}
					sitekey={"6LdROiEqAAAAAJc4io2q6Tnip70WSdimRgAwLY0G"}
				/>
				<div>
					<button type="submit" className="w-full btn primary-btn">
						{isLoading ? "Loading..." : "Login"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default VendorLoginForm;
