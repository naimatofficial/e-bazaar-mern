/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { FaHeart } from 'react-icons/fa'
import toast from 'react-hot-toast'
import {
    useAddWishListMutation,
    useGetWishListByIdQuery,
} from '../../redux/slices/wishlistApiSlice'

const WishListIcon = ({ productId, onClose }) => {
    const { userInfo } = useSelector((state) => state.auth)

    const { refetch } = useGetWishListByIdQuery(userInfo?.user?._id)

    const navigate = useNavigate()

    const [addWishList, { isLoading, error, isSuccess }] =
        useAddWishListMutation()

    useEffect(() => {
        if (!isLoading && isSuccess) {
            onClose && onClose()
            toast.success('Product added to wishlist')
        }
    }, [isLoading, isSuccess, onClose])

    const addToWishListHandler = async () => {
        if (!userInfo || !userInfo?.user) {
            toast.warning('You need to Sign in to view this feature.')
            return navigate('/customer/auth/sign-in')
        }

        try {
            const customerId = userInfo?.user?._id
            await addWishList({ customerId, productId })
            refetch()
        } catch (err) {
            toast.error(error?.data?.message)
            console.log(err)
        }
    }

    return (
        <div>
            <button
                onClick={addToWishListHandler}
                className="btn border border-gray-300 text-primary-500 py-2 px-4 rounded flex items-center justify-center"
            >
                <FaHeart className="mr-2" />
            </button>
        </div>
    )
}

export default WishListIcon
