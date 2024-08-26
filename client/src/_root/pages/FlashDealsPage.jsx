import FlashDealTimer from "../../components/Deals/FlashDealTimer";
import Loader from "../../components/Loader";
import ProductCard from "../../components/Product/ProductCard";
import { useGetFlashDealsQuery } from "../../redux/slices/productsApiSlice";

import FlashDealBanner from "../../assets/banner/flash-deals.jpg";
import { useNavigate } from "react-router-dom";

const FlashDealsPage = () => {
	const { data, isLoading: flashDealsLoading } = useGetFlashDealsQuery({});

	const deal = data?.find(
		(item) => item.publish === true && item.status === "active"
	);

	const endDate =
		deal?.endDate || new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

	const banner = deal?.image
		? `http://localhost:3000/${deal?.image}`
		: FlashDealBanner;

	const navigate = useNavigate();

	if (!deal) {
		return navigate("/");
	}

	return flashDealsLoading ? (
		<Loader />
	) : (
		deal && (
			<div>
				{/* Banner */}
				<div className="relative h-60 mt-4 p-4 rounded-lg shadow-lg w-full mx-auto py-4 bg-pink-100">
					<img
						src={banner}
						alt="flash deals banner"
						className="absolute inset-0 w-full h-full object-cover rounded-lg"
					/>
					<div className="relative flex items-center h-full">
						<div className="p-2">
							<FlashDealTimer endDate={endDate} />
						</div>
					</div>
				</div>
				<div className="mb-8 py-4">
					<h2 className="lg:text-2xl md:text-xl text-lg font-bold text-primary-400">
						FLASH DEAL
					</h2>
					<p className="text-primary-400">
						Hurry Up! The offer is limited. Grab while it lasts
					</p>
				</div>
				<div className="bg-white px-4">
					<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
						{deal?.productId?.map((product, index) => (
							<ProductCard key={index} {...product} />
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default FlashDealsPage;
