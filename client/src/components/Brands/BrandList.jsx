/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrandItem from "./BrandItem";

const BrandList = ({ brands }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1024, min: 768 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 768, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="w-full relative">
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				renderDotsOutside={true}
				className="relative"
				containerClass="carousel-container"
				arrows={false} // This ensures arrows are not shown
			>
				{brands && brands.length ? (
					brands.map((item, index) => (
						<div key={index} className="mx-2">
							<BrandItem brand={item} />
						</div>
					))
				) : (
					<p>Brands not found!</p>
				)}
			</Carousel>
		</div>
	);
};

export default BrandList;
