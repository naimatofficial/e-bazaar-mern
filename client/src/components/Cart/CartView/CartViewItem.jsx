/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/slices/cartSlice'
import { FaTrash } from 'react-icons/fa'

const CartViewItem = ({ item }) => {
    const dispatch = useDispatch()

    console.log(item)

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div
            key={item._id}
            className="flex items-center bg-gray-50 justify-around border-b p-2"
        >
            <img
                src={
                    item?.thumbnail
                        ? `http://localhost:3000/${item.thumbnail}`
                        : 'https://www.proclinic-products.com/build/static/default-product.30484205.png'
                }
                alt={item.name}
                className="w-16 h-16 object-contain mr-4"
            />
            <div className="flex-grow">
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-700">${item?.price?.toFixed(2)}</div>
            </div>
            <div className="flex flex-col justify-between gap-4">
                {/* <div className="flex flex-col items-center gap-1 justify-between">
                    <button
                        onClick={decreaseQty}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                    >
                        <FaMinus className="text-sm" />
                    </button>
                    <div className="p-1 w-8 h-8 object-contain text-center flex items-center justify-center bg-blue-50 rounded-full">
                        <span>{qty}</span>
                    </div>

                    <button
                        onClick={increaseQty}
                        className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                    >
                        <FaPlus className="text-sm" />
                    </button>
                </div> */}
                <p>
                    qty: <span>{item.qty}</span>
                </p>
                <button
                    onClick={() => removeFromCartHandler(item._id)}
                    className="text-inherit cursor-pointer"
                >
                    <FaTrash className="text-sm text-red-300 ml-2 hover:text-red-400" />
                </button>
            </div>
        </div>
    )
}

export default CartViewItem
