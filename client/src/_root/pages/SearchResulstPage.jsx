import { useLocation } from 'react-router-dom'
import { useGetAllProductsQuery } from '../../redux/slices/productsApiSlice'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'

const SearchResultPage = () => {
    const location = useLocation()
    const [query, setQuery] = useState('')

    // Extract query from the URL search params
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const queryParam = searchParams.get('query')

        if (queryParam) {
            setQuery(queryParam)
        }
    }, [location.search])

    // Fetch all products
    const { data: products, isLoading } = useGetAllProductsQuery()

    // Filter products based on the query (starting with the query)
    const filteredProducts = query
        ? products?.doc.filter((product) =>
              product.name.toLowerCase().startsWith(query.toLowerCase())
          )
        : []

    return isLoading ? (
        <Loader />
    ) : products && filteredProducts.length > 0 ? (
        <div className="bg-white shadow-md shadow-gray-200 rounded-lg py-8 px-4">
            <div>
                <h2 className="text-xl font-semibold">Search Result</h2>
                <p className="text-gray-500">
                    {filteredProducts.length} Items found
                </p>
            </div>

            {filteredProducts.length ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300">
                    {products?.doc?.map((product, index) => (
                        <ProductCard key={index} data={product} />
                    ))}
                </div>
            ) : (
                <div className="text-lg flex mt-20 justify-center items-center bg-red-100 text-red-500 py-4 px-8 w-full text-center">
                    <h2>No products found!</h2>
                </div>
            )}
        </div>
    ) : (
        <div>
            <h2 className="text-xl font-semibold">Search Result</h2>
            <p className="text-gray-500">0 Items found</p>

            <div className="No-Product-Found mt-2 h-[300px] flex justify-center items-center">
                <div className="Heading text-lg font-bold mt-1 ">
                    No Product Found
                </div>
            </div>
        </div>
    )
}

export default SearchResultPage
