import PropTypes from "prop-types"; // Step 1: Import PropTypes
import { FaEdit, FaTrash } from "react-icons/fa";

const AddressCard = ({ address, onEdit, onDelete }) => {
    return address ? (
        <div className="p-4 shadow rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-full h-72 xl:w-full mx-auto">
            <div className="flex justify-between">
                <h3 className="font-bold text-md sm:text-lg mb-2">
                    {address.type} ({address.label})
                </h3>
                <div className="flex justify-end mt-2 space-x-2">
                    <button onClick={onEdit} className="text-blue-500">
                        <FaEdit />
                    </button>
                    <button onClick={onDelete} className="text-red-500">
                        <FaTrash />
                    </button>
                </div>
            </div>

            <p className="text-sm sm:text-base">
                <strong>Name</strong>: {address.name}
            </p>
            <p className="text-sm sm:text-base">
                <strong>Phone</strong>: {address.phone}
            </p>
            <p className="text-sm sm:text-base">
                <strong>City</strong>: {address.city}
            </p>
            <p className="text-sm sm:text-base">
                <strong>Zip code</strong>: {address.zip}
            </p>
            <p className="text-sm sm:text-base">
                <strong>Address</strong>: {address.address}
            </p>
            <p className="text-sm sm:text-base">
                <strong>Country</strong>: {address.country}
            </p>
        </div>
    ) : (
        <div>
            <h3>No address found</h3>
        </div>
    );
};

AddressCard.propTypes = {
    address: PropTypes.shape({
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }),
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AddressCard;
