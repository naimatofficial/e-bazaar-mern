import { Typography } from "@material-tailwind/react";
import { useGetCategoriesQuery } from "../../redux/slices/categoriesApiSlice";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils";

const CategorySidebar = () => {
	const { data: categories, isLoading } = useGetCategoriesQuery({});

	return isLoading ? (
		<Loader />
	) : categories && categories?.data ? (
		<>
			<div className="w-[300px] p-2 border mx-auto shadow-sm shadow-primary-100 bg-white-100">
				<div className="flex flex-col gap-2">
					{categories.data.map((category, index) => {
						if (index <= 10)
							return (
								<Link
									key={index}
									to={`/products?category=${category._id}`}
									className="flex justify-between items-center group  p-1 border-b last:border-none cursor-pointer"
								>
									<Typography className="text-gray-700 group-hover:text-primary-600">
										{capitalizeFirstLetter(category.name)}
									</Typography>
								</Link>
							);
					})}
					<Link
						to={`/categories`}
						className="group text-center cursor-pointer w-full"
					>
						<Typography className="text-primary-500 p-1 group-hover:text-primary-600">
							view more
						</Typography>
					</Link>
				</div>
			</div>
		</>
	) : (
		<p>No categories found!</p>
	);
};

export default CategorySidebar;
