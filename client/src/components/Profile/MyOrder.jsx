import { useGetMyOrdersQuery } from '../../redux/slices/ordersApiSlice'
import { useSelector } from 'react-redux'
import Loader from '../Loader'

const MyOrders = () => {
    const { user } = useSelector((state) => state.auth.userInfo)

    const { data: orders, isLoading } = useGetMyOrdersQuery(user._id, {
        skip: !user._id,
    })

    return isLoading ? (
        <Loader />
    ) : orders ? (
        <div className="rounded-lg p-8 shadow-sm shadow-primary-100">
            <h1 className="text-xl font-bold mb-5">My Orders</h1>
            {orders?.doc && orders?.doc?.length ? (
                <div className="bg-white overflow-hidden">
                    <table className="min-w-full rounded-tl-lg rounded-tr-lg">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Order
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Total
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.doc.map((order) => (
                                <tr key={order._id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {order._id}
                                                </p>
                                                <p className="text-gray-600 whitespace-no-wrap">
                                                    {order.date}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                            ></span>
                                            <span className="relative">
                                                {order.orderStatus}
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            $
                                            {order.totalAmount
                                                ? order.totalAmount.toFixed(2)
                                                : '0.00'}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button className="text-blue-600 hover:text-blue-900">
                                            View
                                        </button>
                                        <button className="text-green-600 hover:text-green-900 ml-3">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Customer has not order yet!</p>
            )}
        </div>
    ) : (
        <p>Something went wrong.</p>
    )
}

export default MyOrders
