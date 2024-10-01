export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}
export const updateCart = (state) => {
    // Calculate the items price
    state.subTotal = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    // Handle the discount calculation with a fallback to 0
    state.totalDiscount = addDecimals(
        state.cartItems.reduce(
            (acc, item) => acc + (item.discountAmount || 0) * item.qty,
            0
        )
    )

    state.totalQty = state.cartItems.reduce((acc, item) => acc + item.qty, 0)

    // Calculate the shipping price with a fallback to 0
    state.totalShippingPrice = addDecimals(
        state.cartItems.reduce(
            (acc, item) => acc + (item.shippingCost * item.qty || 0),
            0
        )
    )

    // Calculate the tax price
    state.taxPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.taxAmount, 0)
    )

    // Calculate the total price
    state.totalPrice = (
        Number(state.subTotal) +
        Number(state.totalShippingPrice) +
        Number(state.taxPrice) -
        Number(state.totalDiscount)
    ).toFixed(2)

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(state))

    return state
}
