import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
        .string()
        .min(8, 'Password must be at least 8 characters'),
})

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const [error, setError] = useState('')

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match')
        } else {
            setError('')
            // Handle password reset logic here
            console.log('Password reset successfully')
        }
    }

    return (
        <div className="max-w-md mx-auto mt-16 p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Reset Password
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium"
                    >
                        New Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: true })}
                        className={`input mt-1 block w-full px-3 py-2 border ${
                            errors.password
                                ? 'border-red-500'
                                : 'border-gray-300'
                        } rounded-md`}
                        placeholder="Enter new password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        {...register('confirmPassword', { required: true })}
                        className={`input mt-1 block w-full px-3 py-2 border ${
                            errors.confirmPassword
                                ? 'border-red-500'
                                : 'border-gray-300'
                        } rounded-md`}
                        placeholder="Confirm new password"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                        {error}
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md  bg-primary-500 hover:text-gray-100 hover:bg-primary-400 text-white mt-6"
                >
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ResetPassword
