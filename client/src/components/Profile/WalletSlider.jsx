import Slider from "react-slick";

const walletOffers = [
	{
		title: "Flat Bonus",
		validity: "Valid till 22 Nov, 2030",
		description: "Add fund to wallet $500.00 and enjoy $150.00 bonus",
		extra: "Add minimum 500 and get flat 150 extra",
	},
	{
		title: "Add fund offer",
		validity: "Valid till 26 Dec, 2030",
		description: "Add fund to wallet $1000.00 and enjoy $300.00 bonus",
		extra: "Add more to save more",
	},
];

const WalletSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{walletOffers.map((offer, index) => (
				<div key={index} className="p-5">
					<div className="border p-5 rounded-lg">
						<h3 className="font-bold mb-2">{offer.title}</h3>
						<p className="text-sm text-gray-600">{offer.validity}</p>
						<p className="text-sm mt-2">{offer.description}</p>
						<p className="text-blue-500 font-semibold mt-2">{offer.extra}</p>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default WalletSlider;
