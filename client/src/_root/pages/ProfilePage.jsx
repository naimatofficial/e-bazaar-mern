import { Outlet, useNavigate } from "react-router-dom";
import ProfileLeftBar from "../../components/Profile/ProfileLeftBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetCustomerDetailsQuery } from "../../redux/slices/customersApiSlice";
import Loader from "../../components/Loader";

const ProfilePage = () => {
	const { userInfo } = useSelector((state) => state.auth);

	const { data: user, isLoading } = useGetCustomerDetailsQuery(
		userInfo?.user?._id,
		{
			skip: !userInfo?.user?._id,
		}
	);

	const navigate = useNavigate();

	useEffect(() => {
		if (!userInfo && !userInfo?.user) {
			navigate("/");
		}
	}, [navigate, userInfo]);

	if (!user && !user?.doc && userInfo?.user) return null;

	return isLoading ? (
		<Loader />
	) : (
		<div className="flex gap-4 lg:p-8 md:p-6 p-4 w-full">
			<ProfileLeftBar user={user?.doc} />
			<div className="w-full px-2">
				<Outlet />
			</div>
		</div>
	);
};

export default ProfilePage;
