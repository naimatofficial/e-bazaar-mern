/* eslint-disable react/prop-types */
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCarousel from "../shared/ProductCarousel";
import FlatCard from "../shared/FlatCard";
import { useGetFeaturedDealsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";

const FeaturedDeal = () => {
	const { data: products, isLoading } = useGetFeaturedDealsQuery();

	return isLoading ? (
		<Loader />
	) : products ? (
		<div className="bg-primary-100 shadow-md p-4">
			<div className="p-4">
				<div className="flex justify-between items-center mb-0">
					<h2 className="text-xl font-bold text-gray-900">Featured Deal</h2>
					<Link to="/featured-deals" className="view-box">
						View All
						<span>
							<FaAngleRight className="text-lg" />
						</span>
					</Link>
				</div>
				<p className="text-lg font-medium text-gray-800">
					See the latest deals and exciting new offers!
				</p>
			</div>

			<ProductCarousel
				data={products}
				component={FlatCard}
				largeDesktopLimit={4}
				desktopLimit={3}
			/>
		</div>
	) : null;
};

export default FeaturedDeal;
