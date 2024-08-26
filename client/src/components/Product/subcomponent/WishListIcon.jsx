import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddWishListMutation } from "../../../redux/slices/wishlistApiSlice";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

const WishListIcon = ({ productId, onClose }) => {
	const { userInfo } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	const [addWishList] = useAddWishListMutation();

	const addToWishListHandler = async () => {
		if (!userInfo || !userInfo?.user) {
			toast.warning("You need to Sign in to view this feature.");
			return navigate("/customer/auth/sign-in");
		}

		try {
			const userId = userInfo?.user?._id;

			await addWishList({ userId, productId });
			onClose && onClose();
			toast.success("Product added to wishlist");
		} catch (err) {
			toast.error(err?.data?.message);
			console.log(err);
		}
	};

	return (
		<div>
			<button
				onClick={addToWishListHandler}
				className=" btn border border-gray-300 text-primary-500 py-2 px-4 rounded flex items-center justify-center"
			>
				<FaHeart className="mr-2" /> 0
			</button>
		</div>
	);
};

export default WishListIcon;
