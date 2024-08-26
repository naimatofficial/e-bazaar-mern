import delivery from "./../../assets/services/delivery.png";
import authenticProduct from "./../../assets/services/authentic_product.png";
import returnPolicy from "./../../assets/services/return_policy.png";
import safePayment from "./../../assets/services/safe_payment.png";

const services = [
	{ name: "Fast Delivery all across the country", img: delivery },
	{ name: "100% Authentic Products", img: authenticProduct },
	{ name: "7 Days Return Policy", img: returnPolicy },
	{ name: "Safe Payment", img: safePayment },
];

const ServicesList = () => {
	return (
		<div className="flex justify-around items-center flex-wrap gap-4 my-10 bg-white shadow-sm p-4">
			{services?.map((item, index) => (
				<div
					key={index}
					className="flex  justify-center items-center flex-col w-44 gap-2 p-2"
				>
					<img
						src={item.img}
						alt={item.name}
						className="w-18 h-18 object-cover"
					/>
					<p className="text-base text-center text-gray-800">{item.name}</p>
				</div>
			))}
		</div>
	);
};

export default ServicesList;
