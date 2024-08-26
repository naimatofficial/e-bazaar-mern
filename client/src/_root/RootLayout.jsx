import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import StickyIcons from "../components/shared/StcikyIcons";
import Contacts from "../components/shared/Contacts";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MobileSidebar from "../components/Header/MobileSidebar";

const RootLayout = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500); // 1.5 seconds delay

		return () => clearTimeout(timer); // Clear the timer if the component unmounts
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<div>
			<Header />
			<div className="absolute z-50 top-14 mx-1 left-2 block md:hidden">
				<MobileSidebar />
			</div>
			<div className="lg:w-[90%] w-full mx-auto md:px-8 py-4 px-4">
				<Suspense
					fallback={
						<div>
							<Loader />
						</div>
					}
				>
					<Outlet />
				</Suspense>
			</div>
			<StickyIcons />
			<Contacts />
			<Footer />
		</div>
	);
};

export default RootLayout;
