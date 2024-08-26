import { useState } from "react";

const SellerFaqs = [
	{
		question: "How do I handle customer inquiries?",
		answer:
			"You can manage customer inquiries directly through our platform's messaging system, ensuring quick and efficient communication.",
	},
	{
		question: "How do I upload products?",
		answer:
			'To upload products, go to the "Upload Products" section in your dashboard and follow the instructions provided.',
	},
	{
		question: "What are the fees for selling?",
		answer:
			"The fees for selling on our platform depend on the product category and the type of seller account you have. Please refer to our fees section for detailed information.",
	},
	{
		question: "How do I register as a seller?",
		answer:
			'To register as a seller, click on the "Get Registered" button on our homepage and fill out the registration form.',
	},
];

const FaqsAccordions = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div className="space-y-4">
			{SellerFaqs.map((faq, index) => (
				<div key={index} className="mb-4">
					<button
						className="w-full transition duration-300 ease-in-out text-left bg-gray-100 p-4 rounded-md flex justify-between items-center"
						onClick={() => toggleFAQ(index)}
					>
						<span>{faq.question}</span>
						<span>{openIndex === index ? "-" : "+"}</span>
					</button>
					<div
						className={`overflow-hidden transition-all duration-500 ease-in-out ${
							openIndex === index ? "max-h-screen" : "max-h-0"
						}`}
					>
						<div className="bg-white p-4 rounded-md mt-2">
							<p>{faq.answer}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FaqsAccordions;
