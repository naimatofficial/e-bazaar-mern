/* eslint-disable react/prop-types */
import {
	MdAddShoppingCart,
	MdOutlineCelebration,
	MdRemoveShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartViewItem from "./CartViewItem";
import { IoIosArrowForward } from "react-icons/io";

const CartView = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<>
			<div>
				<div className="flex flex-row w-96 items-center shadow-sm bg-primary-100 p-4 m-3 rounded-lg">
					<div className="flex items-center justify-center">
						<MdAddShoppingCart className="h-6 w-6 text-gray-800" />
					</div>
					{/* <CartList /> */}
					<h3 className=" ml-3 text-center text-gray-800">Shopping Cart</h3>
				</div>
				<div>
					{cart && cart?.totalQty > 0 ? (
						<>
							<h2 className="text-base text-primary-400 flex justify-center items-center gap-2 text-center font-semibold mb-2">
								<MdOutlineCelebration className="w-6 h-6" />
								<span>You have Saved ${cart?.totalDiscount}!</span>
							</h2>
							<div
								className={`flex flex-col justify-between  ${
									cart?.totalQty > 3
										? "overflow-y-scroll h-64 custom-scrollbar"
										: "overflow-y-hidden"
								}`}
							>
								{cart?.cartItems.map((item) => (
									<CartViewItem key={item._id} item={item} />
								))}
							</div>

							{/* <div className="text-blue-600 mb-4">
								${remainingForFreeDelivery.toFixed(2)} Add more for free
								delivery
							</div> */}
							<div className="flex justify-between items-center mb-4 px-4">
								<div>
									<span className="font-semibold mr-2">Subtotal:</span>
									<span className="font-semibold text-lg text-primary-400">
										${cart?.totalPrice}
									</span>
								</div>
								<Link
									to="/cart"
									className="border flex justify-between items-center gap-2 border-gray-200 py-2 px-4"
								>
									Expand Cart
									<IoIosArrowForward />
								</Link>
							</div>
							<button className="w-full text-center btn primary-btn ">
								<Link to="/checkout-details">Proceed To Checkout</Link>
							</button>
						</>
					) : (
						<div className="flex flex-col items-center justify-center mt-8">
							<MdRemoveShoppingCart className="h-16 w-16 text-gray-400" />
							<p className="text-gray-600 mt-4">Your cart is empty</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default CartView;
