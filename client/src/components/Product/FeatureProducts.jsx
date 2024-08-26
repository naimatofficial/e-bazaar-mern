/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ProductCarousel from "../shared/ProductCarousel";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Loader from "../Loader";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";

const FeatureProducts = () => {
	const { data: products, isLoading } = useGetProductsQuery({
		isFeatured: true,
	});

	return isLoading ? (
		<Loader />
	) : products && products?.doc ? (
		<div className="bg-white shadow-md shadow-gray-200 rounded-lg py-8 px-4">
			<h2 className="text-2xl font-bold mb-4 text-center text-primary-500">
				Featured Products
			</h2>
			<Link to="/products?featured" className="view-box">
				View All
				<span>
					<FaAngleRight className="text-lg" />
				</span>
			</Link>
			<ProductCarousel
				data={products?.doc}
				component={ProductCard}
				largeDesktopLimit={5}
				desktopLimit={4}
			/>
		</div>
	) : null;
};

export default FeatureProducts;
