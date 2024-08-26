import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const ContactForm = () => {
	return (
		<div className="flex justify-center items-center ">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
				<h2 className="text-2xl font-bold mb-6 text-center">
					Send us a message
				</h2>
				<form>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
						<div>
							<label className="block text-gray-700">Your name</label>
							<input type="text" placeholder="John Doe" className="input" />
						</div>
						<div>
							<label className="block text-gray-700">Email address</label>
							<input
								type="email"
								placeholder="Enter email address"
								className="input"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
						<div className="mb-4">
							<label className="input-label">Phone Number</label>
							<PhoneInput
								country={"pk"}
								inputClass="input"
								inputStyle={{
									appearance: "none",
									border: "1px solid #e2e8f0", // border-gray-300
									borderRadius: "0.375rem", // rounded
									width: "92%", // w-full
									padding: "0.75rem 1.5rem", // py-2 px-3
									marginLeft: "2rem",
									color: "#4a5568", // text-gray-700
									lineHeight: "1.25", // leading-tight
									outline: "none",
									boxShadow: "0 0 0 1px #c6f6d5", // focus:outline-1 outline-green-100
									transition: "box-shadow 0.2s ease-in-out",
								}}
								placeholder="Enter phone number"
							/>
						</div>
						<div>
							<label className="block text-gray-700">Subject</label>
							<input type="text" placeholder="Short title" className="input" />
						</div>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700">Message</label>
						<textarea
							placeholder="Type your message here..."
							className="input h-32"
						/>
					</div>
					<div className="mb-4">
						<div className="g-recaptcha" data-sitekey="your_site_key"></div>
					</div>
					<div className="text-center">
						<button type="submit" className="btn primary-btn">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
