import { useFormContext } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import './../../styles/customPhoneInput.css'

const BillingAddressForm = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <div className="w-full">
            <h2 className="text-gray-900 font-bold text-xl mb-4">
                Billing Address
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-4 w-full">
                <div>
                    <label className="input-label">Full Name</label>
                    <input
                        type="text"
                        {...register('name')}
                        className="input"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="input-label">Phone Number</label>
                    <PhoneInput
                        defaultCountry="pk"
                        {...register('phoneNumber')}
                        className="custom-phone-input"
                        inputClassName="custom-phone-input"
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="input-label">Country</label>
                    <input
                        type="text"
                        {...register('country')}
                        className="input"
                    />
                    {errors.country && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.country.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="input-label">City</label>
                    <input
                        type="text"
                        {...register('city')}
                        className="input"
                    />
                    {errors.city && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.city.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="input-label">State</label>
                    <input
                        type="text"
                        {...register('state')}
                        className="input"
                    />
                    {errors.state && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.state.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="input-label">Zip Code</label>
                    <input
                        type="text"
                        {...register('zipCode')}
                        className="input"
                    />
                    {errors.zipCode && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.zipCode.message}
                        </p>
                    )}
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <label className="input-label">Address</label>
                    <input
                        type="text"
                        {...register('address')}
                        className="input"
                    />
                    {errors.address && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.address.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BillingAddressForm
