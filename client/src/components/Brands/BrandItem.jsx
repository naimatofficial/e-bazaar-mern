import { Link } from 'react-router-dom'
import { API_URL } from '../../utils/constants'

/* eslint-disable react/prop-types */
const BrandItem = ({ brand }) => {
    return (
        <div className="border border-gray-300 h-24 w-24 rounded-full p-4 group cursor-pointer">
            <Link to={`/products?brand=${brand._id}`} className="">
                <img
                    src={`${API_URL}/uploads/${brand.logo}`}
                    alt={brand.name}
                    className=" object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </Link>
        </div>
    )
}

export default BrandItem
