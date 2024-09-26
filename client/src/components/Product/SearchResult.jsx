import { Link, useLocation } from "react-router-dom";
import ProductCarousel from "../shared/ProductCarousel";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Loader from "../Loader";
import { useGetAllProductsQuery } from "../../redux/slices/productsApiSlice";
import { useEffect, useState } from "react";

const SearchResult = () => {
    const location = useLocation();
    const [query, setQuery] = useState("");

    // Extract query from the URL search params
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryParam = searchParams.get("query");

        if (queryParam) {
            setQuery(queryParam);
        }
    }, [location.search]);

    // Fetch all products
    const { data: products, isLoading } = useGetAllProductsQuery();

    // Filter products based on the query (starting with the query)
    const filteredProducts = query
        ? products?.doc.filter((product) =>
              product.name.toLowerCase().startsWith(query.toLowerCase())
          )
        : [];

    return isLoading ? (
        <Loader />
    ) : products && filteredProducts.length > 0 ? (
        <div className="bg-white shadow-md shadow-gray-200 rounded-lg py-8 px-4">
            <div>
                <h2 className="text-xl font-semibold">Search Result</h2>
                <p className="text-gray-500">{filteredProducts.length} Items found</p>
            </div>
            {/* <Link to="/products?featured" className="view-box">
                View All
                <span>
                    <FaAngleRight className="text-lg" />
                </span>
            </Link> */}
            <ProductCarousel
                data={filteredProducts}
                component={ProductCard}
                largeDesktopLimit={5}
                desktopLimit={4}
            />
        </div>
    ) : (
        <div>
            <h2 className="text-xl font-semibold">Search Result</h2>
            <p className="text-gray-500">0 Items found</p>
        </div>
    );
};

export default SearchResult;