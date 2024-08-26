import React from "react";
import { Rating } from "@material-tailwind/react";

const reviews = [
	{
		id: 1,
		name: "fatema subarna",
		rating: 5,
		review: "Excellent product!",
		date: "Apr-13-2022",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1I7Lj7aaYloLeBhyUqSpP_HLwjzdMiD5CTA&s",
	},
	{
		id: 2,
		name: "john doe",
		rating: 4,
		review: "Very good!",
		date: "May-15-2022",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1I7Lj7aaYloLeBhyUqSpP_HLwjzdMiD5CTA&s",
	},
	{
		id: 3,
		name: "jane smith",
		rating: 5,
		review:
			"Average quality. sljdflksjdlkfj sdjflksdjflkj sdkfjksldjflksdjfkljsd fjsdlkjflksdjflksdj ll skfjsdklj flksdjkf jdkfjowurowueroiuw eioruwioeurowueoiru weir iweuroiweuoiruweoiruoiw eru woieuslkdjfklsdjl fks jdkfj lsdjflks fjsdklf jlkdsjflksdjflksd fklsdkfjsdlkklfjs",
		date: "Jun-20-2022",
		avatar: "https://via.placeholder.com/40",
	},
	{
		id: 4,
		name: "mike jones",
		rating: 2,
		review: "Below expectations.",
		date: "Jul-11-2022",
		avatar: "https://via.placeholder.com/40",
	},
];

const calculateRatingPercentage = (rating) => {
	const totalReviews = reviews.length;
	const ratingCount = reviews.filter(
		(review) => review.rating === rating
	)?.length;
	return (ratingCount / totalReviews) * 100;
};

const ProductReviews = () => {
	const averageRating = Math.round(
		reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
	);

	return (
		<div className="w-full mx-auto p-4 bg-white rounded-md shadow-gray-50 shadow-md mb-8">
			<div className="text-center mb-4">
				<h1 className="text-3xl font-bold">{averageRating.toFixed(2)}</h1>
				<Rating readonly value={Number(averageRating)} />
				<p className="text-gray-600">{reviews.length} Ratings</p>
			</div>
			<div className="mb-4 px-8">
				{["Excellent", "Good", "Average", "Below Average", "Poor"].map(
					(label, index) => {
						const rating = 5 - index;
						const percentage = calculateRatingPercentage(rating);
						return (
							<div
								key={index}
								className="flex items-center justify-between gap-4 mb-2"
							>
								<p className="w-36">{label}</p>
								<div className="flex-1 bg-gray-200 h-1 rounded-lg overflow-hidden">
									<div
										className="bg-primary-500 h-full"
										style={{ width: `${percentage}%` }}
									></div>
								</div>
							</div>
						);
					}
				)}
			</div>
			<div className="py-2">
				<h2 className="text-xl font-semibold mb-4 text-center bg-gray-100 py-2 px-4">
					Product Review
				</h2>
				{reviews.map((review) => (
					<div
						key={review.id}
						className="flex justify-between items-start mb-4 py-2 border-b"
					>
						<div className="flex items-center gap-4">
							<img
								src={review.avatar}
								alt={`${review.name} avatar`}
								className="w-10 h-10 object-contain rounded-full"
							/>
							<div>
								<h3 className="font-bold">{review.name}</h3>
								<Rating readonly value={Math.round(review.rating)} />
							</div>
						</div>
						<div className="w-1/2 text-left">
							<p>{review.review}</p>
						</div>
						<p className="text-gray-500 text-sm">{review.date}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductReviews;
