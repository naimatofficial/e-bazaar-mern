/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import FlatCard from "../../shared/FlatCard";

const MoreStoreProducts = ({ vendorId, products }) => {
	return products && products?.doc && products.doc.length ? (
		<div className="p-2 w-full bg-white rounded-lg shadow-sm">
			<h2 className="text-xl font-semibold mb-4">More From The Store</h2>
			<div className="flex flex-col gap-2 w-full md:w-fit justify-center items-center">
				{products?.doc?.map((product, index) => (
					<FlatCard key={index} {...product} />
				))}
				<Link
					to={`/shop-view/${vendorId}`}
					className="text-center p-4 text-primary-400 hover:underline"
				>
					View more
				</Link>
			</div>
		</div>
	) : null;
};

export default MoreStoreProducts;
