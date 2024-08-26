/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Quantity = ({ product, qty, setQty }) => {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (location.pathname === "/cart") {
			dispatch(addToCart({ ...product, qty }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, qty]);

	const increaseQty = () => {
		if (qty < product.stock) {
			setQty(qty + 1);
		}
	};

	const decreaseQty = () => {
		if (qty > product.minimumOrderQty) {
			setQty(qty - 1);
		} else
			toast.error(
				`Min. order for this item is ${product.minimumOrderQty} piece.`
			);
	};

	return (
		<div className="flex items-center justify-between">
			<button
				onClick={decreaseQty}
				className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
			>
				<FaMinus className="text-sm" />
			</button>
			<input
				type="number"
				value={qty}
				readOnly
				className="py-1 px-2 w-12 text-center bg-blue-50 rounded mx-2 focus:outline-none"
			/>
			<button
				onClick={increaseQty}
				className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
			>
				<FaPlus className="text-sm" />
			</button>
		</div>
	);
};

export default Quantity;
