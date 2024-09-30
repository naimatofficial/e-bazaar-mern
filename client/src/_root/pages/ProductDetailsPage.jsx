import { Link, useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import {
    useGetProductBySlugQuery,
    // useGetProductDetailsQuery,
    useGetProductsQuery,
} from '../../redux/slices/productsApiSlice'

import Product from '../../components/Product/Product'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import ProductCarousel from '../../components/shared/ProductCarousel'
import ProductReviews from '../../components/Product/ProductReviews'
import VendorRightBar from '../../components/Seller/VendorRightBar'
import Overview from '../../components/Product/subcomponent/Overview'

const ProductDetailsPage = () => {
    const { slug } = useParams()

    // const { data: product, isLoading } = useGetProductDetailsQuery(slug)
    const { data: product, isLoading } = useGetProductBySlugQuery(slug, {
        skip: !slug,
    })

    console.log(product)

    const { data: products, isLoading: isProductsLoading } =
        useGetProductsQuery(
            {
                category: product?.category?._id,
            },
            { skip: !product?.category?._id }
        )

    return isLoading ? (
        <Loader />
    ) : product && product.doc ? (
        <div className="container mx-auto flex flex-col space-y-4 sm:space-y-0">
            <div className="flex flex-col lg:flex-row justify-between gap-4 w-full">
                <div className="flex flex-col">
                    <Product product={product?.doc} />
                    <Overview />
                    <ProductReviews product={product?.doc} />
                </div>

                <VendorRightBar vendorId={product?.userId} />
            </div>

            {isProductsLoading ? (
                <Loader />
            ) : products && products.doc ? (
                <div className="products-container">
                    <div className="flex justify-between items-center mx-2">
                        <div className="flex justify-between items-center w-fit gap-2 mb-4">
                            <h3 className="text-xl font-bold">
                                Similar Products
                            </h3>
                        </div>
                        <Link to="/products" className="view-box">
                            View All
                            <span>
                                <FaAngleRight className="text-lg" />
                            </span>
                        </Link>
                    </div>
                    <ProductCarousel
                        data={products?.doc}
                        component={ProductCard}
                        largeDesktopLimit={5}
                        desktopLimit={4}
                    />
                </div>
            ) : null}
        </div>
    ) : (
        <p>Product details not found!</p>
    )
}

export default ProductDetailsPage
