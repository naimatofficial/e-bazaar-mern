import CartList from "./CartList";
import { useSelector } from "react-redux";
import EmptyCart from "../../assets/empty-cart.png";

const ShoppingCart = () => {
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<div className="p-4 w-full bg-white shadow-md rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

			{cartItems && cartItems.length ? (
				<CartList cartItems={cartItems} />
			) : (
				<div className="flex flex-col justify-between items-center gap-4">
					<img
						src={EmptyCart}
						alt="empty cart"
						className="w-full h-80 object-contain"
					/>
					<p className="text-lg text-gray-800 font-semibold">
						Your Cart Is Empty!
					</p>
				</div>
			)}
		</div>
	);
};

export default ShoppingCart;
