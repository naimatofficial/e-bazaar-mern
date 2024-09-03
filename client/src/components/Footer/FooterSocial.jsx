import {
	FaTwitter,
	FaLinkedin,
	FaGoogle,
	FaPinterestP,
	FaInstagram,
	FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: <FaTwitter className="w-4 h-4 text-white hover:text-blue-400" />, url: "#" },
  { icon: <FaLinkedin className="w-4 h-4 text-white hover:text-blue-700" />, url: "#" },
  { icon: <FaGoogle className="w-4 h-4 text-white hover:text-red-500" />, url: "#" },
  { icon: <FaPinterestP className="w-4 h-4 text-white hover:text-red-600" />, url: "#" },
  { icon: <FaInstagram className="w-4 h-4 text-white hover:text-pink-500" />, url: "#" },
  { icon: <FaFacebookF className="w-4 h-4 text-white hover:text-blue-600" />, url: "#" },
];


const FooterSocial = () => {
	return (
		<div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-around  p-2 bg-primary-700">
			<div>
				<h2 className="text-sm text-white">Copyright LightHouse@2021</h2>
			</div>
			<div className="flex space-x-4 my-4 md:my-0">
				{socialIcons.map((social, index) => (
					<div key={index} className="bg-primary-600 rounded-full hover:bg-white">
						<Link to={social.url} className="block p-2">
							{social.icon}
						</Link>
					</div>
				))}
			</div>
			<div className="text-white">
				<Link to="">
					Terms & Conditions
				</Link>
				<Link to="">
					Privacy Policy
				</Link>
			</div>
		</div>
	);
};

export default FooterSocial;
