/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineStar, AiFillMessage } from "react-icons/ai";

const ShopBanner = ({ vendor }) => {
	const banner = `http://localhost:3000/${vendor.banner}`;

	return (
		vendor && (
			<div className="relative h-[380px] mt-4 p-4 rounded-lg shadow-lg max-w-7xl mx-auto py-4 bg-pink-100">
				<img
					src={banner}
					alt="Shop Banner"
					className="absolute inset-0 w-full h-full object-cover rounded-lg"
				/>
				<div className="relative flex items-center h-full">
					<div className="flex flex-col justify-between w-[500px] z-10">
						<div className="h-[240px]"></div>
						<div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
							<img
								src={`http://localhost:3000/${vendor.logo}`}
								alt="6valley CMS"
								className="w-16 h-16 object-cover rounded"
							/>
							<div className="ml-4">
								<h2 className="text-xl font-semibold">{vendor.shopName}</h2>
								<div className="flex items-center text-yellow-500">
									{[1, 2, 3, 4].map((star) => (
										<AiFillStar key={star} />
									))}
									<AiOutlineStar />
									<span className="ml-2 text-gray-700">(4.8)</span>
								</div>
								<div className="text-green-600">
									<span>5 Reviews</span> | <span>63 Orders</span>
								</div>
							</div>
							<button className="ml-auto bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
								<AiFillMessage className="mr-2" /> Chat
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default ShopBanner;
