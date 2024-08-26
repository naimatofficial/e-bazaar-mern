import { useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

const faqData = [
	{
		question: "Can orders be placed using E-Baazaar App?",
		answer:
			"Yes, orders can be placed using the E-Baazaar App. It is user-friendly and allows easy order placement.",
	},
	{
		question:
			"Is it important for me to educate the customer before placing order?",
		answer:
			"Yes, educating the customer before placing an order ensures they are aware of the product details and policies.",
	},
	{
		question: "Why my id is blocked/blacklisted?",
		answer:
			"Your ID might be blocked or blacklisted due to violation of our policies or repeated fraudulent activities.",
	},
	{
		question: "Why my orders get canceled?",
		answer: (
			<ul>
				<li>Cancellation from customer side.</li>
				<li>Product is out of stock.</li>
				<li>System recognizes it as a fraud order.</li>
			</ul>
		),
	},
];

const FaqPage = () => {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<div className="container  mx-auto p-4 items-center ">
			<h2 className="text-2xl font-bold mb-4 flex justify-center text-center border-b">
				Frequently Asked Question
			</h2>
			<div className="flex justify-center items-center w-full h-96">
				<div className="grid grid-cols-2 gap-8 w-[60%] items-center">
					{faqData.map((faq, index) => (
						<Accordion key={index} open={open === index + 1}>
							<AccordionHeader
								onClick={() => handleOpen(index + 1)}
								className="text-sm"
							>
								{faq.question}
							</AccordionHeader>
							<AccordionBody>{faq.answer}</AccordionBody>
						</Accordion>
					))}
				</div>
			</div>
		</div>
	);
};

export default FaqPage;
