import FaqsAccordions from "../Faqs/FaqsAccordions";

const FAQSection = () => {
	return (
		<div className="bg-gray-50 text-gray-900 lg:p-8 md:p-6 p-4">
			<h2 className="text-3xl text-center mb-4">Frequently Asked Questions</h2>
			<p className="text-center mb-8 lg:w-1/2 w-full mx-auto">
				Got questions about becoming a vendor? Explore our vendor FAQ section
				for answers to any queries you may have abouwt joining our platform as a
				vendor.
			</p>
			<div className="max-w-5xl mx-auto">
				<FaqsAccordions />
			</div>
		</div>
	);
};

export default FAQSection;
