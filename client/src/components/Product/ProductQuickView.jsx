/* eslint-disable react/prop-types */
import { Rating } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Quantity from "./subcomponent/Quantity";
import { FaXmark } from "react-icons/fa6";
import Loader from "../Loader";
import { useGetProductDetailsQuery } from "../../redux/slices/productsApiSlice";
import { toast } from "react-toastify";
import WishListIcon from "./subcomponent/WishListIcon";

const ProductQuickView = ({ productId, onClose }) => {
	const { data: product, isLoading } = useGetProductDetailsQuery(productId, {
		skip: !productId,
	});

	const [mainImage, setMainImage] = useState("");
	const [qty, setQty] = useState(1);
	const [minimumOrderError, setMinimumOrderError] = useState(false);
	// const [shopClosed, setShopClosed] = useState(false)

	const productImages = product?.doc
		? [product?.doc?.thumbnail, ...product?.doc?.images]
		: [];

	console.log(productImages);
	const oldPrice = product?.doc?.price + product?.doc?.discount;

	useEffect(() => {
		if (product && product?.doc?.thumbnail) {
			setMainImage(product?.doc?.thumbnail);
		}
	}, [product]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { cartItems } = useSelector((state) => state.cart);

	const isProductAddToCart = cartItems?.find(
		(item) => item._id === product?.doc?._id
	);

	const addToCartHandler = () => {
		if (qty >= product.doc.minimumOrderQty) {
			dispatch(addToCart({ ...product, qty }));
			onClose();
			toast.success("Item added successfully");
		} else setMinimumOrderError(true);
	};

	if (minimumOrderError) {
		setTimeout(() => {
			setMinimumOrderError(false);
		}, 3000);
	}

	const buyNowHandler = () => {
		console.log("qty: " + qty);
		if (qty >= product.doc.minimumOrderQty) {
			dispatch(addToCart({ ...product, qty }));
			onClose();
			navigate("/checkout-details");
		} else setMinimumOrderError(true);
	};

	return isLoading ? (
		<div className="z-50">
			<Loader />
		</div>
	) : product && product?.doc ? (
		<div className="flex flex-col border shadow-lg bg-white rounded-lg">
			<div className="flex justify-between items-center p-4 border-b">
				<Link to={`/products/${product.doc._id}`}>
					<h2 className="text-xl font-semibold">{product.doc.name}</h2>
				</Link>
				<button onClick={onClose} className="text-gray-500 text-xlg">
					<FaXmark />
				</button>
			</div>
			<div className="flex lg:flex-row flex-col items-start gap-4 p-4">
				<div className="w-1/2 flex flex-col">
					<div className="w-full h-80 overflow-hidden shadow-sm">
						<img
							src={`http://localhost:3000/${mainImage}`}
							alt={product.doc.name}
							className="w-full lg:h-96 md:h-80 h-40 object-contain py-2 transition-all duration-300 ease-out"
						/>
					</div>
					<div className="flex justify-center mt-4">
						{productImages?.map((src, index) => (
							<img
								key={index}
								src={`http://localhost:3000/${src}`}
								alt={`Thumbnail ${index + 1}`}
								className="w-20 lg:h-20 h-10 object-cover mr-2 border border-gray-100 rounded-md cursor-pointer"
								onClick={() => setMainImage(src)}
							/>
						))}
					</div>
				</div>
				<div className="w-1/2 flex flex-col gap-4 mb-4">
					<h2 className="text-2xl">{product.doc.name}</h2>
					<div className="flex items-center mb-2">
						<Rating value={Number(4)} readonly />
						<span className="ml-2 text-gray-600">({10})</span>
						<div className="flex justify-between gap-2 items-center mx-2">
							<p className="border-r-2 pr-2">4 Reviews </p>
							<p className="border-r-2 pr-2">6 Orders</p>
							<p>1 Wish Listed</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<p className="text-lg font-bold text-primary-400">
							${product.doc.price.toFixed(2)}
						</p>
						{oldPrice > product.doc.price && (
							<p className="text-sm font-semibold line-through text-gray-500">
								${oldPrice.toFixed(2)}
							</p>
						)}
					</div>
					<div className="">
						{product.doc.stock > 1 ? (
							<div>
								<div className="flex items-center gap-2 mb-2">
									<h3 className="text-gray-800 font-bold">Quantity:</h3>
									<Quantity qty={qty} setQty={setQty} product={product} />
									<span className="mx-2 px-1 text-sm">
										{product.doc.stock} pieces left
									</span>
								</div>
								<p className="text-gray-700 text-sm">
									(Minimum Order Qrty: {product.doc.minimumOrderQty})
								</p>
							</div>
						) : null}
						{minimumOrderError && (
							<p className="bg-red-50 border border-red-500 rounded-lg text-red-500 py-2 px-4 text-base transition-all ease-in-out duration-300">
								{`The min. order for this item is ${product.doc.minimumOrderQty} 
								piece. Adjust quantity to continue.`}
							</p>
						)}
					</div>
					<div className="flex items-center gap-2">
						<h3 className="text-gray-800 font-bold">Total Price:</h3>
						<p>${(product.doc.price * qty).toFixed(2)}</p>
						<span className="mx-2 px-1 text-xs">(Tax : incl.)</span>
					</div>
					<div className="flex gap-3 w-3/4">
						<button
							onClick={buyNowHandler}
							className="w-full btn bg-orange-500 hover:bg-orange-600 transition-all ease-in text-white py-2 px-4"
						>
							Buy now
						</button>
						<button
							onClick={addToCartHandler}
							className="w-full btn primary-btn"
						>
							{isProductAddToCart ? "Update Cart" : "Add to cart"}
						</button>
						<WishListIcon productId={product.doc._id} onClose={onClose} />
					</div>
				</div>
			</div>
		</div>
	) : (
		<p>Product details not found!</p>
	);
};

export default ProductQuickView;
