import phoneimg from "../../assets/vendor/phone.png";

const VandorApp = () => {
	return (
		<div className="flex lg:flex-row flex-col w-full bg-primary-100 p-8 my-[150px] rounded-xl">
			<div className="flex justify-center items-center p-1">
				<img src={phoneimg} alt="Phone" className="w-96 h-96 object-contain" />{" "}
			</div>
			<div className="flex flex-col justify-center items-center lg:w-1/2 w-full">
				<h2 className="lg:text-4xl font-bold md:text-3xl text-xl mb-4">
					Download Free Vendor App
				</h2>
				<p className="text-lg text-center">
					Download our free seller app and start reaching millions of buyers on
					the go! Easy setup, manage listings, and boost sales anywhere.
				</p>
			</div>
		</div>
	);
};

export default VandorApp;
