import { useGetMyOrdersQuery } from '../../redux/slices/ordersApiSlice'
import { useSelector } from 'react-redux'
import Loader from '../Loader'
import { IoEyeSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const MyOrders = () => {
    const { user } = useSelector((state) => state.auth.userInfo)

    const { data: orders, isLoading } = useGetMyOrdersQuery(user._id, {
        skip: !user._id,
    })

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }
        return new Date(dateString).toLocaleString('en-US', options)
    }

    return isLoading ? (
        <Loader />
    ) : orders ? (
        <div className="rounded-lg p-4 md:p-8 bg-white">
            <h1 className="text-sm md:text-lg lg:text-xl font-bold mb-4">
                My Orders
            </h1>
            {orders?.doc && orders?.doc?.length ? (
                <div className="rounded-lg shadow-lg">
                    <table className="min-w-full border border-gray-200 table-auto">
                        <thead>
                            <tr>
                                <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-tl-lg">
                                    Order Id
                                </th>
                                <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Order Date
                                </th>
                                <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-center text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Total
                                </th>
                                <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 rounded-tr-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.doc.map((order) => (
                                <tr
                                    key={order._id}
                                    className="border-b border-gray-200 text-left sm:text-left"
                                >
                                    <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200 rounded-l-lg">
                                        <div className="flex items-center">
                                            <div className="ml-2">
                                                <p className="text-gray-900 whitespace-no-wrap text-xs md:text-sm">
                                                    {order._id}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200">
                                        <span className="relative inline-block font-semibold leading-tight text-xs md:text-sm">
                                            <span className="relative">
                                                {formatDate(order.createdAt)}
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200">
                                        <span className="relative inline-block font-semibold text-green-900 leading-tight text-xs md:text-sm">
                                            <span className="relative">
                                                {order.orderStatus}
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap text-xs md:text-sm">
                                            $
                                            {order.totalAmount
                                                ? order.totalAmount.toFixed(2)
                                                : '0.00'}
                                        </p>
                                    </td>
                                    <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm flex justify-center items-center">
                                        <Link
                                            to={`/profile/order-view/${order._id}`}
                                            className="text-blue-600 hover:text-blue-900 border-none cursor-pointer"
                                        >
                                            <IoEyeSharp />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No orders found!</p>
            )}
        </div>
    ) : (
        <p>Something went wrong.</p>
    )
}

export default MyOrders
