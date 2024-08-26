const Loader = () => {
	return (
		// <div className="flex-center">
		// 	<Spinner color="green" className="h-12 w-12" />
		// </div>
		<div className="flex items-center justify-center min-h-screen p-5 bg-transparent min-w-screen">
			<div className="flex space-x-2 animate-pulse">
				<div className="w-3 h-3 bg-primary-400 rounded-full"></div>
				<div className="w-3 h-3 bg-primary-400 rounded-full"></div>
				<div className="w-3 h-3 bg-primary-400  rounded-full"></div>
			</div>
		</div>
	);
};

export default Loader;
