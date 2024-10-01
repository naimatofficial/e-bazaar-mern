import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useVendorLoginMutation } from '../../redux/slices/vendorsApiSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../../redux/slices/authSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'

// Define the Zod schema
const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
})

const VendorLoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [vendorLogin, { isLoading }] = useVendorLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Integrating Zod schema into useForm hook
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    useEffect(() => {
        if (userInfo && userInfo?.user?.role === 'vendor') {
            navigate('/')
        }
    }, [navigate, userInfo])

    const onSubmit = async (data) => {
        const { email, password } = data
        try {
            const res = await vendorLogin({ email, password }).unwrap()
            dispatch(setCredentials({ ...res }))
            toast.success('Vendor login successfully')
            navigate('/')
        } catch (err) {
            console.error(err?.data?.message)
            toast.error(err?.data?.message || err.error)
        }
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="w-full p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out">
            <div className="text-center text-blue-gray-800 mb-8">
                <h2 className="text-2xl font-bold mb-4">Sign in</h2>
                <h3 className="text-xl font-bold mb-4">
                    Welcome back to vendor login
                </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="input-label">
                        Your Email
                    </label>
                    <input
                        id="email"
                        type="text"
                        {...register('email')}
                        className={`input ${
                            errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="email@address.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="input-label">Password</label>
                    <div className="relative">
                        <input
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            className={`input ${
                                errors.password ? 'border-red-500' : ''
                            }`}
                            placeholder="Minimum 8 characters long"
                        />
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full btn primary-btn">
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default VendorLoginForm
