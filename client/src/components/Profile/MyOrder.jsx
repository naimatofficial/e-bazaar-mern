import { FaEye, FaDownload } from "react-icons/fa";

const orders = [
	{
		id: "100177",
		image: "src/assets/order.png",
		items: 1,
		date: "10 Jan, 2023 02:52 AM",
		status: "Delivered",
		total: 570.0,
	},
	{
		id: "100148",
		image: "src/assets/order1.png",
		items: 1,
		date: "12 Oct, 2022 09:10 PM",
		status: "Delivered",
		total: 475.0,
	},
	{
		id: "100132",
		image: "src/assets/order.png",
		items: 1,
		date: "12 Oct, 2022 06:59 AM",
		status: "Delivered",
		total: 6290.0,
	},
	{
		id: "100128",
		image: "src/assets/order1.png",
		items: 1,
		date: "12 Oct, 2022 05:59 AM",
		status: "Delivered",
		total: 50000.0,
	},
	{
		id: "100126",
		image: "src/assets/order.png",
		items: 1,
		date: "12 Oct, 2022 05:55 AM",
		status: "Delivered",
		total: 648.0,
	},
	{
		id: "100125",
		image: "src/assets/order1.png",
		items: 1,
		date: "12 Oct, 2022 05:50 AM",
		status: "Delivered",
		total: 5000.0,
	},
	{
		id: "100124",
		image: "src/assets/order.png",
		items: 1,
		date: "12 Oct, 2022 05:45 AM",
		status: "Delivered",
		total: 500.0,
	},
	{
		id: "100123",
		image: "src/assets/order1.png",
		items: 1,
		date: "12 Oct, 2022 05:40 AM",
		status: "Delivered",
		total: 500.0,
	},
	{
		id: "100122",
		image: "src/assets/order.png",
		items: 1,
		date: "12 Oct, 2022 05:35 AM",
		status: "Delivered",
		total: 500.0,
	},
	{
		id: "100121",
		image: "src/assets/order1.png",
		items: 1,
		date: "12 Oct, 2022 05:30 AM",
		status: "Delivered",
		total: 500.0,
	},
	{
		id: "100120",
		image: "src/assets/order.png",
		items: 1,
		date: "12 Oct, 2022 05:25 AM",
		status: "Delivered",
		total: 500.0,
	},
	{
		id: "100119",
		image: "src/assets/order1.png",
		items: 1,
		date: "12 Oct, 2022 05:20 AM",
		status: "Delivered",
		total: 500.0,
	},
	{
		id: "100118",
		image: "src/assets/order.png",
		items: 1,
		date: "12 Oct, 2022 05:15 AM",
		status: "Delivered",
		total: 500.0,
	},
];

const MyOrder = () => {
	return (
		<div className="rounded-lg p-8 shadow-sm shadow-primary-100">
			<h1 className="text-xl font-bold mb-5">My Order</h1>
			<div className="bg-white overflow-hidden">
				<table className="min-w-full  rounded-tl-lg rounded-tr-lg">
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
						{orders.map((order) => (
							<tr key={order.id}>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex items-center">
										<div className="flex-shrink-0 w-10 h-10">
											<img
												className="w-full h-full rounded-full"
												src={order.image}
												alt={order.id}
											/>
										</div>
										<div className="ml-3">
											<p className="text-gray-900 whitespace-no-wrap">
												Order #{order.id}
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
										<span className="relative">{order.status}</span>
									</span>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										${order.total.toFixed(2)}
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<button className="text-blue-600 hover:text-blue-900">
										<FaEye />
									</button>
									<button className="text-green-600 hover:text-green-900 ml-3">
										<FaDownload />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrder;
