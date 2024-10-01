import { Outlet, useNavigate } from 'react-router-dom'
import ProfileLeftBar from '../../components/Profile/ProfileLeftBar'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetCustomerDetailsQuery } from '../../redux/slices/customersApiSlice'
import Loader from '../../components/Loader'

const ProfilePage = () => {
    const { userInfo } = useSelector((state) => state.auth)

    const { data, isLoading } = useGetCustomerDetailsQuery(
        userInfo?.user?._id,
        {
            skip: !userInfo?.user?._id,
        }
    )

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo && !userInfo?.user) {
            navigate('/customer/auth/sign-in')
        }
    }, [navigate, userInfo])

    return isLoading ? (
        <Loader />
    ) : data && data?.doc && userInfo ? (
        <div className="flex gap-4 lg:p-8 md:p-6 p-4 w-full">
            <ProfileLeftBar user={data?.doc} />
            <div className="w-full px-2">
                <Outlet />
            </div>
        </div>
    ) : (
        <p>Customer details not found.</p>
    )
}

export default ProfilePage
