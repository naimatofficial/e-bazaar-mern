import { WISHLIST_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const wishlistsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getWishListById: builder.query({
			query: (userId) => ({
				url: `${WISHLIST_URL}/${userId}`,
			}),
			keepUnusedDataFor: 5,
		}),
		addWishList: builder.mutation({
			query: (data) => ({
				url: `${WISHLIST_URL}/add`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["WishList"],
		}),
		deleteWishList: builder.mutation({
			query: () => ({
				url: `${WISHLIST_URL}/remove`,
				method: "DELETE",
			}),
			providesTags: ["WishList"],
		}),
	}),
});

export const {
	useAddWishListMutation,
	useGetWishListByIdQuery,
	useDeleteWishListMutation,
} = wishlistsApiSlice;
