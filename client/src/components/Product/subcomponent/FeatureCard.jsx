import PropTypes from 'prop-types'

const FeatureCard = ({ features }) => {
    return (
        <div className="bg-white p-6 rounded shadow space-y-2 flex flex-col gap-2 mr-18">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-4 text-gray-600 "
                >
                    <feature.Icon className="text-inherit" />
                    <span className="text-sm">{feature.text}</span>
                </div>
            ))}
        </div>
    )
}

FeatureCard.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
            Icon: PropTypes.elementType.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default FeatureCard
