import { apiSlice } from "./apiSlice";
import { CUSTOMERS_URL } from "../constants";

export const customerApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		customerLogin: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_URL}/login`,
				method: "POST",
				body: data,
			}),
		}),
		customerRegister: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_URL}/register`,
				method: "POST",
				body: data,
			}),
		}),
		customerLogout: builder.mutation({
			query: (token) => ({
				url: `${CUSTOMERS_URL}/logout`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		customerProfile: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
		getCustomers: builder.query({
			query: () => ({
				url: CUSTOMERS_URL,
			}),
			providesTags: ["Customer"],
			keepUnusedDataFor: 5,
		}),
		deleteCustomer: builder.mutation({
			query: (customerId) => ({
				url: `${CUSTOMERS_URL}/${customerId}`,
				method: "DELETE",
			}),
		}),
		getCustomerDetails: builder.query({
			query: (id) => ({
				url: `${CUSTOMERS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		updatecustomer: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_URL}/${data.customerId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Customer"],
		}),
	}),
});

export const {
	useCustomerLoginMutation,
	useCustomerLogoutMutation,
	useCustomerRegisterMutation,
	useCustomerProfileMutation,
	useGetCustomersQuery,
	useDeleteCustomerMutation,
	useUpdateCustomerMutation,
	useGetCustomerDetailsQuery,
} = customerApiSlice;
