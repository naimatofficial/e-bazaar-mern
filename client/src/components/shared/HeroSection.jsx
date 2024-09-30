import { Carousel } from '@material-tailwind/react'

import Banner1 from '../../assets/slideshow-img/slide-1.png'
import Banner2 from '../../assets/slideshow-img/slide-2.png'
import Banner3 from '../../assets/slideshow-img/slide-3.png'

const HeroSection = () => {
    return (
        <div className="w-full flex justify-between gap-2">
            {/* <CategorySidebar className="hidden" /> */}
            <Carousel
                className=" w-full z-10 lg:h-[70vh] md:h-[50vh] h-[30vh] rounded-lg "
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill('').map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                        ? 'w-8 bg-white'
                                        : 'w-4 bg-white/50'
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
    )
}
export default HeroSection
