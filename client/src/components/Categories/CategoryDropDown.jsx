import { Typography } from '@material-tailwind/react'
import { useGetCategoriesQuery } from '../../redux/slices/categoriesApiSlice'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils'
const CategoryDropDown = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery({})

    console.log(categories)

    return isLoading ? (
        <Loader />
    ) : categories && categories?.doc ? (
        <>
            <div className="w-[250px] p-2 mx-auto shadow-md bg-white-100">
                <div>
                    {categories.doc.map((category, index) => {
                        if (index <= 6)
                            return (
                                <>
                                    {' '}
                                    <Link
                                        key={index}
                                        to={`/products?category=${category._id}`}
                                        className="flex  items-center group  p-1 border-b last:border-none cursor-pointer  gap-3 px-3"
                                    >
                                        <div className="image">
                                            <img
                                                src="https://vistamart.biz/storage/app/public/category/2024-08-08-66b4dde53db3a.png"
                                                alt="Logo"
                                                className="w-[1.5vw] h-[1vw] "
                                            />
                                        </div>
                                        <Typography className="text-gray-700 group-hover:text-primary-600">
                                            {capitalizeFirstLetter(
                                                category.name
                                            )}
                                        </Typography>
                                    </Link>
                                </>
                            )
                    })}
                    <Link
                        to={`/categories`}
                        className="group text-center cursor-pointer w-full"
                    >
                        <Typography className="text-primary-500 p-1 group-hover:text-primary-600">
                            view more
                        </Typography>
                    </Link>
                </div>
            </div>
        </>
    ) : (
        <p>No categories found!</p>
    )
}

export default CategoryDropDown
