import { useGetCategoriesQuery } from '../../redux/slices/categoriesApiSlice';
import Loader from '../Loader';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils';

const CategoryDropDown = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery({});
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

    const handleMouseEnterCategory = (categoryId) => {
        setHoveredCategory(categoryId);
    };

    const handleMouseEnterSubCategory = (subCategoryId) => {
        setHoveredSubCategory(subCategoryId);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
        setHoveredSubCategory(null);
    };

    return isLoading ? (
        <Loader />
    ) : (
        <div className="relative z-20">
            {categories && categories.doc ? (
                <div className="w-full p-2 mx-auto shadow-md bg-white">
                    {categories.doc.slice(0, 7).map((category, index) => {
                        const hasSubCategories = category.subCategories?.length > 0;

                        return (
                            <div
                                key={index}
                                className="relative group border-b-2 border-gray-200"
                                onMouseEnter={() => handleMouseEnterCategory(category._id)}
                            >
                                <Link
                                    to={`/products?category=${category._id}`}
                                    className={`flex items-center group gap-2 p-2 
                                    cursor-pointer w-full hover:bg-gray-100`}
                                >
                                    <div className="image">
                                        <img
                                            src="https://vistamart.biz/storage/app/public/category/2024-08-08-66b4dde53db3a.png"
                                            alt="Logo"
                                            className="w-[1.5vw] h-[1vw]"
                                        />
                                    </div>
                                    <span className="text-gray-700 group-hover:text-primary-600 flex justify-between w-full">
                                        {capitalizeFirstLetter(category.name)}
                                        {hasSubCategories && <span className="ml-auto"> &gt; </span>}
                                    </span>
                                </Link>

                                {hoveredCategory === category._id && hasSubCategories && (
                                    <div
                                        className="absolute top-0 left-full w-56 bg-white shadow-md z-20 ml-1 p-2"
                                        onMouseEnter={() => handleMouseEnterCategory(category._id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {category.subCategories.map((subCategory, subIndex) => {
                                            const hasSubSubCategories =
                                                subCategory.subSubCategories?.length > 0;

                                            return (
                                                <div
                                                    key={subIndex}
                                                    className="group relative"
                                                    onMouseEnter={() =>
                                                        handleMouseEnterSubCategory(subCategory._id)
                                                    }
                                                    onMouseLeave={() => setHoveredSubCategory(null)}
                                                >
                                                    <Link
                                                        to={`/products?subcategory=${subCategory._id}`}
                                                        className="flex justify-between p-2 hover:bg-gray-100"
                                                    >
                                                        <span className="px-5">
                                                            {capitalizeFirstLetter(
                                                                subCategory.name
                                                            )}
                                                        </span>
                                                        {hasSubSubCategories && (
                                                            <span className="ml-auto">▶</span>
                                                        )}
                                                    </Link>

                                                    {hoveredSubCategory === subCategory._id &&
                                                        hasSubSubCategories && (
                                                            <div className="absolute top-0 left-full w-56 bg-white shadow-md ml-1 z-20 p-2">
                                                                {subCategory.subSubCategories.map(
                                                                    (subSubCategory, subSubIndex) => (
                                                                        <Link
                                                                            key={subSubIndex}
                                                                            to={`/products?subsubcategory=${subSubCategory._id}`}
                                                                            className="block p-2 hover:bg-gray-100"
                                                                        >
                                                                            {capitalizeFirstLetter(
                                                                                subSubCategory.name
                                                                            )}
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <Link
                        to={`/categories`}
                        className="group text-center cursor-pointer w-full"
                    >
                        <span className="text-primary-500 p-2 hover:text-primary-600">
                            View More
                        </span>
                    </Link>
                </div>
            ) : (
                <p>No categories found!</p>
            )}
        </div>
    );
};

export default CategoryDropDown;
