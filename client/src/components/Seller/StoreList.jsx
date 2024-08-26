/* eslint-disable react/prop-types */
import SellerCard from "./SellerCard";

const StoreList = ({ sellers }) => {
	return (
		<div className="w-full py-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-4">
			{sellers?.map((item, index) => (
				<SellerCard key={index} {...item} />
			))}
		</div>
	);
};

export default StoreList;
