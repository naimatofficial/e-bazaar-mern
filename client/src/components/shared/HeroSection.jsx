import { Carousel } from "@material-tailwind/react";

import Banner1 from "../../assets/slideshow-img/slide-4.jpg";
import Banner2 from "../../assets/slideshow-img/slide-2.png";
import Banner3 from "../../assets/slideshow-img/slide-3.png";
import CategorySidebar from "./../Categories/CategorySideBar";

const HeroSection = () => {
	return (
		<div className="w-full flex justify-between">
			<CategorySidebar className="hidden lg:block" />
			<Carousel
				className="lg:w-[70%] w-full lg:h-[60vh] md:h-[50vh] h-[30vh] "
				navigation={({ setActiveIndex, activeIndex, length }) => (
					<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
						{new Array(length).fill("").map((_, i) => (
							<span
								key={i}
								className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
									activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
								}`}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
				autoplay
				loop
			>
				<img
					src={Banner1}
					alt="image 1"
					className="h-full w-full object-cover"
				/>
				<img
					src={Banner2}
					alt="image 1"
					className="h-full w-full object-cover"
				/>
				<img
					src={Banner3}
					alt="image 1"
					className="h-full w-full object-cover"
				/>
			</Carousel>
		</div>
	);
};
export default HeroSection;
