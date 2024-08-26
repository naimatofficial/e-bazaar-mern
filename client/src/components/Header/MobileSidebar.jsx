import React from "react";
import {
	IconButton,
	List,
	ListItem,
	Accordion,
	AccordionHeader,
	AccordionBody,
	Drawer,
	Card,
} from "@material-tailwind/react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
	const [open, setOpen] = React.useState(0);
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	const openDrawer = () => setIsDrawerOpen(true);
	const closeDrawer = () => setIsDrawerOpen(false);

	return (
		<>
			<button onClick={openDrawer}>
				{isDrawerOpen ? (
					<FaTimes className="h-2 w-2 stroke-2" />
				) : (
					<FaBars className="h-6 w-6 stroke-2" />
				)}
			</button>
			<Drawer
				open={isDrawerOpen}
				onClose={closeDrawer}
				className="w-[60%] px-3"
			>
				<Card shadow={false} className="h-100vh w-full p-2 relative">
					<IconButton variant="text" size="lg" onClick={closeDrawer}>
						<FaTimes className="h-4 w-4 " />
					</IconButton>
					<List>
						<Link to="/" className="mr-auto font-normal w-full">
							<ListItem className="py-2 px-4">Home</ListItem>
						</Link>
						<Link to="/categories" className="mr-auto font-normal w-full">
							<ListItem className="py-2 px-4">All Categories</ListItem>
						</Link>
						<Link to="/brands" className="mr-auto font-normal w-full">
							<ListItem className="py-2 px-4">All Brands</ListItem>
						</Link>
						<Link
							to="/products?discount"
							className="mr-auto font-normal w-full"
						>
							<ListItem className="py-2 px-4">Discount Products</ListItem>
						</Link>
						<Link to="/vendors" className="mr-auto font-normal w-full">
							<ListItem className="py-2 px-4">All Vendors</ListItem>
						</Link>
						<Accordion
							open={open === 2}
							icon={
								<FaChevronDown
									strokeWidth={2.5}
									className={`mx-auto h-4 w-4 transition-transform ${
										open === 2 ? "rotate-180" : ""
									}`}
								/>
							}
						>
							<ListItem className="p-0" selected={open === 2}>
								<AccordionHeader
									onClick={() => handleOpen(2)}
									className="border-b-0 p-2"
								>
									<p className="mr-auto text-base font-normal">Vendor Zone</p>
								</AccordionHeader>
							</ListItem>
							<AccordionBody className="py-1">
								<List className="p-0">
									<Link to="/vendor/auth/registration">
										<ListItem>Become a Vendor</ListItem>
									</Link>
									<Link to="/vendor/auth/login">
										<ListItem>Vendor Login</ListItem>
									</Link>
								</List>
							</AccordionBody>
						</Accordion>
						<hr className="my-2 border-blue-gray-50" />
					</List>
				</Card>
			</Drawer>
		</>
	);
};

export default MobileSidebar;
