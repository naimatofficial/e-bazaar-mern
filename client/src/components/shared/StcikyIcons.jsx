import { useState, useEffect } from "react";
import { FaWhatsapp, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const StickyIcons = () => {
	const [showScroll, setShowScroll] = useState(false);
	const contact = "+923495580124";

	const checkScrollTop = () => {
		if (!showScroll && window.scrollY > 300) {
			setShowScroll(true);
		} else if (showScroll && window.scrollY <= 300) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
	}, [checkScrollTop, showScroll]);

	return (
		<div className="fixed bottom-4 right-4 flex flex-col items-end space-y-3">
			<Link
				to={`https://wa.me/${contact}`}
				className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Contact Us on WhatsApp"
			>
				<FaWhatsapp size={24} />
			</Link>
			{showScroll && (
				<button
					onClick={scrollTop}
					className={`bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ${
						showScroll ? "animate-arrow-in" : "animate-arrow-out"
					}`}
					aria-label="Go to Top"
				>
					<FaAngleUp size={24} />
				</button>
			)}
		</div>
	);
};

export default StickyIcons;
