import BrandItem from "../../components/Brands/BrandItem";
import Loader from "../../components/Loader";
import { useGetBrandsQuery } from "../../redux/slices/brandsApiSlice";

const BrandsPage = () => {
	const { data: brands, isLoading } = useGetBrandsQuery({});

	console.log(brands);

	return isLoading ? (
		<Loader />
	) : (
		<div className="">
			<div className="bg-primary-100 p-8 rounded-lg mb-4">
				<h2 className="text-2xl uppercase font-bold text-primary-400">
					ALL Brands
				</h2>
				<p className="text-base text-primary-400">
					Find your favourite brands and products
				</p>
			</div>
			<div className="p-8">
				{brands && brands?.doc ? (
					<div className="flex flex-wrap gap-4">
						{brands?.doc?.map((item, index) => (
							<BrandItem key={index} brand={item} />
						))}
					</div>
				) : (
					<p>Brands not found!</p>
				)}
			</div>
		</div>
	);
};

export default BrandsPage;
