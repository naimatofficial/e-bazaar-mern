import PropTypes from "prop-types"; // Import PropTypes for prop validation (optional)
import { Link } from "react-router-dom";

const SellerCard = ({ data: seller }) => {
	return (
		<>
			<div className="bg-white rounded-lg border border-primary-100 overflow-hidden flex flex-col w-75 mx-2 cursor-pointer">
				<Link to={`/shop-view/${seller._id}`}>
					<img
						src={`http://localhost:3000/${seller.banner}`}
						alt={seller.firstName}
						className="w-full h-24 object-cover transform transition duration-300 ease-in-out hover:scale-105"
					/>
					<div className="p-4 flex-col items-center">
						<div className="flex flex-row gap-2">
							<img
								src={`http://localhost:3000/${seller.logo}`}
								alt={seller.shopName}
								className="w-16 h-16 bg-white rounded-full object-cover -mt-8 border-2 border-white shadow-md transform transition duration-300 ease-in-out hover:scale-105"
							/>

							<div className="flex flex-col -mt-4">
								<h3 className="font-medium text-gray-800">{`${seller.shopName}`}</h3>
								<div className="flex flex-row gap-1">
									<span className="text-yellow-400">★</span>
									<span className=" text-gray-600 text-sm">2.2 Rating</span>
								</div>
							</div>
						</div>

						<div className="flex mt-2 justify-around">
							<div className="flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md">
								<h4 className="text-lg font-semibold text-primary-400">10</h4>
								<span className="text-gray-600 text-sm p-1">Reviews</span>
							</div>
							<div className="flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md">
								<h4 className="text-lg font-semibold text-primary-400">5</h4>
								<span className="text-gray-600 text-sm p-1">Products</span>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

// Optional: Adding PropTypes for prop validation
SellerCard.propTypes = {
	seller: PropTypes.object,
};

export default SellerCard;
