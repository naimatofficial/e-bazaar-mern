import PropTypes from "prop-types"; // Step 1: Import PropTypes
import AddressCard from "./subcomponenets/AddressCard";
import { useSelector } from "react-redux";

const MyAddress = () => {
	const { userInfo } = useSelector((state) => state.auth);

	const user = userInfo?.user;

	const { permanentAddress, officeShippingAddress, officeBillingAddress } =
		user;

	return (
		<div className="mx-auto rounded-lg p-8 shadow-sm shadow-primary-100">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">My Address</h2>
				<button className="bg-green-500 text-white py-2 px-4 rounded-md">
					Add Address
				</button>
			</div>
			<div className="h-[50vh] flex justify-center items-center p-4">
				{userInfo && user ? (
					<div className="p-2 w-1/2">
						<AddressCard
							address={permanentAddress}
							onEdit={() => console.log("Edit", address)}
							onDelete={() => console.log("Delete", address)}
						/>
					</div>
				) : (
					<h3 className="text-gray-800 text-center text-lg">
						No Address found!
					</h3>
				)}
			</div>
		</div>
	);
};

export default MyAddress;
