/* eslint-disable react/prop-types */
import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Quantity from "./subcomponent/Quantity";
import { useNavigate } from "react-router-dom";
import WishListIcon from "./subcomponent/WishListIcon";

const Product = ({ product }) => {
	const [mainImage, setMainImage] = useState(product?.thumbnail);
	const [qty, setQty] = useState(1);

	const productImages = product ? [...product.images, product?.thumbnail] : [];
	const oldPrice = product?.price + product?.discount;

	const { cartItems } = useSelector((state) => state.cart);

	const isProductAddToCart = cartItems?.find(
		(item) => item._id === product?._id
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addToCartHandler = () => {
		if (qty >= product.minimumOrderQty) {
			dispatch(addToCart({ ...product, qty }));
			toast.success("Item added successfully");
		} else
			toast.error(
				`The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
			);
	};

	const buyNowHandler = () => {
		if (qty >= product.minimumOrderQty) {
			dispatch(addToCart({ ...product, qty }));
			navigate("/checkout-details");
			toast.success("Item added successfully");
		} else
			toast.error(
				`The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
			);
	};

	return (
		<div className="flex flex-col w-full p-4 bg-white rounded-lg">
			<div className="flex flex-col md:flex-row gap-10">
				<div className="lg:w-1/2 w-full">
					<div className="shadow-md overflow-hidden">
						<img
							src={`http://localhost:3000/${mainImage}`}
							alt="Main product image"
							className="w-[30rem] h-[24rem]  object-contain p-2 transition-transform duration-300 ease-out"
						/>
					</div>
					<div className="flex justify-center mt-4 ">
						{productImages?.map((src, index) => (
							<img
								key={index}
								src={`http://localhost:3000/${src}`}
								alt={`Thumbnail ${index + 1}`}
								className="w-16 h-16 md:w-20 md:h-20 object-contain mr-2 border border-gray-100 rounded-md shadow-sm cursor-pointer"
								onClick={() => setMainImage(src)}
							/>
						))}
					</div>
				</div>
				<div className="w-full flex-grow flex flex-col gap-4">
					<h2 className="text-lg md:text-xl">{product.name}</h2>
					<div className="flex items-center mb-2">
						<Rating value={Number(4)} readonly />
						<span className="ml-2 text-gray-600">({0})</span>
						<div className="flex justify-between gap-2 items-center mx-2 text-xs md:text-sm">
							<p className="border-r-2 pr-2">4 Reviews</p>
							<p className="border-r-2 pr-2">6 Orders</p>
							<p>1 Wish Listed</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<p className="text-xl font-bold text-primary-400">
							${product.price.toFixed(2)}
						</p>
						{oldPrice > product.price && (
							<p className="text-sm font-semibold line-through text-gray-500">
								${oldPrice.toFixed(2)}
							</p>
						)}
					</div>
					<div className="flex items-center">
						{product.stock > 1 ? (
							<div>
								<div className="flex items-center gap-2 mb-2">
									<h3 className="text-gray-800 font-bold">Quantity:</h3>
									<Quantity qty={qty} setQty={setQty} product={product} />
									<span className="mx-2 px-1 text-sm">
										{product.stock} pieces left
									</span>
								</div>
								<p className="text-gray-700 text-sm">
									(Minimum Order Qrty: {product.minimumOrderQty})
								</p>
							</div>
						) : null}
					</div>
					<div className="flex items-center gap-2">
						<h3 className="text-gray-800 font-bold">Total Price:</h3>
						<p className="text-xl font-bold text-primary-400 transition-all duration-100 ease-in">
							${(product.price * qty).toFixed(2)}
						</p>
						<span className="mx-2 px-1 text-xs">(Tax : incl.)</span>
					</div>
					<div className="flex gap-3 w-full">
						<button
							onClick={buyNowHandler}
							className="btn bg-orange-500 hover:bg-orange-600 focus: text-white"
						>
							Buy now
						</button>
						<button onClick={addToCartHandler} className="btn primary-btn">
							{isProductAddToCart ? "Update Cart" : "Add to cart"}
						</button>
						<WishListIcon productId={product._id} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
