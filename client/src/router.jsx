import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import SignUpForm from "./_auth/Forms/SignUpForm";
import SignInForm from "./_auth/Forms/SignInForm";

// Pages
import HomePage from "./_root/pages/HomePage";
import BrandsPage from "./_root/pages/BrandsPage";
import ShopViewPage from "./_root/pages/ShopViewPage";
import ProductsPage from "./_root/pages/ProductsPage";
import VendorLoginForm from "./components/Seller/VendorLoginForm";
import VendorRegisterPage from "./_root/pages/VendorRegisterPage";
import VendorsPage from "./_root/pages/VendorsPage";
import CheckoutPage from "./_root/pages/CheckoutPage";
import FaqPage from "./_root/pages/FaqPage";
import ContactUsPage from "./_root/pages/ContactUsPage";
import AboutUsPage from "./_root/pages/AboutUsPagae";
import CartPage from "./_root/pages/CartPage";
import CategoriesPage from "./_root/pages/CategoriesPage";
import ProductDetailsPage from "./_root/pages/ProductDetailsPage";
import ProfilePage from "./_root/pages/ProfilePage";

import ProfileInfo from "./components/Profile/ProfileInfo";
import MyOrder from "./components/Profile/MyOrder";
import MyloyaltyPoint from "./components/Profile/MyLoyaltyPoint";
import MyAddress from "./components/Profile/MyAddress";
import MyWallet from "./components/Profile/MyWallet";
import ReferEarn from "./components/Profile/ReferEarn";
import SupportTicket from "./components/Profile/SupportTicket";
import TrackOrder from "./components/Profile/TrackOrder";
import Coupons from "./components/Profile/Coupons";
import WishList from "./components/Profile/WishList";
import Inbox from "./components/Profile/Inbox";
import FlashDealsPage from "./_root/pages/FlashDealsPage";
import OrderConfirmationPage from "./_root/pages/OrderConfirmationPage";
import NotFoundPage from "./_root/pages/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "vendor/auth/login",
				element: <VendorLoginForm />,
			},
			{
				path: "vendor/auth/registration",
				element: <VendorRegisterPage />,
			},
			{
				path: "brands",
				element: <BrandsPage />,
			},
			{
				path: "categories",
				element: <CategoriesPage />,
			},
			{
				path: "vendors",
				element: <VendorsPage />,
			},
			{
				path: "profile",
				element: <ProfilePage />,
				children: [
					{
						path: "profile-info",
						element: <ProfileInfo />,
					},
					{
						path: "my-orders",
						element: <MyOrder />,
					},
					{
						path: "inbox",
						element: <Inbox />,
					},
					{
						path: "coupons",
						element: <Coupons />,
					},
					{
						path: "wish-list",
						element: <WishList />,
					},
					{
						path: "my-loyalty-point",
						element: <MyloyaltyPoint />,
					},
					{
						path: "support-ticket",
						element: <SupportTicket />,
					},
					{
						path: "my-address",
						element: <MyAddress />,
					},
					{
						path: "refer-earn",
						element: <ReferEarn />,
					},
					{
						path: "my-wallet",
						element: <MyWallet />,
					},
					{
						path: "track-order",
						element: <TrackOrder />,
					},
				],
			},
			{
				path: "shop-view/:vendorId",
				element: <ShopViewPage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
			},
			{
				path: "products/:id",
				element: <ProductDetailsPage />,
			},
			{
				path: "flash-deals",
				element: <FlashDealsPage />,
			},
			{
				path: "customer/auth/sign-up",
				element: <SignUpForm />,
			},
			{
				path: "customer/auth/sign-in",
				element: <SignInForm />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
			{
				path: "checkout-details",
				element: <CheckoutPage />,
			},

			{
				path: "order-confirmation/:orderId",
				element: <OrderConfirmationPage />,
			},
			{
				path: "about-us",
				element: <AboutUsPage />,
			},
			{
				path: "contact-us",
				element: <ContactUsPage />,
			},
			{
				path: "faqs",
				element: <FaqPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
	// {
	// 	path: "/customer/auth",
	// 	element: <AuthLayout />,
	// 	children: [
	// 		{
	// 			path: "sign-up",
	// 			element: <SignUpForm />,
	// 		},
	// 		{
	// 			path: "sign-in",
	// 			element: <SignInForm />,
	// 		},
	// 	],
	// },
]);

export default router;
