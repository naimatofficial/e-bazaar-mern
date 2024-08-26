import {
	Menu,
	MenuHandler,
	MenuList,
	Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import BrandDropDownItem from "../Brands/BrandDropDownItem";

const NavList = () => {
	const [openMenu, setOpenMenu] = React.useState(false);
	const [openMenu2, setOpenMenu2] = React.useState(false);

	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-base lg:gap-6">
			<Typography
				as="li"
				variant="paragraph"
				color="blue-gray"
				className="p-1 font-medium text-base"
			>
				<Link to="/" className="navbar-item">
					Home
				</Link>
			</Typography>
			<Menu open={openMenu} handler={setOpenMenu} allowHover>
				<MenuHandler>
					<Typography
						as="li"
						variant="paragraph"
						color="blue-gray"
						className="p-1 font-medium text-base"
					>
						<span className="navbar-item">Brand</span>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden w-[250px] overflow-visible md:block shadow-md">
					<BrandDropDownItem />
				</MenuList>
			</Menu>
			<Typography
				as="li"
				variant="paragraph"
				color="blue-gray"
				className="p-1 font-medium text-base"
			>
				<Link to="/products?discount" className="navbar-item">
					Discounted Products
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="paragraph"
				color="blue-gray"
				className="p-1 font-medium text-base"
			>
				<Link to="/vendors" className="navbar-item">
					All Vendors
				</Link>
			</Typography>
			<Menu open={openMenu2} handler={setOpenMenu2} allowHover>
				<MenuHandler>
					<Typography
						as="li"
						variant="paragraph"
						color="blue-gray"
						className="p-1 font-medium cursor-pointer"
					>
						<p className="navbar-item">Vandor Zone</p>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden overflow-visible md:grid shadow-md">
					<Typography
						as="li"
						variant="paragraph"
						color="blue-gray"
						className="p-1 font-medium border-0 outline-none"
					>
						<Link
							to="/vendor/auth/registration"
							className="flex items-center text-black border-b hover:text-primary-400 transition-colors"
						>
							Become A Vendor
						</Link>
					</Typography>
					<Typography
						as="li"
						variant="paragraph"
						color="blue-gray"
						className="p-1 font-medium border-0 outline-none"
					>
						<Link
							to="/vendor/auth/login"
							className="flex items-center text-black border-b hover:text-primary-400 transition-colors"
						>
							Vendor login
						</Link>
					</Typography>
				</MenuList>
			</Menu>
		</ul>
	);
};

export default NavList;
