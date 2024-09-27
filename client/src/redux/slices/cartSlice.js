/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from './../../utils/cartUtils'

let initialState = {}

if (typeof localStorage !== 'undefined') {
    initialState = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : {
              cartItems: [],
              totalQty: 0,
              shippingAddress: {},
              billingAddress: {},
              paymentMethod: '',
              vendors: [],
          }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { ...item } = action.payload
            const vendor = item.userId

            // Check if the item already exists in the cart
            const existItem = state.cartItems.find((x) => x._id === item._id)

            if (existItem) {
                // If item exists, update it
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x
                )
            } else {
                // Otherwise, add it as a new item
                state.cartItems = [...state.cartItems, item]
            }

            // Check if the vendor is already in the cart vendors
            const existVendor = state.vendors.find((x) => x === vendor)

            if (!existVendor) {
                // Add the vendor only if it doesn't exist
                state.vendors = [...state.vendors, vendor]
            }

            // Update the cart (total price, quantities, etc.)
            return updateCart(state)
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (x) => x._id !== action.payload
            )
            return updateCart(state)
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
            localStorage.setItem('cart', JSON.stringify(state))
        },
        saveBillingAddress: (state, action) => {
            state.billingAddress = action.payload
            localStorage.setItem('cart', JSON.stringify(state))
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
            localStorage.setItem('cart', JSON.stringify(state))
        },
        clearCartItems: (state, action) => {
            state.cartItems = []
            // localStorage.removeItem("cart");
            localStorage.setItem('cart', JSON.stringify(state))
        },
        // NOTE: here we need to reset state for when a user logs out so the next
        // user doesn't inherit the previous users cart and shipping
        resetCart: (state) => (state = initialState),
    },
})

export const {
    addToCart,
    removeFromCart,
    saveShippingAddress,
    saveBillingAddress,
    savePaymentMethod,
    clearCartItems,
    resetCart,
} = cartSlice.actions

export default cartSlice.reducer
