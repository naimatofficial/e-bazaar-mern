import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SellerRegForm2 from "./SellerRegForm2";
import SellerRegForm1 from "./SellerRegForm1";
import { useVendorRegisterMutation } from "../../redux/slices/vendorsApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../redux/constants";

// Combined schema for both steps
const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
	phoneNumber: z.string().min(1, "Phone number is required"),
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	shopName: z.string().min(1, "Shop name is required"),
	address: z.string().min(3, "Shop address is required"),
	logo: z.any(),
	banner: z.any(),
	vendorImage: z.any(),
});

const MultiStepForm = () => {
	const [logoImages, setLogoImages] = useState([]);
	const [bannerImages, setBannerImages] = useState([]);
	const [vendorImages, setVendorImages] = useState([]);
	const [step, setStep] = useState(0);

	const [vendorRegister, { isLoading, isSuccess, error }] =
		useVendorRegisterMutation();

	const methods = useForm({
		resolver: zodResolver(schema),
		mode: "onSubmit", // Validates only on form submission
		reValidateMode: "onChange", // Validates on each change after initial submission
	});

	const navigate = useNavigate();

	const handleNext = async () => {
		const isValid = await methods.trigger([
			"",
			"password",
			"confirmPassword",
			"phoneNumber",
		]);
		if (!isValid) {
			toast.error("Please fill all the required inputs.");
			return;
		}

		if (step === 0) {
			setStep(step + 1);
		}
	};

	const handlePrev = () => {
		if (step > 0) {
			setStep(step - 1);
		}
	};

	const onSubmit = async (data) => {
		try {
			// Extract file names or set default messages
			const logoFileName = logoImages?.[0]?.file || "No logo uploaded";
			const bannerFileName = bannerImages?.[0]?.file || "No banner uploaded";
			const vendorFileName = vendorImages?.[0]?.file || "No banner uploaded";

			console.log({ logoFileName, bannerFileName });

			const finalData = {
				...data,
				logo: logoFileName,
				banner: bannerFileName,
				vendorImage: vendorFileName,
			};

			if (finalData.password !== finalData.confirmPassword) {
				toast.error("Passwords do not match");
				return;
			}

			console.log(finalData); // Check the final data object

			const formData = new FormData();
			formData.append("email", finalData.email);
			formData.append("password", finalData.password);
			formData.append("phoneNumber", finalData.phoneNumber);
			formData.append("firstName", finalData.firstName);
			formData.append("lastName", finalData.lastName);
			formData.append("shopName", finalData.shopName);
			formData.append("address", finalData.address);
			formData.append("logo", finalData.logo);
			formData.append("banner", finalData.banner);
			formData.append("vendorImage", finalData.vendorImage);

			// await axios.post(`${BASE_URL}/api/vendors`, formData, {
			// 	headers: {
			// 		"Content-Type": "multipart/form-data",
			// 	},
			// });

			await vendorRegister(formData).unwrap();
			navigate("/vendor/auth/login");
			toast.success("Vendor registered successfully");
		} catch (err) {
			toast.error(err?.data?.error || err.error);
			console.error("Error: ", err);
		}
	};

	return (
		<div className="container mx-auto p-2">
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					{step === 0 && (
						<>
							<SellerRegForm1 errors={methods.formState.errors} />
							<div className="flex justify-end mt-4">
								<button
									className="btn primary-btn cursor-pointer"
									type="button"
									onClick={handleNext}
								>
									Next
								</button>
							</div>
						</>
					)}
					{step === 1 && (
						<>
							<SellerRegForm2
								errors={methods.formState.errors}
								logoImages={logoImages}
								setLogoImages={setLogoImages}
								bannerImages={bannerImages}
								setBannerImages={setBannerImages}
								vendorImages={vendorImages}
								setVendorImages={setVendorImages}
							/>
							<div className="flex justify-between items-center mt-4">
								{step > 0 && (
									<div className="flex justify-between items-center mt-4">
										<button
											className="btn secondary-btn"
											type="button"
											onClick={handlePrev}
										>
											Previous
										</button>
									</div>
								)}
								<button
									className="btn primary-btn justify-self-end cursor-pointer"
									type="submit"
									disabled={isLoading}
								>
									{isLoading ? "Loading..." : "Submit"}
								</button>
							</div>
						</>
					)}
				</form>
			</FormProvider>
		</div>
	);
};

export default MultiStepForm;
