import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Loader from "../Loader";
import BrandList from "./BrandList";
import { useGetBrandsQuery } from "../../redux/slices/brandsApiSlice";

const Brands = () => {
	const { data: brands, isLoading, error } = useGetBrandsQuery({});

	return isLoading ? (
		<Loader />
	) : brands && brands?.doc ? (
		<div className="bg-white shadow-md shadow-gray-100 p-4">
			<div className="flex justify-between items-center p-4">
				<h2 className="text-xl font-bold mb-4 text-gray-900">Brands</h2>
				<Link to="/brands" className="view-box">
					View All
					<span>
						<FaAngleRight className="text-lg " />
					</span>
				</Link>
			</div>
			{brands && brands?.doc ? (
				<BrandList brands={brands?.doc} />
			) : (
				<p>Brands not found!</p>
			)}
		</div>
	) : (
		<div>Brands not found!</div>
	);
};

export default Brands;
