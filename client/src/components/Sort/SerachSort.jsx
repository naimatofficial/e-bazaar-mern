import { BiSearch } from "react-icons/bi";
import { TbSortAscending2 } from "react-icons/tb";

const SearchSort = () => {
	return (
		<>
			<div className="flex justify-between items-center mt-6 max-w-7xl mx-auto py-4">
				<div>
					<h3>Category</h3>
				</div>
				<div className="flex flex-row gap-4 ">
					<div className="flex items-center space-x-2 border-2 border-gray-200  px-2 rounded-lg hover:shadow-lg">
						<TbSortAscending2 className="text-gray-600" />

						<label className="text-gray-700">Sort by:</label>
						<select className=" pl-4 pr-10 py-2 px-2 focus:outline-none">
							<option>Latest</option>
							<option>Popular</option>
							<option>Price: Low to High</option>
							<option>Price: High to Low</option>
						</select>
					</div>
					<div className="flex items-center space-x-2 rounded-lg hover:shadow-lg ">
						<div className="relative">
							<input
								type="text"
								className="pl-4 pr-10 py-2 rounded-lg border-2 border-gray-300 focus:border-primary-500"
								placeholder="Search Product from"
							/>
							<div className="absolute top-0 right-0 p-1 bg-primary-300 h-full w-[50px] flex items-center rounded-r-lg hover:bg-primary-500">
								<button className="p-1 flex justify-center items-center h-full w-full">
									<BiSearch className="w-[20px] h-[20px] text-white drop-shadow-md" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchSort;
