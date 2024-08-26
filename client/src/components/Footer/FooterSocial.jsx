import {
	FaTwitter,
	FaLinkedin,
	FaGoogle,
	FaPinterestP,
	FaInstagram,
	FaFacebookF,
} from "react-icons/fa";

const socialIcons = [
	{ icon: <FaTwitter className="w-6 h-6 hover:text-white" />, url: "#" },
	{ icon: <FaLinkedin className="w-6 h-6 hover:text-white" />, url: "#" },
	{ icon: <FaGoogle className="w-6 h-6 hover:text-white" />, url: "#" },
	{ icon: <FaPinterestP className="w-6 h-6 hover:text-white" />, url: "#" },
	{ icon: <FaInstagram className="w-6 h-6 hover:text-white" />, url: "#" },
	{ icon: <FaFacebookF className="w-6 h-6 hover:text-white" />, url: "#" },
];

const FooterSocial = () => {
	return (
		<div className="flex space-x-4 my-4 md:my-0">
			{socialIcons.map((social, index) => (
				<div key={index} className="bg-green-100 rounded-full">
					<a href={social.url} className="block p-2">
						{social.icon}
					</a>
				</div>
			))}
		</div>
	);
};

export default FooterSocial;
