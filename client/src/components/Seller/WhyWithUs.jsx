import img from "../../assets/vendor/sell-with-us.png";
const features = [
	{
		title: "Easy Onboarding",
		description:
			"Start selling quickly with our user-friendly onboarding process designed to get you up and running fast.",
	},
	{
		title: "24/7 Support",
		description:
			"Get round-the-clock support from our dedicated team to resolve any issues and assist you anytime.",
	},
	{
		title: "SEO Friendly",
		description:
			"Enjoy enhanced search visibility with our SEO-friendly platform, driving more traffic to your listings.",
	},
	{
		title: "Free Marketing",
		description:
			"Benefit from our extensive, no-cost marketing efforts to boost your visibility and sales.",
	},
	{
		title: "Millions of Users",
		description:
			"Access a vast audience with millions of active users ready to buy your products.",
	},
];

const WhySellWithUs = () => {
	return (
		<div className="py-16 bg-gray-50">
			<div className=" w-full flex flex-col justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 p-4 lg:w-1/2 w-full">
					<h2 className="text-4xl  text-gray-900">Why Sell With Us</h2>
					<p className="mt-4 text-lg text-gray-800 p-4">
						Boost your sales! Join us for a seamless, profitable experience with
						vast buyer reach and top-notch support. Sell smarter today!
					</p>
				</div>
				<div className="flex justify-center mb-12">
					<img
						src={img}
						alt="Why Sell With Us"
						className="w-80 max-w-md mx-auto"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
					{features.map((feature, index) => (
						<div key={index} className="text-center p-6 ">
							<h3 className="text-sm  text-gray-900 mb-4">{feature.title}</h3>
							<p className="text-gray-500 text-center">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhySellWithUs;
