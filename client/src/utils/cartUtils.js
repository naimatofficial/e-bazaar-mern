export const addDecimals = (num) => {
	return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
	// Calculate the items price
	state.subTotal = addDecimals(
		state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);

	state.totalDiscount = addDecimals(
		state.cartItems.reduce((acc, item) => acc + item.discount * item.qty, 0)
	);

	state.totalQty = state.cartItems.reduce((acc, item) => acc + item.qty, 0);

	// Calculate the shipping price
	state.totalShippingPrice = addDecimals(
		state.cartItems.reduce(
			(acc, item) => acc + (item.shippingCost * item.qty || 0),
			0
		)
	);

	console.log(state.cartItems);

	// Calculate the tax price
	state.taxPrice = addDecimals(
		state.cartItems.reduce((acc, item) => acc + item.taxAmount, 0)
	);

	// Calculate the total price
	state.totalPrice = (
		Number(state.subTotal) +
		Number(state.totalShippingPrice) +
		Number(state.taxPrice) -
		Number(state.totalDiscount)
	).toFixed(2);

	// Save the cart to localStorage
	localStorage.setItem("cart", JSON.stringify(state));

	return state;
};
