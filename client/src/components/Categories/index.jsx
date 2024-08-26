import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

import { useGetCategoriesQuery } from "../../redux/slices/categoriesApiSlice";
import Loader from "../Loader";

const Categories = () => {
	const { data: categories, isLoading, error } = useGetCategoriesQuery({});

	return isLoading ? (
		<Loader />
	) : categories && categories?.dco ? (
		<div className="bg-white shadow-md shadow-gray-100 p-4">
			<div className="flex justify-between items-center p-4">
				<h2 className="text-xl font-bold mb-4 text-gray-900">Categories</h2>
				<Link to="/categories" className="view-box">
					View All
					<span>
						<FaAngleRight className="text-lg " />
					</span>
				</Link>
			</div>
			<CategoryList categories={categories?.doc} />
		</div>
	) : (
		<p>Categories not found!</p>
	);
};

export default Categories;
