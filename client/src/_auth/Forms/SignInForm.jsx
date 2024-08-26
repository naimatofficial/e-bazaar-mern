import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import googleIcon from "./../../assets/socials-icons/google-icon.png";
import facebookIcon from "./../../assets/socials-icons/fb-icon.png";
import { setCredentials } from "../../redux/slices/authSlice";
import { useCustomerLoginMutation } from "../../redux/slices/customersApiSlice";
import { FaEye, FaEyeSlash, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const recaptcha = useRef();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo && userInfo.user) {
			navigate("/");
		}
	}, [userInfo, navigate]);

	const [CustomerLogin, { isLoading }] = useCustomerLoginMutation();

	const onSubmit = async (data) => {
		const { email, password } = data;
		const captchaValue = recaptcha.current.getValue();

		if (!captchaValue) {
			return toast.error("Please verify the reCAPTCHA!");
		}

		try {
			const res = await CustomerLogin({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			toast.success("Login successfully");
			navigate("/");
		} catch (err) {
			console.error(err);
			toast.error(err?.data?.message || err.error);
		}
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="min-w-1/2 lg:w-1/2 mx-auto p-8">
			<h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="email" className="input-label">
						Email
					</label>
					<input
						id="email"
						type="email"
						{...register("email", { required: true })}
						className="input"
						placeholder="Enter email"
					/>
					{errors.email && (
						<p className="text-red-500 text-xs italic">
							{errors.email.message}
						</p>
					)}
				</div>
				<div>
					<div className="mb-4">
						<label className="input-label">Password</label>
						<div className="relative">
							<input
								{...register("password")}
								type={showPassword ? "text" : "password"}
								className={`input ${errors.password ? "border-red-500" : ""}`}
								placeholder="Minimum 8 characters long"
							/>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={handleTogglePassword}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
							{errors.password && (
								<p className="text-red-500 text-xs italic">
									{errors.password.message}
								</p>
							)}
						</div>
					</div>
					<ReCAPTCHA
						ref={recaptcha}
						sitekey={"6LdROiEqAAAAAJc4io2q6Tnip70WSdimRgAwLY0G"}
					/>
				</div>
				<div>
					<button type="submit" className="w-full btn primary-btn">
						{isLoading ? "Loading..." : "Login"}
					</button>
				</div>
			</form>
			<div className="mt-4">
				<p className="text-sm text-center text-gray-500">Or continue with</p>
				<div className="flex mt-2 py-2 justify-center items-center">
					<button className="">
						<img
							src={googleIcon}
							alt="google icon"
							className="w-12 h-12 object-contain"
						/>
					</button>
					<button className="">
						<img
							src={facebookIcon}
							alt="facebook icon"
							className="w-12 h-12 object-contain"
						/>
					</button>
				</div>
			</div>
			<div>
				<p className="text-center mt-4">
					Enjoy New experience
					<Link
						to="/customer/auth/sign-up"
						className="text-blue-500 underline hover:no-underline ml-2"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignInForm;
