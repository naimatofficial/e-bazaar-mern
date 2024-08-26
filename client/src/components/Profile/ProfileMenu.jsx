import { PropTypes } from "prop-types";
import {
	AiOutlineUser,
	AiOutlineOrderedList,
	AiOutlineLogout,
} from "react-icons/ai";
import { useState } from "react";

import UserAvatar from "../../assets/user-avatar.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/slices/authSlice";
import { useCustomerLogoutMutation } from "../../redux/slices/customersApiSlice";
import { toast } from "react-toastify";

const ProfileMenu = ({ user }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [customerLogout] = useCustomerLogoutMutation();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = (link) => {
		setIsMenuOpen(false);
		navigate(link);
	};

	const logoutHandler = () => {
		try {
			// Get accessToken from localStorage
			const userInfo = localStorage.getItem("userInfo");
			const user = JSON.parse(userInfo);

			dispatch(logout());
			customerLogout(user?.accessToken);

			toast.success("Logout Successfully");
			window.location.reload();
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

	console.log(user);

	return user ? (
		<div className="relative">
			<button onClick={toggleMenu} className="flex items-center gap-2 p-1">
				<img
					className="h-8 w-8 object-contain rounded-full"
					src={
						user?.image ? `http://localhost:3000/${user?.image}` : UserAvatar
					}
					alt={user.firstName}
				/>
				<div className="hidden md:block text-sm text-gray-900">
					<p>Hello, {user.firstName}</p>
					<p>Dashboard</p>
				</div>
			</button>
			{isMenuOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
					<button
						onClick={() => closeMenu("/profile/profile-info")}
						className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100"
					>
						<AiOutlineUser className="h-4 w-4" />
						<span>Profile</span>
					</button>
					<button
						onClick={() => closeMenu("/profile/my-orders")}
						className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100"
					>
						<AiOutlineOrderedList className="h-4 w-4" />
						<span>Orders</span>
					</button>
					<button
						onClick={logoutHandler}
						className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100"
					>
						<AiOutlineLogout className="h-4 w-4" />
						<span>Logout</span>
					</button>
				</div>
			)}
		</div>
	) : null;
};

ProfileMenu.propTypes = {
	user: PropTypes.object.isRequired,
};

export default ProfileMenu;
