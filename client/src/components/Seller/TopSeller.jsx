import "tailwindcss/tailwind.css";
import ProductCarousel from "../shared/ProductCarousel";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SellerCard from "./SellerCard";
import { useGetVendorsQuery } from "../../redux/slices/vendorsApiSlice";
import Loader from "../Loader";

const TopSeller = () => {
	const { data: sellers, isLoading } = useGetVendorsQuery({});

	return isLoading ? (
		<Loader />
	) : sellers && sellers?.doc ? (
		<div className="bg-white shadow-md rounded-lg p-4 mb-4">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold mb-4">Top Sellers</h2>
				<Link to="/vendors" className="view-box">
					View All
					<span>
						<FaAngleRight className="text-lg " />
					</span>
				</Link>
			</div>

			<ProductCarousel
				data={sellers?.doc}
				component={SellerCard}
				largeDesktopLimit={4}
				desktopLimit={3}
			/>
		</div>
	) : null;
};

export default TopSeller;
