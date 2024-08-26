import { ListItemSuffix, Chip } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = ({ icon: Icon, label, to, chip, onClick }) => (
	<NavLink
		to={to}
		className={({ isActive }) =>
			`flex items-center p-2 text-sm justify-between ${
				isActive ? "text-green-300" : "text-gray-700"
			}`
		}
		onClick={onClick}
	>
		<div className=" flex text-sm">
			<div className="flex gap-2 items-center">
				<Icon className="h-4 w-4" />
				<span className="hidden md:inline">{label}</span>
			</div>
			{chip && (
				<ListItemSuffix>
					<Chip
						value={chip}
						size="sm"
						variant="ghost"
						color="blue-gray"
						className="rounded-full"
					/>
				</ListItemSuffix>
			)}
		</div>
	</NavLink>
);

MenuItem.propTypes = {
	icon: PropTypes.elementType.isRequired, // Step 2: Define prop types
	label: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	chip: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};
export default MenuItem;
