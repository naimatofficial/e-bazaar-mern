import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishItem = ({ product }) => {
	const oldPrice = product?.price + product?.discount || 0;

	return (
		<div>
			<div className="w-full bg-white border border-primary-100 rounded-lg overflow-hidden flex justify-between items-center mx-2 px-2">
				<div className="relative flex gap-2 rounded-lg overflow-hidden group cursor-pointer z-10">
					{product.discount > 0 && (
						<div className="discount-badge">
							-${product.discount?.toFixed(2)}
						</div>
					)}
					<Link to={`/products/${product._id}`}>
						<img
							src={`http://localhost:3000/${product.thumbnail}`}
							alt={product.name}
							className="product__img h-32"
						/>
					</Link>
					<div className="p-4 w-44">
						<Link to={`/products/${product._id}`}>
							<p className="font-medium truncate mb-2 group:hover:text-primary-400">
								{product.name}
							</p>
						</Link>
						<div className="flex items-center gap-2">
							{oldPrice > product.price && (
								<p className="text-sm line-through text-gray-500">
									${oldPrice.toFixed(2)}
								</p>
							)}
							<p className="text-lg font-bold">${product.price.toFixed(2)}</p>
						</div>
					</div>
				</div>

				<button className="">
					<FaHeart className="mr-2 w-6 h-6 text-primary-400 hover:text-primary-500 transition-all duration-100 ease-in" />
				</button>
			</div>
		</div>
	);
};

export default WishItem;
