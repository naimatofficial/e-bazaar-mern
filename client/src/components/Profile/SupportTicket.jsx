import React, { useState } from "react";
import TicketList from "./subcomponenets/TicketList";

const SupportTicket = () => {
	const [tickets, setTickets] = useState([
		{
			id: 1,
			topic: "ticket 2",
			date: "2024-07-19 05:39 PM",
			type: "Complaint",
			status: "Open",
		},
		{
			id: 2,
			topic: "ticket 1",
			date: "2024-07-19 05:38 PM",
			type: "Partner request",
			status: "Open",
		},
		{
			id: 3,
			topic: "ticket 3",
			date: "2024-07-19 05:40 PM",
			type: "Complaint",
			status: "Close",
		},
		{
			id: 4,
			topic: "ticket 4",
			date: "2024-07-19 05:41 PM",
			type: "Complaint",
			status: "Open",
		},
		{
			id: 5,
			topic: "ticket 5",
			date: "2024-07-19 05:42 PM",
			type: "Complaint",
			status: "Open",
		},
		{
			id: 6,
			topic: "ticket 6",
			date: "2024-07-19 05:43 PM",
			type: "Complaint",
			status: "Close",
		},
		{
			id: 7,
			topic: "ticket 7",
			date: "2024-07-19 05:44 PM",
			type: "Complaint",
			status: "Open",
		},
		{
			id: 8,
			topic: "ticket 8",
			date: "2024-07-19 05:45 PM",
			type: "Complaint",
			status: "Open",
		},
		{
			id: 9,
			topic: "ticket 9",
			date: "2024-07-19 05:46 PM",
			type: "Complaint",
			status: "Close",
		},
		{
			id: 10,
			topic: "ticket 10",
			date: "2024-07-19 05:47 PM",
			type: "Complaint",
			status: "Open",
		},
	]);

	const handleView = (id) => {
		console.log(`View ticket with id: ${id}`);
	};

	const handleDelete = (id) => {
		setTickets(tickets.filter((ticket) => ticket.id !== id));
	};

	return (
		<div className="w-full border mx-auto rounded-lg p-8 shadow-sm shadow-primary-100 sm:p-2 md:p-4 lg:p-6">
			<div className="flex justify-between">
				<h1 className="text-xl font-bold sm:text-lg md:text-xl lg:text-2xl">
					Support Ticket
				</h1>
				<button className="btn primary-btn">Add New Ticket</button>
			</div>

			{tickets ? (
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white">
						<thead>
							<tr>
								<th className="p-4 border-b sm:hidden md:table-cell">Topic</th>
								<th className="p-4 border-b">Submission Date</th>
								<th className="p-4 border-b sm:hidden lg:table-cell">Type</th>
								<th className="p-4 border-b">Status</th>
								<th className="p-4 border-b">Action</th>
							</tr>
						</thead>
						<tbody>
							{/* TicketList components */}
							{tickets.map((ticket) => (
								<TicketList
									key={ticket.id}
									id={ticket.id}
									topic={ticket.topic}
									date={ticket.date}
									type={ticket.type}
									status={ticket.status}
									onView={handleView}
									onDelete={handleDelete}
								/>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div>No Ticket found!</div>
			)}
		</div>
	);
};

export default SupportTicket;
