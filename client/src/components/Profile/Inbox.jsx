import React, { useState } from "react";

const vendorChats = [
	{ name: "Vendor 1", lastMessage: "Hello", details: "Details of Vendor 1" },
	{ name: "Vendor 2", lastMessage: "Hi", details: "Details of Vendor 2" },
];

const deliveryBoyChats = [
	{
		name: "Delivery Boy 1",
		lastMessage: "On my way",
		details: "Details of Delivery Boy 1",
	},
	{
		name: "Delivery Boy 2",
		lastMessage: "Delivered",
		details: "Details of Delivery Boy 2",
	},
];

const Inbox = () => {
	const [selectedChatType, setSelectedChatType] = useState("vendor");
	const [selectedChat, setSelectedChat] = useState(null);

	const chats = selectedChatType === "vendor" ? vendorChats : deliveryBoyChats;

	return (
		<div className="bg-white text-sm md:text-base h-screen mx-auto shadow-sm shadow-primary-100 rounded-lg flex flex-col md:flex-row">
			<div className="md:w-1/3 w-full bg-primary-100 p-4 rounded-l-lg md:rounded-r-none">
				<div className="flex justify-around mb-5 border-b">
					<button
						className={`px-4 py-2 ${
							selectedChatType === "vendor" ? "font-bold" : "text-black"
						}`}
						onClick={() => {
							setSelectedChatType("vendor");
							setSelectedChat(null);
						}}
					>
						Vendor
					</button>
					<button
						className={`px-4 py-2 ${
							selectedChatType === "deliveryBoy" ? "font-bold" : "text-black"
						}`}
						onClick={() => {
							setSelectedChatType("deliveryBoy");
							setSelectedChat(null);
						}}
					>
						Delivery Boy
					</button>
				</div>

				<div>
					{chats.map((chat, index) => (
						<div
							key={index}
							className="border-b py-2 cursor-pointer "
							onClick={() => setSelectedChat(chat)}
						>
							<p className="font-semibold">{chat.name}</p>
							<p className="text-gray-600">{chat.lastMessage}</p>
						</div>
					))}
				</div>
			</div>

			<div className="md:w-2/3 w-full md:ml-5 mt-5 md:mt-0  rounded-l-none p-4">
				{selectedChat ? (
					<div>
						<h3 className="font-bold text-lg mb-3">{selectedChat.name}</h3>
						<p>{selectedChat.details}</p>
					</div>
				) : (
					<p className="r text-gray-600 text-center">
						Select a chat to see details
					</p>
				)}
			</div>
		</div>
	);
};

export default Inbox;
