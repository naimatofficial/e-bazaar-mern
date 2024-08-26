import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const CountryPhoneInput = () => {
	const [phone, setPhone] = useState("");

	return (
		<div>
			<PhoneInput
				defaultCountry="pk"
				value={phone}
				onChange={(phone) => setPhone(phone)}
				className=" text-blue-500"
			/>
		</div>
	);
};

export default CountryPhoneInput;
