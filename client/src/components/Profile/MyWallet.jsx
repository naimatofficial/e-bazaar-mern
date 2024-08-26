import React from "react";
import { FaPlusCircle, FaInfoCircle } from "react-icons/fa";

const walletOffers = [
	{
		title: "Flat Bonus",
		validity: "Valid till 22 Nov, 2030",
		description: "Add fund to wallet $500.00 and enjoy $150.00 bonus",
		extra: "Add minimum 500 and get flat 150 extra",
	},
	{
		title: "Add fund offer",
		validity: "Valid till 26 Dec, 2030",
		description: "Add fund to wallet $1000.00 and enjoy $300.00 bonus",
		extra: "Add more to save more",
	},
];

const transactions = [];

const MyWallet = () => {
	return (
		<div className="p-8 shadow-sm shadow-primary-100 rounded-lg">
			<div className="flex flex-col md:flex-row justify-between">
				<div className="md:flex-1">
					<div className="bg-blue-500 w-full md:w-80 text-white p-5 rounded-lg xl:h-52">
						<div className="flex justify-between items-center">
							<div>
								<p className="text-sm">Wallet Amount</p>
								<h2 className="text-3xl font-bold">$0.00</h2>
							</div>
							<FaInfoCircle className="text-xl" />
						</div>
						<button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full flex items-center">
							<FaPlusCircle className="mr-2" /> Add Fund
						</button>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-stretch mt-5 md:mt-0">
					{walletOffers.map((offer, index) => (
						<div key={index} className="flex-1 md:ml-5">
							<div className="border p-5 rounded-lg h-full">
								<h3 className="font-bold mb-2">{offer.title}</h3>
								<p className="text-sm text-gray-600">{offer.validity}</p>
								<p className="text-sm mt-2">{offer.description}</p>
								<p className="text-blue-500 font-semibold mt-2">
									{offer.extra}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col items-center justify-center h-auto md:h-96 mt-5 md:mt-0">
				<h3 className="font-bold text-lg">Transaction History</h3>
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

export default MyWallet;
