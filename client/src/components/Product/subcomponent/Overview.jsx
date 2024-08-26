const Overview = () => {
	const product = {
		description: "This is a demo Product Description:",
		details: [
			{
				question: "Who is this product for?",
				answer:
					"The target audience can be gender (i.e. male or female), an age group (i.e. college students or retirees), a lifestyle demographic (i.e. new mothers or car enthusiasts) or some other defined group of people.",
			},
			{
				question: "What are the product’s basic details?",
				answer:
					"This includes attributes such as dimensions, materials, product features, cost and functions.",
			},
			{
				question: "When should someone use the product?",
				answer:
					"Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round. These details will help speak to the product’s long-term value.",
			},
			{
				question: "Where should someone use the product?",
				answer:
					"Is it meant for indoor or outdoor use, for your car or your home?",
			},
			{
				question: "Why is this product useful or better than the competition?",
				answer:
					"This can be anything from quality to value to features. Think about the product benefits to your customers and consider how images can complement your product copy.",
			},
			{
				question: "How does the product work?",
				answer:
					"This may not be necessary for every product, but it’s a must-have feature if you are selling anything with moving parts or electronics.",
			},
		],
	};

	return (
		<div className="flex flex-col md:flex-row max-w-7xl mx-auto my-8 p-4 border rounded-lg shadow-md">
			<div className="flex-1 p-4">
				<div className="mb-4">
					<h3 className="text-lg font-semibold">Overview</h3>
				</div>
				<div className="text-gray-700">
					<p>{product.description}</p>
					<ul className="list-disc list-inside ml-4 mt-2">
						{product.details.map((detail, index) => (
							<li key={index}>
								<strong>{detail.question}</strong> {detail.answer}
							</li>
						))}
					</ul>
					<p className="mt-2">This is demo of product Details.</p>
				</div>
			</div>
		</div>
	);
};

export default Overview;
