import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const transactions = [];

const MyloyaltyPoint = () => {
	return (
		<div className="rounded-lg p-8 shadow-sm shadow-primary-100">
			<div className="flex flex-col md:flex-row justify-center gap-20">
				<div className="flex justify-center">
					<div className="bg-green-400 w-full md:w-96 h-48 text-white p-5 rounded-lg">
						<div className="flex items-center">
							<div>
								<p className="text-sm">Total Loyalty Point</p>
								<h2 className="text-2xl md:text-3xl font-bold">0</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row h-auto md:h-48 items-stretch">
					<div className="flex-1">
						<div className="border p-5 rounded-lg shadow-lg h-full">
							<h3 className="font-bold mb-2">How To Use</h3>
							<div className="text-sm mt-4">
								<ul className="list-disc list-inside">
									<li>Convert your loyalty point to wallet money.</li>
									<li>Minimum 200 Points required to convert into currency.</li>
								</ul>
							</div>
							<div className="flex justify-center mt-4">
								<button className="bg-green-300 p-2 rounded-md text-xs md:text-sm">
									Convert to Currency
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center min-h-96 mt-2">
				<h3 className="font-bold text-lg">Transaction History</h3>
				{/* Assuming transactions is defined and populated elsewhere in your component */}
				{transactions.length === 0 ? (
					<div className="flex flex-col items-center justify-center text-center mt-5">
						<FaInfoCircle className="text-6xl text-gray-300" />
						<p className="text-gray-400 mt-2">
							You do not have any transactions yet
						</p>
					</div>
				) : (
					<ul>
						{transactions.map((transaction, index) => (
							<li key={index} className="border-b py-2">
								<p>{transaction}</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default MyloyaltyPoint;
