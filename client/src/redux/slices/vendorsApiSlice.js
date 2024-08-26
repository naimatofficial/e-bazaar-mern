import { apiSlice } from "./apiSlice";
import { VENDORS_URL } from "../constants";

export const vendorsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		vendorLogin: builder.mutation({
			query: (data) => ({
				url: `${VENDORS_URL}/login`,
				method: "POST",
				body: data,
			}),
		}),
		vendorRegister: builder.mutation({
			query: (data) => ({
				url: `${VENDORS_URL}`,
				method: "POST",
				body: data,
				formData: true,
			}),
		}),
		vendorLogout: builder.mutation({
			query: (token) => ({
				url: `${VENDORS_URL}/logout`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		getVendors: builder.query({
			query: () => ({
				url: VENDORS_URL,
			}),
			providesTags: ["Vendor"],
			keepUnusedDataFor: 5,
		}),
		deleteVendor: builder.mutation({
			query: (vendorId) => ({
				url: `${VENDORS_URL}/${vendorId}`,
				method: "DELETE",
			}),
		}),
		getVendorDetails: builder.query({
			query: (id) => ({
				url: `${VENDORS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		updateVendor: builder.mutation({
			query: (data) => ({
				url: `${VENDORS_URL}/${data.vendorId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Vendor"],
		}),
	}),
});

export const {
	useVendorLoginMutation,
	useVendorLogoutMutation,
	useVendorRegisterMutation,
	useGetVendorsQuery,
	useDeleteVendorMutation,
	useUpdateVendorMutation,
	useGetVendorDetailsQuery,
} = vendorsApiSlice;
