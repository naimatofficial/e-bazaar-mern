import CategoryItem from "../../components/Categories/CategoryItem";
import Loader from "../../components/Loader";
import { useGetCategoriesQuery } from "../../redux/slices/categoriesApiSlice";

const CategoriesPage = () => {
	const { data: categories, isLoading } = useGetCategoriesQuery({});

	console.log(categories);

	return isLoading ? (
		<Loader />
	) : (
		<div className="">
			<div className="bg-primary-100 p-8 rounded-lg mb-4">
				<h2 className="text-2xl uppercase font-bold text-primary-400">
					ALL categories
				</h2>
				<p className="text-base text-primary-400">
					Find your favourite categories and products
				</p>
			</div>
			<div className="p-8">
				{categories?.doc ? (
					<div className="flex flex-wrap gap-4">
						{categories?.doc?.map((item, index) => (
							<CategoryItem key={index} category={item} />
						))}
					</div>
				) : (
					<p>Categories not found!</p>
				)}
			</div>
		</div>
	);
};

export default CategoriesPage;
