import { useEffect, useState } from "react";
import { Navbar, IconButton, Badge } from "@material-tailwind/react";
import {
	FaRegHeart,
	FaUser,
	FaSignInAlt,
	FaUserPlus,
	FaSearch,
} from "react-icons/fa";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import logo from "../../assets/app-logo/app-logo-transparent.png";
import SearchBar from "./SerachBar";
import { Link } from "react-router-dom";
import ProfileMenu from "../Profile/ProfileMenu";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import { useGetWishListByIdQuery } from "../../redux/slices/wishlistApiSlice";

const NavbarSticky = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const { userInfo } = useSelector((state) => state.auth);

	const { data: wishList } = useGetWishListByIdQuery(userInfo?.user?._id, {
		skip: !userInfo?.user?._id,
	});

	const totalWishListItems = wishList?.products?.length.toString() || "0";

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const threshold = window.innerHeight * 0.25;
		setIsSticky(scrollPosition > threshold);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	return (
		<div
			className={`w-full z-40 transition-all duration-500 ease-in-out py-4 ${
				isSticky ? "fixed top-0 shadow-lg bg-white" : "relative"
			}`}
			style={{
				transform: isSticky ? "translateY(0)" : "translateY(-10%)",
			}}
		>
			<Navbar variant="gradient" className="mx-auto w-[80%] p-0 shadow-none">
				<div className="flex items-center justify-between lg:gap-x-6 gap-x-2 text-white">
					<Link to="/">
						<img
							src={logo}
							alt="brand logo"
							className="w-24 sm:w-36 md:w-40 object-contain"
						/>
					</Link>
					<div className="flex-grow hidden md:block ">
						<SearchBar />
					</div>
					<div className="md:hidden">
						<IconButton
							variant="text"
							className="bg-gray-100 rounded-full border-none"
							onClick={toggleSearch}
						>
							<FaSearch className="h-5 w-5 text-primary-500" />
						</IconButton>
					</div>

					<div className="flex gap-3">
						<Badge content={totalWishListItems}>
							<Link to="/profile/wish-list">
								<IconButton
									variant="text"
									className="bg-gray-100 rounded-full border-none"
								>
									<FaRegHeart className="h-5 w-5 text-primary-500" />
								</IconButton>
							</Link>
						</Badge>
						<div>
							{userInfo && userInfo?.user ? (
								<ProfileMenu user={userInfo.user} />
							) : (
								<Menu open={openMenu} handler={setOpenMenu} allowHover>
									<MenuHandler>
										<IconButton
											variant="text"
											className="bg-gray-100 rounded-full border-none"
										>
											<FaUser className="h-5 w-5 text-primary-500" />
										</IconButton>
									</MenuHandler>
									<MenuList className="hidden overflow-visible md:grid shadow-md">
										<Link to="/customer/auth/sign-in">
											<MenuItem>
												<FaSignInAlt className="inline mr-2" />
												Login
											</MenuItem>
										</Link>
										<Link to="/customer/auth/sign-up">
											<MenuItem>
												<FaUserPlus className="inline mr-2" />
												SignUp
											</MenuItem>
										</Link>
									</MenuList>
								</Menu>
							)}
						</div>
						<CartIcon />
					</div>
				</div>
				{isSearchOpen && (
					<div className="w-full flex items-center justify-between bg-primary-100 absolute top-full left-0 right-0 shadow-md p-2 transition-transform duration-300 ease-in-out rounded-lg">
						<div className="flex-grow">
							<SearchBar />
						</div>
						<button
							className="p-2 bg-primary-500 text-white rounded-md"
							onClick={() => setIsSearchOpen(false)}
						>
							Search
						</button>
					</div>
				)}
			</Navbar>
		</div>
	);
};

export default NavbarSticky;
