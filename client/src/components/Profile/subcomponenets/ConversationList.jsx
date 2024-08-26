import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ConversationList = ({ setSelectedConversation })=> {
  // Example conversations data
  const conversations = [];

  return (
    <div className="w-1/4 p-4 border-r">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Vendor</h2>
        <h2 className="text-lg">Deliveryman</h2>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full mb-4 p-2 border rounded"
      />
      {conversations.length === 0 ? (
        <div className="text-center text-gray-500">
          <img
            src="/path/to/your/image.png"
            alt="No Conversations"
            className="mx-auto"
          />
          <p>You haven't any conversation yet</p>
        </div>
      ) : (
        <ul>
          {conversations.map((conversation, index) => (
            <li
              key={index}
              className="p-2 border-b cursor-pointer"
              onClick={() => setSelectedConversation(conversation)}
            >
              {conversation.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ConversationList.propTypes = {
  setSelectedConversation: PropTypes.func, // Ensures setSelectedConversation is a function
};

// Define default props
ConversationList.defaultProps = {
  setSelectedConversation: () => {}, // Provides a noop function as default
};

export default ConversationList;
