import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ConversationDetails =({ conversation }) => {
  return (
    <div className="w-3/4 p-4">
      {conversation ? (
        <div>
          <h2 className="text-2xl font-bold">{conversation.title}</h2>
          <p>{conversation.details}</p>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Select a conversation to see details</p>
        </div>
      )}
    </div>
  );
}

// Define PropTypes for ConversationDetails
ConversationDetails.propTypes = {
  conversation: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
  }),
};

export default ConversationDetails;