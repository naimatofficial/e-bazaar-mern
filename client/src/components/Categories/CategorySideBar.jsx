import { Typography } from '@material-tailwind/react'
import { useGetCategoriesQuery } from '../../redux/slices/categoriesApiSlice'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils'

const CategorySidebar = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery({})

    return isLoading ? (
        <Loader />
    ) : categories && categories?.doc ? (
        <>
            <div className="w-[300px] p-2 border bg-white-100 shadow-sm">
                <div className="flex flex-col gap-2">
                    {categories.doc.map((category, index) => {
                        if (index <= 10)
                            return (
                                <Link
                                    key={index}
                                    to={`/products?category=${category._id}`}
                                    className="flex justify-between items-center group  p-1 border-b last:border-none cursor-pointer"
                                >
                                    <Typography className="text-gray-700 group-hover:text-primary-600">
                                        {capitalizeFirstLetter(category.name)}
                                    </Typography>
                                </Link>
                            )
                    })}
                </div>
            </div>
        </>
    ) : (
        <p>No categories found!</p>
    )
}

export default CategorySidebar
