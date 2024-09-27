import { useGetMyOrdersQuery } from '../../redux/slices/ordersApiSlice';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import { IoEyeSharp } from "react-icons/io5";

const MyOrders = () => {
    const { user } = useSelector((state) => state.auth.userInfo);

    const { data: orders, isLoading } = useGetMyOrdersQuery(user._id, {
        skip: !user._id,
    });

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        return new Date(dateString).toLocaleString('en-US', options);
    };

    return isLoading ? (
        <Loader />
    ) : orders ? (
        <div className="rounded-lg p-8 bg-white">
            <h1 className="text-xl font-bold mb-5">My Orders</h1>
            {orders?.doc && orders?.doc?.length ? (
                <div className=" overflow-auto rounded-lg shadow-lg">
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider rounded-tl-lg">
                                    Order Id
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Order Date
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 text-center  bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Total
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 rounded-tr-lg ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.doc.map((order) => (
                                <tr key={order._id} className="border-b border-gray-200">
                                    <td className="px-5 py-5 bg-white text-sm border border-gray-200 rounded-l-lg">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {order._id}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm border border-gray-200">
                                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 opacity-50 rounded-full"
                                            ></span>
                                            <span className="relative">
                                                {formatDate(order.createdAt)}
                                            </span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm border border-gray-200">
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
                                    <td className="px-5 py-5 bg-white text-sm border border-gray-200">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            ${order.totalAmount ? order.totalAmount.toFixed(2) : '0.00'}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm flex justify-center items-center">
                                        <p className="text-blue-600 hover:text-blue-900 border-none cursor-pointer">
                                            <IoEyeSharp />
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Customer has not placed any orders yet!</p>
            )}
        </div>
    ) : (
        <p>Something went wrong.</p>
    );
};

export default MyOrders;
