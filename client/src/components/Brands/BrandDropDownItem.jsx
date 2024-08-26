import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../redux/slices/brandsApiSlice";
import Loader from "../Loader";
import { capitalizeFirstLetter } from "../../utils";

const BrandDropDownItem = () => {
	const { data: brands, isLoading } = useGetBrandsQuery({});

	console.log(brands);

	return isLoading ? (
		<Loader />
	) : brands && brands?.doc ? (
		<>
			<ul>
				{brands?.doc?.map((brand, index) => {
					if (brand.productCount > 0)
						return (
							<li
								key={index}
								className=" py-2 border-b outline-none hover:text-primary-400 cursor-pointer"
							>
								<Link
									to={`/products?brand=${brand?._id}`}
									className="flex justify-between items-center"
								>
									<span>{capitalizeFirstLetter(brand.name)}</span>
									<span className="text-gray-500">({brand.productCount})</span>
								</Link>
							</li>
						);
				})}
			</ul>
			<div className="text-center mt-4">
				<Link
					to="/brands"
					className="text-primary-500 hover:text-primary-400 outline-none"
				>
					View more
				</Link>
			</div>
		</>
	) : (
		<p>No brands found!</p>
	);
};

export default BrandDropDownItem;
