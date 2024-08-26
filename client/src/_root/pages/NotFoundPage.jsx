import React from "react";
import NotFoundImage from "../../assets/not-found.gif";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col justify-between items-center">
			<img
				src={NotFoundImage}
				alt="Not Found"
				className="w-1/2 h-96 object-contain"
			/>
			<button className="flex justify-between items-center gap-4 btn primary-btn">
				<FaArrowLeft />
				<span>Go To Home</span>
			</button>
		</div>
	);
};

export default NotFoundPage;
