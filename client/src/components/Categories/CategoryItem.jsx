import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CategoryItem = ({ category }) => {
	return (
		<Link
			to={`/products?category=${category._id}`}
			className="flex-center flex-col gap-2 p-2 group cursor-pointer"
		>
			<img
				src={`http://localhost:3000/uploads/${category.logo}`}
				alt={category.name}
				className="w-24 h-24 object-contain rounded-full transition-transform duration-300 group-hover:scale-90"
			/>
			<p className="text-base truncate transition-colors duration-300 ease-out text-gray-800 group-hover:text-orange-500">
				{category.name}
			</p>
		</Link>
	);
};

export default CategoryItem;
