import { CATEGORIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: ({ category }) => ({
				url: CATEGORIES_URL,
				params: { category },
			}),
		}),
		getCategoryDetails: builder.query({
			query: (id) => ({
				url: `${CATEGORIES_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createCategory: builder.mutation({
			query: () => ({
				url: `${CATEGORIES_URL}`,
				method: "POST",
			}),
			invalidatesTags: ["Category"],
		}),
		updateCategory: builder.mutation({
			query: (data) => ({
				url: `${CATEGORIES_URL}/${data.categoryId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Category"],
		}),
		deleteCategory: builder.mutation({
			query: (categoryId) => ({
				url: `${CATEGORIES_URL}/${categoryId}`,
				method: "DELETE",
			}),
			providesTags: ["Category"],
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetCategoryDetailsQuery,
	useCreateCategoryMutation,
	useUpdateCategoryMutation,
	useDeleteCategoryMutation,
} = categoriesApiSlice;
