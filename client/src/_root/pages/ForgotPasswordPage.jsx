// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'

// const schema = z.object({
//     email: z.string().email('Invalid email address'),
// })

// const ForgotPasswordPage = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         resolver: zodResolver(schema),
//     })

//     const [error, setError] = useState('')

//     const onSubmit = (data) => {
//         setError('')
//         // Handle email submission logic here
//         console.log('Email submitted:', data.email)
//     }

//     return (
//         <div className="max-w-md mx-auto mt-16 p-8 border border-gray-300 rounded-md shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 text-center">
//                 Reset your password
//             </h2>
//             <p className="text-sm text-gray-600 mb-4">
//                 To reset your password, enter your email below and submit. An
//                 email will be sent to you with instructions about how to
//                 complete the process.
//             </p>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <label
//                         htmlFor="email"
//                         className="block text-sm font-medium"
//                     >
//                         Email Address
//                     </label>
//                     <input
//                         id="email"
//                         type="email"
//                         {...register('email', { required: true })}
//                         className={`input mt-1 block w-full px-3 py-2 border ${
//                             errors.email ? 'border-red-500' : 'border-gray-300'
//                         } rounded-md`}
//                         placeholder="Enter your email"
//                     />
//                     {errors.email && (
//                         <p className="text-red-500 text-xs mt-1">
//                             {errors.email.message}
//                         </p>
//                     )}
//                 </div>
//                 {error && (
//                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
//                         {error}
//                     </div>
//                 )}
//                 <button
//                     type="submit"
//                     className="w-full py-2 px-4 rounded-md bg-primary-500 hover:text-gray-100 hover:bg-primary-400 text-white mt-6"
//                 >
//                     Reset Password
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default ForgotPasswordPage


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCheckCircle } from "react-icons/fa"; // Importing an icon for the checkmark

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    setSuccessMessage("Please check your email inbox for a link to complete the reset.");
    // Handle email submission logic here
    console.log("Email submitted:", data.email);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8  rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset your password</h2>
      
      {successMessage && (
        <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-6" role="alert">
          <FaCheckCircle className="mr-2" />
          <p className="text-sm">{successMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            className={`input mt-1 block w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md bg-primary-500 hover:text-gray-100 hover:bg-primary-400 text-white mt-6"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
