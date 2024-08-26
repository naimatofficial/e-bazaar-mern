import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: (query) => {
				return {
					url: PRODUCTS_URL,
					params: query,
				};
			},
		}),
		getProductDetails: builder.query({
			query: (id) => ({
				url: `${PRODUCTS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createProduct: builder.mutation({
			query: () => ({
				url: `${PRODUCTS_URL}`,
				method: "POST",
			}),
			invalidatesTags: ["Product"],
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Products"],
		}),
		uploadProductImage: builder.mutation({
			query: (data) => ({
				url: `/api/upload`,
				method: "POST",
				body: data,
			}),
		}),
		deleteProduct: builder.mutation({
			query: (productId) => ({
				url: `${PRODUCTS_URL}/${productId}`,
				method: "DELETE",
			}),
			providesTags: ["Product"],
		}),
		createReview: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productId}/reviews`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Product"],
		}),
		getTopRatedProducts: builder.query({
			query: () => `${PRODUCTS_URL}/top-rated`,
			keepUnusedDataFor: 5,
		}),
		getLatestProducts: builder.query({
			query: () => `${PRODUCTS_URL}/latest-product`,
			keepUnusedDataFor: 5,
		}),
		getFeaturedProducts: builder.query({
			query: () => `${PRODUCTS_URL}/feature-product`,
			keepUnusedDataFor: 5,
		}),
		getFeaturedDeals: builder.query({
			query: () => `/feature-deals`,
			keepUnusedDataFor: 5,
		}),
		getProductSuggestions: builder.query({
			query: (query) => `${PRODUCTS_URL}/search?q=${query}`,
		}),
		getFlashDeals: builder.query({
			query: () => `/api/flash-deals`,
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductDetailsQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useUploadProductImageMutation,
	useDeleteProductMutation,
	useCreateReviewMutation,
	useGetTopRatedProductsQuery,
	useGetFeaturedProductsQuery,
	useGetFeaturedDealsQuery,
	useGetLatestProductsQuery,
	useGetProductSuggestionsQuery,
	useGetFlashDealsQuery,
} = productsApiSlice;
