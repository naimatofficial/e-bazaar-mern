import {
	AiOutlineCopy,
	AiOutlineWhatsApp,
	AiOutlineMail,
	AiOutlineShareAlt,
} from "react-icons/ai";

const ReferEarn = () => {
	const referralCode = "QE0S46WX0PXTUARPYMTL";

	const handleCopy = () => {
		navigator.clipboard.writeText(referralCode);
		alert("Referral code copied to clipboard!");
	};

	return (
		<div className=" bg-white p-8 shadow-sm shadow-primary-100 rounded-md">
			<h1 className="text-2xl font-bold mb-4">Refer & Earn</h1>
			<div className="flex justify-center mb-4">
				<img
					src="src/assets/refer-and-earn.png"
					alt="Refer & Earn"
					className="w-96"
				/>
			</div>
			<h2 className="text-xl font-semibold text-center text-green-400 mb-2">
				Invite Your Friends & Businesses
			</h2>
			<p className="text-center mb-6">
				Copy your code and share with your friends
			</p>
			<label htmlFor="" className="ml-5 text-xs">
				Your personal code
			</label>

			<div className="flex justify-center mb-4">
				<input
					type="text"
					value={referralCode}
					readOnly
					className="w-[90%] border border-gray-300 p-2 rounded-l-md focus:outline-none"
				/>
				<button
					onClick={handleCopy}
					className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
				>
					<AiOutlineCopy size={24} />
				</button>
			</div>
			<p className="text-center mb-4">OR SHARE</p>
			<div className="flex justify-center space-x-4 mb-6">
				<button className="text-green-500">
					<AiOutlineWhatsApp size={32} />
				</button>
				<button className="text-red-500">
					<AiOutlineMail size={32} />
				</button>
				<button className="text-blue-500">
					<AiOutlineShareAlt size={32} />
				</button>
			</div>
			<div className="bg-blue-50 p-8 rounded-md border border-blue-300">
				<h3 className="text-lg font-semibold mb-2">How it works?</h3>
				<ol className="list-decimal list-inside space-y-1">
					<li>Invite your friends & businesses</li>
					<li>They register E-Commerce Baaazaar with special offer</li>
					<li>You make your earnings</li>
				</ol>
			</div>
		</div>
	);
};

export default ReferEarn;
