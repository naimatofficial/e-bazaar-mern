import {
    Badge,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartView from "../Cart/CartView";

const CartIcon = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const cart = useSelector((state) => state.cart);
    const totalItems = cart?.totalQty?.toString() || "0";
    const totalPrice = cart?.totalPrice * 1 || 0;

    // Toggle the menu when clicked
    const toggleMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    return (
        <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
                <div
                    className="flex flex-row items-center bg-transparent"
                    onClick={toggleMenu} // Toggle menu on click
                >
                    <Badge content={totalItems}>
                        <Link to="/cart">
                            <IconButton
                                variant="text"
                                aria-label="Shopping Cart"
                                className="rounded-full border-none"
                            >
                                <FaShoppingCart className="h-5 w-5 text-primary-500" />
                            </IconButton>
                        </Link>
                    </Badge>
                    <button className="hidden md:block text-center w-24 border-none lg:flex flex-col text-sm items-center justify-center">
                        <span className="text-gray-600">My cart</span>
                        <div className="text-gray-900 flex-center gap-2 font-bold">
                            <span>${totalPrice?.toLocaleString()}</span>
                            <MdArrowDropDown />
                        </div>
                    </button>
                </div>
            </MenuHandler>
            <MenuList className="overflow-visible md:grid shadow-md">
                <CartView />
            </MenuList>
        </Menu>
    );
};

export default CartIcon;
