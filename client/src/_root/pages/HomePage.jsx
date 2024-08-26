import FeatureProducts from "../../components/Product/FeatureProducts";
import Categories from "../../components/Categories";
import FeaturedDeal from "../../components/Deals/FeaturedDeal";
import LatestProducts from "../../components/Product/LatestProducts";
import DealOfTheDay from "../../components/Deals/DealOfTheDay";
import ProductsCategory from "../../components/Product/ProductsCategory";
import HeroSection from "../../components/shared/HeroSection";
import FlashDeal from "../../components/Deals/FlashDeal";
import ServicesList from "../../components/Services/ServicesList";
import Loader from "./../../components/Loader";
import TopSeller from "../../components/Seller/TopSeller";
import StarProducts from "../../components/Product/StarProducts";

// images
import PromoSaleImage from "../../assets/banner/promo-sale.webp";
import MegaSaleBanner1 from "../../assets/banner/mega-sale.webp";
import MegaSaleBanner2 from "../../assets/banner/super-sale.webp";
import TopRatedIcon from "../../assets/top-rated.png";
import BestSellingIcon from "../../assets/best-sellings.png";
import {
	useGetProductsQuery,
	useGetTopRatedProductsQuery,
} from "../../redux/slices/productsApiSlice";
import { useEffect, useState } from "react";
import Brands from "../../components/Brands";

const HomePage = () => {
	const { data: products, isLoading: productsLoading } = useGetProductsQuery();

	const { data: topProducts } = useGetTopRatedProductsQuery({});

	// eslint-disable-next-line no-unsafe-optional-chaining

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000); // .5 seconds delay

		return () => clearTimeout(timer);
	}, []);

	return isLoading || productsLoading ? (
		<Loader />
	) : products && products?.doc ? (
		<main>
			{/* Hero Section */}
			<HeroSection />

			{/* Flash Deal */}
			<section className="py-4 mb-4">
				<FlashDeal />
			</section>

			{/* Feature Products Section */}
			<section className="py-4 mb-4">
				<FeatureProducts />
			</section>

			{/* Categories Section */}
			<section>
				<Categories />
			</section>

			{/* Featured Deal */}
			<section className="py-4">
				<FeaturedDeal />
			</section>

			{/* Deal Offer Section */}
			<section className="py-4 mb-4">
				<img
					src={PromoSaleImage}
					alt="promo sale banner"
					className="rounded-lg"
				/>
			</section>

			{/* Top Sellers */}
			<TopSeller />

			<section className="py-4 mb-4 flex flex-col items-center lg:flex-row lg:items-start justify-between gap-4">
				<DealOfTheDay
					image={"./src/assets/categories/laptop.png"}
					title={"Laptop"}
					price={150.0}
				/>
				<LatestProducts />
			</section>

			{/* Banner Sale Section */}
			<section className="py-4">
				<div className="flex justify-between items-center lg:flex-row flex-col gap-4 w-full">
					<img
						src={MegaSaleBanner1}
						alt="mega sale"
						className="lg:w-1/2 w-full rounded-lg"
					/>
					<img
						src={MegaSaleBanner2}
						alt="mega sale"
						className="lg:w-1/2 w-full rounded-lg"
					/>
				</div>
			</section>

			{topProducts && topProducts?.doc && (
				<div className="flex justify-between lg:flex-row flex-col items-center gap-4 my-4">
					<StarProducts
						icon={BestSellingIcon}
						title={"Best sellings"}
						products={topProducts?.docs}
					/>
					<StarProducts
						icon={TopRatedIcon}
						title={"Top rated"}
						products={topProducts?.docs}
					/>
				</div>
			)}

			{/* Brands Section */}
			<section>
				<Brands />
			</section>

			<section className="py-4">
				<ProductsCategory />
			</section>

			<section>
				<ServicesList />
			</section>
		</main>
	) : (
		!productsLoading && (
			<div className="flex justify-center items-center py-4 px-8 text-lg bg-red-100 text-red-500">
				Something went wrong, Please try again!
			</div>
		)
	);
};

export default HomePage;
