import { Link } from "react-router-dom";
import aboutCompany from "./../../assets/about-company.png";
import contactUs from "./../../assets/contact-us.png";
import faq from "./../../assets/faq.png";

const contacts = [
	{ name: "About Company", img: aboutCompany, link: "/about-us" },
	{ name: "Contact Us", img: contactUs, link: "/contact-us" },
	{ name: "FAQ", img: faq, link: "/faqs" },
];

const Contacts = () => {
	return (
		<div className="flex justify-around items-center flex-wrap bg-primary-100 p-4 w-full gap-4">
			{contacts?.map((item, index) => (
				<div key={index} className=" p-2">
					<Link to={item.link} className="flex-center flex-col gap-2">
						<img
							src={item.img}
							alt={item.name}
							className="w-18 h-18 object-contain"
						/>
						<p className="text-base text-gray-800 text-center">{item.name}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Contacts;
