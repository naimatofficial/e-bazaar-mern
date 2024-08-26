/* eslint-disable react/prop-types */
import { useFormContext, Controller } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import { FiUpload } from "react-icons/fi";

const SellerRegForm2 = ({
	errors,
	logoImages,
	setLogoImages,
	bannerImages,
	setBannerImages,
	vendorImages,
	setVendorImages,
}) => {
	const { register, control } = useFormContext();

	return (
		<div className="p-4 lg:p-8">
			<h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">
				Vendor Information
			</h2>

			<div className="flex justify-between items-start lg:gap-10 md:flex-row flex-col w-full">
				<div className="flex-grow w-full">
					<div className="mb-4">
						<label className="input-label">First Name</label>
						<input
							{...register("firstName")}
							type="text"
							className={`input ${errors.firstName ? "border-red-500" : ""}`}
							placeholder="Ex: John"
						/>
						{errors.firstName && (
							<p className="text-red-500 text-xs italic">
								{errors.firstName.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="input-label">Last Name</label>
						<input
							{...register("lastName")}
							type="text"
							className={`input ${errors.lastName ? "border-red-500" : ""}`}
							placeholder="Ex: Doe"
						/>
						{errors.lastName && (
							<p className="text-red-500 text-xs italic">
								{errors.lastName.message}
							</p>
						)}
					</div>
				</div>

				<div className="mb-4">
					<label className="input-label">Vendor Image</label>
					<Controller
						control={control}
						name="vendorImage"
						render={({ field }) => (
							<ImageUploading
								value={vendorImages}
								onChange={(imageList) => {
									setVendorImages(imageList);
									field.onChange(imageList[0]?.file);
								}}
								dataURLKey="data_url"
							>
								{({ imageList, onImageUpload }) => (
									<div className="upload__image-wrapper">
										<button
											type="button"
											onClick={onImageUpload}
											className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
										>
											{imageList.length > 0 ? (
												<img
													src={imageList[0]["data_url"]}
													alt="Vendor image Preview"
													className="w-full h-full object-cover rounded-md"
												/>
											) : (
												<>
													<FiUpload className="text-gray-400" />
													<span className="text-gray-400">Upload File</span>
												</>
											)}
										</button>
									</div>
								)}
							</ImageUploading>
						)}
					/>
				</div>
			</div>

			<div className="mb-4">
				<label className="input-label">Shop Logo</label>
				<Controller
					control={control}
					name="logo"
					render={({ field }) => (
						<ImageUploading
							value={logoImages}
							onChange={(imageList) => {
								setLogoImages(imageList);
								field.onChange(imageList[0]?.file);
							}}
							dataURLKey="data_url"
						>
							{({ imageList, onImageUpload }) => (
								<div className="upload__image-wrapper">
									<button
										type="button"
										onClick={onImageUpload}
										className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
									>
										{imageList.length > 0 ? (
											<img
												src={imageList[0]["data_url"]}
												alt="Logo Preview"
												className="w-full h-full object-cover rounded-md"
											/>
										) : (
											<>
												<FiUpload className="text-gray-400" />
												<span className="text-gray-400">Upload File</span>
											</>
										)}
									</button>
								</div>
							)}
						</ImageUploading>
					)}
				/>
			</div>

			<div className="mb-4">
				<label className="input-label">Shop Name</label>
				<input
					{...register("shopName")}
					type="text"
					className={`input ${errors.shopName ? "border-red-500" : ""}`}
					placeholder="Ex: XYZ store"
				/>
				{errors.shopName && (
					<p className="text-red-500 text-xs italic">
						{errors.shopName.message}
					</p>
				)}
			</div>
			<div className="mb-4">
				<label className="input-label">Shop Address</label>
				<input
					{...register("address")}
					type="text"
					className={`input ${errors.address ? "border-red-500" : ""}`}
					placeholder="Shop address"
				/>
				{errors.address && (
					<p className="text-red-500 text-xs italic">
						{errors.address.message}
					</p>
				)}
			</div>
			<div className="mb-4">
				<label className="input-label">Shop Banner</label>
				<Controller
					control={control}
					name="banner"
					render={({ field }) => (
						<ImageUploading
							value={bannerImages}
							onChange={(imageList) => {
								setBannerImages(imageList);
								field.onChange(imageList[0]?.file);
							}}
							dataURLKey="data_url"
						>
							{({ imageList, onImageUpload }) => (
								<div className="upload__image-wrapper">
									<button
										type="button"
										onClick={onImageUpload}
										className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
									>
										{imageList.length > 0 ? (
											<img
												src={imageList[0]["data_url"]}
												alt="Shop Banner Preview"
												className="w-full h-full object-cover rounded-md"
											/>
										) : (
											<>
												<FiUpload className="text-gray-400" />
												<span className="text-gray-400">Upload File</span>
											</>
										)}
									</button>
								</div>
							)}
						</ImageUploading>
					)}
				/>
			</div>
		</div>
	);
};

export default SellerRegForm2;
