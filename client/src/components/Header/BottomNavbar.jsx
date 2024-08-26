import { useEffect, useState } from "react";

import {
	Collapse,
	Typography,
	IconButton,
	Menu,
	MenuHandler,
	MenuList,
} from "@material-tailwind/react";
import { MdArrowDropDown } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";

import { FaBars, FaTimes } from "react-icons/fa";
import NavList from "./NavList";
import CategoryDropDown from "../Categories/CategoryDropDown";

const BottomNavbar = () => {
	const [openMenu3, setOpenMenu3] = useState(false);
	const [openNav, setOpenNav] = useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<div className="w-full py-3 border-none shadow-none bg-primary-400 hidden md:block ">
			<div className="flex items-center gap-5 mx-16">
				<div className="w-[250px] bg-white items-center">
					<Menu
						open={openMenu3}
						handler={setOpenMenu3}
						allowHover
						className="flex flex-col"
					>
						<MenuHandler>
							<Typography
								as="li"
								variant="small"
								color="blue-gray"
								className="p-2 font-medium"
							>
								<p className="flex items-center hover:text-primary-500 text-primary-400 transition-all duration-300 ease-in justify-between cursor-pointer">
									<BiSolidCategory className="w-6 h-6 mr-2" />{" "}
									<span className="text-xl">Category</span>
									<MdArrowDropDown className="w-6 h-6 ml-2" />{" "}
								</p>
							</Typography>
						</MenuHandler>
						<MenuList className="hidden overflow-visible md:block p-0">
							<CategoryDropDown />
						</MenuList>
					</Menu>
				</div>

				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<FaTimes className="h-6 w-6" strokeWidth={2} />
					) : (
						<FaBars className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</div>
	);
};

export default BottomNavbar;
