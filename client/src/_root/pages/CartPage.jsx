import { useSelector } from "react-redux";
import CartSummary from "../../components/Cart/CartSummery";
import ShoppingCart from "../../components/Cart/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();

	const handleNext = () => {
		cart?.cartItems?.length
			? navigate("/checkout-details")
			: toast.error("Please add items in the cart.");
	};

	return (
		<div>
			<div className="flex justify-between flex-col lg:flex-row gap-4 items-start w-full">
				<ShoppingCart />
				<CartSummary cart={cart} handleNext={handleNext} />
			</div>
		</div>
	);
};

export default CartPage;
