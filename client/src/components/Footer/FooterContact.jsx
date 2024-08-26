import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage, FaPerson } from "react-icons/fa6";

const FooterContact = () => {
	return (
		<div className="flex flex-col md:flex-col md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
			<div className="flex flex-col justify-between">
				<div className="flex flex-row justify-between items-center">
					<h4 className="text-lg mb-2">Start A Conversation</h4>
					<hr className="w-[70%] self-center" />
				</div>

				<div className="flex flex-row justify-between gap-4">
					<div className="flex items-center mb-2">
						<span className="mr-5 ml-5">
							<FaPhoneAlt className="w-4 h-4 object-contain" />
						</span>
						<span>+00xxxxxxxxxxxx</span>
					</div>
					<div className="flex items-center mb-2">
						<span className="mr-5 ml-5">
							<FaMessage className="w-4 h-4 object-contain" />
						</span>
						<span>c*********@6amtech.com</span>
					</div>
					<div className="flex items-center">
						<span className="mr-5 ml-5">
							<FaPerson className="w-4 h-4 object-contain" />
						</span>
						<a href="#" className="hover:underline">
							Support Ticket
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterContact;
