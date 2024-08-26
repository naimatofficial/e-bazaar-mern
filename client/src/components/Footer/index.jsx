import AppStore from "../../assets/socials-icons/apple_app.png";
import GoogleApp from "../../assets/socials-icons/google_app.png";
import Logo from "../../assets/app-logo/app-logo-background.jpg";

import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import { FaLocationPin } from "react-icons/fa6";

const footerSections = [
	{
		title: "SPECIAL",
		links: [
			{ name: "Flash Deal", url: "#" },
			{ name: "Featured Products", url: "#" },
			{ name: "Latest Products", url: "#" },
			{ name: "Best Selling Products", url: "#" },
			{ name: "Top Rated Products", url: "#" },
		],
	},
	{
		title: "ACCOUNT & SHIPPING INFO",
		links: [
			{ name: "Profile Info", url: "#" },
			{ name: "Wish List", url: "#" },
			{ name: "Track Order", url: "#" },
			{ name: "Refund Policy", url: "#" },
			{ name: "Return Policy", url: "#" },
			{ name: "Cancellation Policy", url: "#" },
		],
	},
	{
		title: "NEWSLETTER",
		content: (
			<>
				<p className="mb-4">
					Subscribe to our new channel to get latest updates
				</p>
				<div className="relative flex items-center">
					<input
						type="email"
						placeholder="Your Email Address"
						className="pl-4 pr-20 py-2 rounded text-black w-full bg-white opacity-50"
					/>
					<button
						className="absolute right-2 p-2 bg-white rounded text-black font-bold hover:bg-primary-700"
						style={{ top: "2px", bottom: "2px" }}
					>
						Subscribe
					</button>
				</div>
			</>
		),
	},
];

const Footer = () => {
	return (
		<>
			<footer className="bg-primary-700 text-white px-6 py-6">
				<div className="container  w-full flex flex-col it lg:flex-row md:flex-row gap-4">
					<div className="flex flex-col items-center lg:items-start gap-2">
						<img src={Logo} alt="logo" className="w-44 h-28 object-contain " />
						<h4 className=" text-lg mb-2">DOWNLOAD OUR APP</h4>
						<div className="flex gap-2">
							<Link to="/">
								<img src={GoogleApp} alt="App Store" className="w-36" />
							</Link>
							<Link to="/">
								<img src={AppStore} alt="Google Play" className="w-36" />
							</Link>
						</div>
					</div>
					<div className="w-full">
						<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
							{footerSections.map((section, index) => (
								<div
									className={`flex w-full g ${
										section.title === "NEWSLETTER"
											? "order-1 md:order-3 text-center"
											: "order-2 md:order-1 "
									}`}
									key={index}
								>
									<FooterSection
										title={section.title}
										links={section.links}
										content={section.content}
									/>
								</div>
							))}
						</div>
						<div className="container  flex flex-col lg:flex-row justify-between items-start pt-6">
							<FooterContact />
							<div className="md:mt-0 w-full md:w-auto">
								<div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
									<h4 className="text-sm md:mb-0">Address</h4>
									<hr className="w-full md:w-[70%] self-center my-2 md:my-0" />
								</div>
								<div className="flex items-center mt-2 md:mt-0">
									<span className="mr-2">
										<FaLocationPin className="w-4 h-4 object-contain" />
									</span>
									<span>Kingston, New York 12401 United States</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="bg-primary-400   flex flex-col md:flex-row justify-between items-center p-4">
				<div className="text-center md:text-left">
					<p className="text-white">Copyright © EcommerBazzar@2024</p>
				</div>
				<FooterSocial className="" />
				<div className="text-center md:text-right">
					<Link to="#" className="mr-4 hover:underline text-white">
						Terms & Conditions
					</Link>
					<Link to="#" className="hover:underline text-white">
						Privacy Policy
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
