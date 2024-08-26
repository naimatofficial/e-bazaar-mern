/* eslint-disable react/prop-types */
import { FaTruck, FaShieldAlt, FaUndo, FaCheckCircle } from "react-icons/fa";
import { MdOutlineCelebration } from "react-icons/md";
import { Link } from "react-router-dom";

const CartSummary = ({ cart, handleNext, isLoading = false, step = 0 }) => {
	const btnDisable = cart?.totalQty === 0;

	return (
		<div className="lg:w-[600px] w-full">
			<div className="bg-white shadow-md rounded-lg p-2">
				{cart?.totalDiscount && (
					<h2 className="text-lg text-primary-400 flex justify-center items-center gap-2 text-center font-semibold mb-2">
						<MdOutlineCelebration className="w-6 h-6" />
						<span>You have Saved ${cart?.totalDiscount}!</span>
					</h2>
				)}

				<div className="px-6 py-2">
					<div className="mb-4">
						<div className="border-t border-gray-200 py-2  text-gray-800 font-semibold">
							<div className="flex justify-between py-1">
								<span>Sub total</span>
								<span>${cart?.subTotal || 0}</span>
							</div>
							<div className="flex justify-between py-1">
								<span>Tax</span>
								<span>${cart?.taxPrice || 0}</span>
							</div>
							<div className="flex justify-between py-1">
								<span>Shipping</span>
								<span>${cart?.totalShippingPrice || 0}</span>
							</div>
							<div className="flex justify-between py-1">
								<span>Discount on product</span>
								<span>-${cart?.totalDiscount || 0}</span>
							</div>
							<div className="flex justify-between py-2 border-t border-gray-200">
								<span className="text-primary-600">Total</span>
								<span>${cart?.totalPrice || 0}</span>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-4">
						<div className="flex flex-col items-center">
							<FaTruck className="text-2xl text-blue-500 mb-1" />
							<span className="text-xs">
								Fast Delivery all across the country
							</span>
						</div>
						<div className="flex flex-col items-center">
							<FaShieldAlt className="text-2xl text-primary-500 mb-1" />
							<span className="text-xs">Safe Payment</span>
						</div>
						<div className="flex flex-col items-center">
							<FaUndo className="text-2xl text-orange-500 mb-1" />
							<span className="text-xs">7 Days Return Policy</span>
						</div>
						<div className="flex flex-col items-center">
							<FaCheckCircle className="text-2xl text-indigo-500 mb-1" />
							<span className="text-xs">100% Authentic Products</span>
						</div>
					</div>
					<div className="flex justify-between flex-col items-center gap-2 ">
						<button
							onClick={handleNext}
							type="submit"
							disabled={btnDisable}
							className={`w-full text-center outline-none text-white rounded-lg shadow py-2 px-4 transition duration-300 ${
								btnDisable
									? "bg-primary-300 "
									: "bg-primary-500 hover:bg-primary-400"
							}`}
						>
							{isLoading
								? "Loading..."
								: step === 1
								? "Place Order"
								: "Proceed to Checkout"}
						</button>

						<Link
							to="/products"
							className=" text-primary-400 py-1 transition duration-300"
						>
							&lt; Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartSummary;
