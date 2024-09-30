import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useUpdateCustomerMutation } from '../../redux/slices/customersApiSlice'
import AddressCard from './subcomponenets/AddressCard'
import toast from 'react-hot-toast'

const MyAddress = () => {
    const { userInfo } = useSelector((state) => state.auth)
    const user = userInfo?.user
    const { permanentAddress } = user || {}

    // State for modal visibility and form data
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        zip: '',
        address: '',
        country: '',
    })

    // State to hold the addresses
    const [addresses, setAddresses] = useState([permanentAddress])

    // Fetch userId from local storage and store it in customerId
    const customerId = user._id

    const handleClick = () => {
        setIsModalOpen(true) // Open the modal
    }

    const handleClose = () => {
        setIsModalOpen(false) // Close the modal
        setFormData({
            name: '',
            phone: '',
            city: '',
            zip: '',
            address: '',
            country: '',
        }) // Reset form data
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const [updateCustomer] = useUpdateCustomerMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!customerId) {
            console.error('Customer ID not found')
            return
        }

        try {
            const result = await updateCustomer({
                customerId,
                address: formData,
            }).unwrap()
            console.log('Address updated:', result)
            toast.success('Address updated successfully!')

            // Get the current user data from local storage
            const userFromStorage = JSON.parse(localStorage.getItem('user'))

            // Update the addresses array in the user object
            const updatedUser = {
                ...userFromStorage,
                permanentAddress: formData, // Assuming you want to save it as 'permanentAddress'
            }

            // Save the updated user object to local storage
            localStorage.setItem('userInfo', JSON.stringify(updatedUser))

            // Update the addresses state with the new address
            const updatedAddresses = [...addresses, formData]
            setAddresses(updatedAddresses)

            handleClose()
        } catch (error) {
            console.error('Failed to update address:', error)
            toast.error('Failed to update address. Please try again.')
        }
    }

    return (
        <div className="mx-auto rounded-lg p-8 shadow-sm shadow-primary-100">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Address</h2>
                <button
                    onClick={handleClick}
                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                >
                    Add Address
                </button>
            </div>
            <div className="h-[50vh] flex flex-col items-center p-4">
                {addresses.length > 0 ? (
                    addresses.map((address, index) => (
                        <div key={index} className="p-2 w-full mb-4">
                            <AddressCard
                                address={address}
                                onEdit={() => console.log('Edit', address)}
                                onDelete={() => console.log('Delete', address)}
                            />
                        </div>
                    ))
                ) : (
                    <h3 className="text-gray-800 text-center text-lg">
                        No Address found!
                    </h3>
                )}
            </div>

            {/* Modal Component */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                        <h3 className="text-xl font-bold mb-4">Add Address</h3>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-wrap"
                        >
                            <div className="mb-4 w-1/2 pr-2">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3"
                                />
                            </div>
                            <div className="mb-4 w-1/2 pl-2">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3"
                                />
                            </div>
                            <div className="mb-4 w-1/2 pr-2">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3"
                                />
                            </div>
                            <div className="mb-4 w-1/2 pl-2">
                                <label>Zip Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3"
                                />
                            </div>
                            <div className="mb-4 w-1/2 pr-2">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3"
                                />
                            </div>
                            <div className="mb-4 w-1/2 pl-2">
                                <label>Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3"
                                />
                            </div>
                            <div className="w-full flex justify-between mt-4">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="mt-2 bg-red-500 text-white py-2 px-4 rounded-md"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyAddress
