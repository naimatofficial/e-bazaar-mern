import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSyncAlt } from "react-icons/fa";

const TrackOrder = () => {
	const [orderId, setOrderId] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleTrackOrder = () => {
		// Logic to track order
	};

	const handleClear = () => {
		setOrderId("");
		setPhoneNumber("");
	};

	return (
		<div className="xl:w-full mx-auto p-8 h-[100%] bg-white shadow-sm shadow-primary-100 items-center rounded-lg">
			<button
				onClick={handleClear}
				className="flex items-center text-gray-600 hover:text-gray-800"
			>
				<FaSyncAlt className="mr-1" /> Clear
			</button>
			<h2 className="text-2xl font-semibold text-center mb-6">Track Order</h2>
			<div className="flex justify-center items-center mb-4 gap-4">
				<input
					type="text"
					value={orderId}
					onChange={(e) => setOrderId(e.target.value)}
					placeholder="Order ID"
					className="border border-gray-400 rounded-md px-4 py-2 w-1/3 focus:outline-none"
				/>
				<input
					type="text"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					placeholder="Your phone number"
					className="border border-gray-400 rounded-md px-4 py-2 w-1/3 focus:outline-none"
				/>
				<button
					onClick={handleTrackOrder}
					className="bg-primary-500 text-white px-8 py-2 rounded ml-2 hover:bg-blue-700"
				>
					Track Order
				</button>
			</div>

			<div className="flex flex-col items-center mt-8">
				<img src="src/assets/track-truck.svg" alt="Truck" className="mb-2" />
				<p className="text-gray-600">
					Enter your order ID & phone number to get delivery updates
				</p>
			</div>
		</div>
	);
};

TrackOrder.propTypes = {
	orderId: PropTypes.string,
	phoneNumber: PropTypes.string,
};

export default TrackOrder;
