import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	const { userInfo } = useSelector((state) => state.auth);

	console.log(userInfo);

	return (
		!userInfo && (
			<div className="">
				<div className="my-20 w-3/4 mx-auto rounded-lg outline-1 outline-primary-400 shadow-md bg-white">
					<div className="w-3/4 mx-auto p-8">
						<Outlet />
					</div>
				</div>
			</div>
		)
	);
};

export default AuthLayout;
