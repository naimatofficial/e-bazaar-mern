import ShopBanner from "../../components/Banners/ShopBanner";
import SearchSort from "../../components/Sort/SerachSort";

import Loader from "../../components/Loader";
import { useGetVendorDetailsQuery } from "../../redux/slices/vendorsApiSlice";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import ProductCard from "../../components/Product/ProductCard";
import CategorySidebar from "../../components/Categories/CategorySideBar";

const ShopViewPage = () => {
	const { vendorId } = useParams();

	const { data: vendor, isLoading } = useGetVendorDetailsQuery(vendorId);

	const { data: vendorProducts, isLoading: isVendorProductsLoading } =
		useGetProductsQuery(
			{
				userId: vendor?._id,
			},
			{ skip: !vendor?._id }
		);

	console.log(vendorProducts);

	return isLoading ? (
		<Loader />
	) : vendor ? (
		<div className="">
			<ShopBanner vendor={vendor} />
			<SearchSort />
			<div className="flex justify-between gap-4 items-center w-full">
				<div className="w-1/4  border border-gray-100">
					<CategorySidebar />
				</div>
				<div className="w-full p-8">
					{isVendorProductsLoading ? (
						<Loader />
					) : vendorProducts && vendorProducts?.doc?.length ? (
						<div className="grid grid-cols-4 gap-2">
							{vendorProducts?.doc?.map((product, index) => (
								<ProductCard key={index} {...product} />
							))}
						</div>
					) : (
						<p className="text-lg bg-blue-50 text-blue-500 py-4 px-8 mx-auto">
							This vendor has no products.
						</p>
					)}
				</div>
			</div>
		</div>
	) : (
		<p className="text-lg bg-red-50 text-red-500 py-4 px-8 mx-auto">
			Vendor data not found!
		</p>
	);
};

export default ShopViewPage;
