import { useState } from "react";
import { FaUserCircle, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<div className="p-8 xl:w-full xl:mx-auto bg-white rounded-lg shadow-sm shadow-primary-100">
			<h2 className="text-2xl font-bold mb-6">Profile Info</h2>
			<div className="relative h-full flex items-center justify-center mb-6">
				<div className="relative">
					{selectedImage ? (
						<img
							src={selectedImage}
							alt="Uploaded"
							className="w-36 h-36 object-cover rounded-full border border-gray-300"
						/>
					) : (
						<FaUserCircle className="text-9xl text-primary-100" />
					)}

					{/* Image Upload Section */}

					<div className="absolute bottom-0 right-0 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center">
						<input
							type="file"
							id="imageUpload"
							hidden
							onChange={handleImageChange}
							accept="image/*"
						/>
						<label htmlFor="imageUpload" className="cursor-pointer">
							<FaCamera className="w-6 h-6 text-primary-400" />
						</label>
					</div>
				</div>
			</div>

			<h1 className="text-xl font-bold text-center">Name</h1>
			<form className="space-y-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label className="input-label">First Name</label>
						<input
							type="text"
							defaultValue={userInfo?.user?.firstName}
							className="input"
						/>
					</div>
					<div>
						<label className="input-label">Last Name</label>
						<input
							type="text"
							defaultValue={userInfo?.user?.lastName}
							className="input"
						/>
					</div>
				</div>
				<div>
					<label className="input-label">Phone Number</label>
					<input
						type="text"
						defaultValue={userInfo?.user?.phoneNumber}
						className="input"
					/>
				</div>
				<div>
					<label className="input-label">Email</label>
					<input
						type="email"
						defaultValue={userInfo?.user?.email}
						className="input"
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label className="input-label">New Password</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="input"
							/>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>
					<div>
						<label className="input-label">Confirm Password</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								className="input"
							/>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<button type="submit" className="btn primary-btn">
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProfileInfo;
