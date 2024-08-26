export const TopStoresSearch = () => (
	<div className="max-w-6xl mx-auto py-4">
		<div className="bg-primary-100 p-8 rounded-lg shadow-md flex items-center justify-between">
			<div>
				<h2 className="text-2xl font-semibold text-primary-500">TOP STORES</h2>
				<p className="text-primary-500">
					Find your desired stores and shop your favourite products
				</p>
			</div>
			<div className="flex items-center">
				<input
					type="text"
					placeholder="Search Store"
					className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
				/>
				<button className="px-4 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
					Search
				</button>
			</div>
		</div>
	</div>
);
