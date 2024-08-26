import ProductCarousel from "../shared/ProductCarousel";
import FlatCard from "../shared/FlatCard";
import ProductCard from "./ProductCard";
import CategoryCarousel from "../shared/CategoryCarousel";
import Loader from "../Loader";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import { useGetCategoriesQuery } from "../../redux/slices/categoriesApiSlice";

const ProductsCategory = () => {
	const { data: categories, isLoading: isCategoriesLoading } =
		useGetCategoriesQuery({});

	// const { data: arrivalProducts } = useGetProductsQuery({newArrival=true});
	return isCategoriesLoading ? (
		<Loader />
	) : categories && categories?.doc ? (
		<div>
			{/* {arrivalProducts && arrivalProducts?.doc && (
				<div className="products-container">
					<h2 className="text-2xl font-bold mb-4 text-gray-900">
						New Arrivals
					</h2>
					<ProductCarousel
						data={arrivalProducts?.docs}
						component={FlatCard}
						largeDesktopLimit={4}
						desktopLimit={3}
					/>
				</div>
			)} */}

			{categories?.doc &&
				categories?.doc?.map((category) => {
					return (
						<CategoryCarousel
							key={category._id}
							category={category}
							component={ProductCard}
						/>
					);
				})}
		</div>
	) : (
		<p>No Categories found!</p>
	);
};

export default ProductsCategory;
