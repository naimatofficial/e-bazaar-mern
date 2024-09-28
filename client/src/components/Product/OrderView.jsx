import React, { useEffect } from 'react';
import { useGetOrderDetailsQuery } from '../../redux/slices/ordersApiSlice';
import { useParams } from 'react-router-dom';

const OrderView = () => {
    // Get the order ID from the URL parameters
    const { id } = useParams();

    // Use the query to fetch order details with the order ID
    const { data: orderDetails, error, isLoading } = useGetOrderDetailsQuery(id);

    // Log the order ID
    console.log('Order ID:', id);

    // Log the loading state
    useEffect(() => {
        if (isLoading) {
            console.log('Loading order details...');
        }
    }, [isLoading]);

    // Log error if it occurs
    useEffect(() => {
        if (error) {
            console.error('Error loading order details:', error);
        }
    }, [error]);

    // Log order details when successfully fetched
    useEffect(() => {
        if (orderDetails) {
            console.log('Order details fetched successfully:', orderDetails);
        }
    }, [orderDetails]);

    // Handle loading state
    if (isLoading) {
        return <div className="text-center py-4">Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div className="text-red-600">Error loading order details: {error.message}</div>;
    }

    // Destructure order details for easier access
    const { doc } = orderDetails;

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-xl font-semibold mb-2">Customer Details</h2>
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Field</th>
                        <th className="border border-gray-300 p-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Name</td>
                        <td className="border border-gray-300 p-2">{doc.shippingAddress.name}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Phone</td>
                        <td className="border border-gray-300 p-2">{doc.shippingAddress.phoneNumber}</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Field</th>
                        <th className="border border-gray-300 p-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Address</td>
                        <td className="border border-gray-300 p-2">{doc.shippingAddress.address}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">City</td>
                        <td className="border border-gray-300 p-2">{doc.shippingAddress.city}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">State</td>
                        <td className="border border-gray-300 p-2">{doc.shippingAddress.state}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Zip Code</td>
                        <td className="border border-gray-300 p-2">{doc.shippingAddress.zipCode}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Country</td>
                        <td className="border border-gray-300 p-2">{doc.shippingAddress.country}</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-2">Billing Address</h2>
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Field</th>
                        <th className="border border-gray-300 p-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Name</td>
                        <td className="border border-gray-300 p-2">{doc.billingAddress.name}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Address</td>
                        <td className="border border-gray-300 p-2">{doc.billingAddress.address}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">City</td>
                        <td className="border border-gray-300 p-2">{doc.billingAddress.city}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">State</td>
                        <td className="border border-gray-300 p-2">{doc.billingAddress.state}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Zip Code</td>
                        <td className="border border-gray-300 p-2">{doc.billingAddress.zipCode}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Country</td>
                        <td className="border border-gray-300 p-2">{doc.billingAddress.country}</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-2">Order Information</h2>
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Field</th>
                        <th className="border border-gray-300 p-2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Order Status</td>
                        <td className="border border-gray-300 p-2">{doc.orderStatus}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Total Amount</td>
                        <td className="border border-gray-300 p-2">${doc.totalAmount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Payment Method</td>
                        <td className="border border-gray-300 p-2">{doc.paymentMethod}</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Product Name</th>
                        <th className="border border-gray-300 p-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {doc.products.map((product) => (
                        <tr key={product._id}>
                            <td className="border border-gray-300 p-2">{product.name}</td>
                            <td className="border border-gray-300 p-2">${product.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-xl font-semibold mb-2">Vendors</h2>
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Vendor Name</th>
                    </tr>
                </thead>
                <tbody>
                    {doc.vendors.map((vendor) => (
                        <tr key={vendor._id}>
                            <td className="border border-gray-300 p-2">{vendor.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderView;
