import ContactForm from "../../components/shared/ContactFrom";
import img from "./../../assets/contact/contact.png";

const ContactUsPage = () => {
	return (
		<div className="flex flex-col w-full">
			<h1 className="lg:text-2xl text-xl text-center font-bold">Contact Us</h1>
			<div className="flex lg:flex-row flex-col lg:p-8 md:p-6 p-4">
				<div className="">
					<img
						src={img}
						alt="contact us"
						className="p-8 w-[40rem] object-contain "
					/>
				</div>
				<div className="">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactUsPage;
