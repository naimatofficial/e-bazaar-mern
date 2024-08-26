/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FlashDealTimer = ({ endDate }) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(endDate) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				Minutes: Math.floor((difference / 1000 / 60) % 60),
				Seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className="flex justify-center space-x-2 bg-primary-500 p-6 rounded-lg">
			{Object.keys(timeLeft).map((interval) => (
				<div key={interval} className="text-center">
					<div className="bg-primary-400 text-white p-4 rounded">
						<div className="text-2xl font-bold text">{timeLeft[interval]}</div>
					</div>
					<div className="text-sm text-white">{interval}</div>
				</div>
			))}
		</div>
	);
};

export default FlashDealTimer;
