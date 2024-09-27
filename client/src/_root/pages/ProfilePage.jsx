import { Outlet, useNavigate } from 'react-router-dom'
import ProfileLeftBar from '../../components/Profile/ProfileLeftBar'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetCustomerDetailsQuery } from '../../redux/slices/customersApiSlice'
import Loader from '../../components/Loader'

const ProfilePage = () => {
    const { user } = useSelector((state) => state.auth.userInfo)

    const { data, isLoading } = useGetCustomerDetailsQuery(user._id, {
        skip: !user._id,
    })

    const navigate = useNavigate()

    useEffect(() => {
        if (!user && user._id) {
            navigate('/')
        }
    }, [navigate, user])

    return isLoading ? (
        <Loader />
    ) : data && data?.doc ? (
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
