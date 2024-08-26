import step1 from "./../../assets/vendor/step1.png";
import step2 from "./../../assets/vendor/step2.png";
import step3 from "./../../assets/vendor/step3.png";

const steps = [
	{
		title: "Get Registered",
		description:
			"Sign up easily and create your seller account in just a few minutes. It's fast and simple to get started.",
		img: step1,
	},
	{
		title: "Upload Products",
		description:
			"List your products with detailed descriptions and high-quality images to attract more buyers effortlessly.",
		img: step2,
	},
	{
		title: "Start Selling",
		description:
			"Go live and start reaching millions of potential buyers immediately. Watch your sales grow with our vast audience.",
		img: step3,
	},
];

const SellingSteps = () => {
	return (
		<div className="flex flex-col bg-primary-600 rounded-lg text-white p-4 md:p-6 lg:p-8 items-center justify-center">
			<h2 className="text-3xl font-bold text-center mb-8">
				3 Easy Steps To Start Selling
			</h2>
			<p className="text-center mb-8 lg:w-1/2 w-full">
				Start selling quickly! Register, upload your products with detailed info
				and images, and reach millions of buyers instantly.
			</p>
			<div className="flex lg:flex-row flex-col lg:gap-20 md:gap-10 gap-6">
				{steps.map((step, index) => (
					<div key={index} className="w-72 text-center">
						<div className=" p-4  mb-4">
							<img src={step.img} alt={step.title} className="w-32 mx-auto" />
						</div>
						<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
						<p>{step.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SellingSteps;
