import { FaPhoneAlt } from "react-icons/fa";
import CountryLanguageSelector from "./CountryLanguageSelector";

const Topbar = () => {
	return (
		<>
			<div className="flex justify-between items-center mx-auto max-w-screen-2xl   p-1">
				<div className="flex items-center gap-2">
					<FaPhoneAlt className="w-5 h-3 object-contain" />
					<span>+123-456-7890</span>
				</div>
				<div>
					<CountryLanguageSelector />
				</div>
			</div>
		</>
	);
};

export default Topbar;
