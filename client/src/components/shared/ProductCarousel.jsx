/* eslint-disable react/prop-types */
import { useState } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="carousel-arrow left-0">
            <FaAngleLeft className="text-white text-lg" />
        </button>
    )
}

const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="carousel-arrow right-0">
            <FaAngleRight className="text-white text-lg" />
        </button>
    )
}

const ProductCarousel = ({
    data,
    component: Component,
    largeDesktopLimit,
    desktopLimit,
}) => {
    const [showArrows, setShowArrows] = useState(false)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: largeDesktopLimit,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: desktopLimit,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <div
            className="relative"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
        >
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                customLeftArrow={showArrows ? <CustomLeftArrow /> : <div />}
                customRightArrow={showArrows ? <CustomRightArrow /> : <div />}
                arrows={showArrows}
                renderDotsOutside={true}
                className="relative"
            >
                {data?.map((item, index) => (
                    <div key={index} className="p-2">
                        <Component data={item} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

ProductCarousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    component: PropTypes.elementType.isRequired,
    largeDesktopLimit: PropTypes.number.isRequired,
    desktopLimit: PropTypes.number.isRequired,
}

export default ProductCarousel
