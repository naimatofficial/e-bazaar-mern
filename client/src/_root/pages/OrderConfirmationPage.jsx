import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const OrderConfirmationPage = () => {
	const { orderId } = useParams();
	return (
		<div className="max-w-6xl mx-auto p-8 text-center">
			<div className="flex justify-center mb-4">
				<FaCheckCircle className="text-green-500 text-5xl" />
			</div>
			<h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
			<p className="text-gray-700 mb-6">
				Your payment has been successfully processed and your order -{" "}
				<span className="font-semibold">{orderId}</span> has been placed.
			</p>
			<div className="flex flex-col justify-center items-center gap-4">
				<Link to="/profile/my-orders" className="btn primary-btn">
					Track Order
				</Link>
				<Link to="/" className="flex gap-2 text-primary-600 hover:underline">
					<FaArrowLeft />
					<span> Continue Shopping</span>
				</Link>
			</div>
		</div>
	);
};

export default OrderConfirmationPage;
