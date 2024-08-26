import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CouponCard = ({ icon, discount, on, code, validUntil, minPurchase }) => {
	// State to manage copied status
	const [isCopied, setIsCopied] = useState(false);

	// Function to copy code to clipboard and set state
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setIsCopied(true);
			// Optionally, reset isCopied state after a few seconds
			setTimeout(() => setIsCopied(false), 3000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow h-auto sm:h-44 text-center">
			{/* Left side */}
			<div className="w-[30%] flex flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
				<div>{icon}</div>
				<div>
					<p className="text-lg font-semibold">{discount}</p>
					<p>on</p>
					<Link
						to={`/your-path/${on}`}
						className="text-blue-600 hover:text-blue-800"
					>
						{on}
					</Link>
				</div>
			</div>

			{/* Right side */}
			<div className="w-[70%] text-right sm:text-center gap-4">
				<button
					onClick={handleCopy}
					className="text-sx  font-bold p-10 mb-4"
					style={{
						width: "200px",
						border: "2px dashed green",
						padding: "4px",
						borderRadius: "8px",
					}}
				>
					{isCopied ? "Copied" : code}
				</button>
				<p className="text-sx font-bold"> {validUntil}</p>
				<p className="text-sx font-bold">${minPurchase}</p>
			</div>
		</div>
	);
};
CouponCard.propTypes = {
	icon: PropTypes.element.isRequired,
	discount: PropTypes.string.isRequired,
	on: PropTypes.string.isRequired,
	code: PropTypes.string.isRequired,
	validUntil: PropTypes.string.isRequired,
	minPurchase: PropTypes.number.isRequired,
};

export default CouponCard;
