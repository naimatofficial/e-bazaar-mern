import React from "react";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";
import VanderCard from "../Product/subcomponent/VanderCard";
import MoreStoreProducts from "../Product/subcomponent/MoreStoreProducts";
import FeatureCard from "../Product/subcomponent/FeatureCard";
import {
	FaCertificate,
	FaLock,
	FaShippingFast,
	FaUndoAlt,
} from "react-icons/fa";

const features = [
	{ Icon: FaShippingFast, text: "Fast Delivery all across the country" },
	{ Icon: FaLock, text: "Safe Payment" },
	{ Icon: FaUndoAlt, text: "7 Days Return Policy" },
	{ Icon: FaCertificate, text: "100% Authentic Products" },
];

const VendorRightBar = ({ vendorId }) => {
	const { data: vendorProducts, isLoading: isLoading } = useGetProductsQuery(
		{
			userId: vendorId,
			limit: 4,
		},
		{ skip: !vendorId }
	);

	console.log(vendorProducts);

	return isLoading ? (
		<Loader />
	) : (
		<div className="space-y-4">
			<FeatureCard features={features} />

			{vendorProducts ? (
				<div className="flex flex-col gap-6">
					<VanderCard
						vendorId={vendorId}
						totalProducts={vendorProducts?.doc?.results}
					/>
					<MoreStoreProducts vendorId={vendorId} products={vendorProducts} />
				</div>
			) : null}
		</div>
	);
};

export default VendorRightBar;
