/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

const CartList = ({ cartItems }) => {
	return (
		<div className="p-2 flex flex-col justify-center gap-2">
			{cartItems.map((item) => (
				<CartItem key={item._id} item={item} />
			))}
		</div>
	);
};

export default CartList;
