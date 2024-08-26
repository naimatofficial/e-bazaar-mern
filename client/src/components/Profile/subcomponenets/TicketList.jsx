import React from 'react';
import PropTypes from 'prop-types';
import { AiFillEye, AiFillDelete } from 'react-icons/ai';

const TicketList = ({ id, topic, date, type, status, onView, onDelete }) => {
  return (
    <tr className='text-center'>
      <td className="p-4 border-b">{topic}</td>
      <td className="p-4 border-b">{date}</td>
      <td className="p-4 border-b">{type}</td>
      <td className="p-4 border-b  ">
        <div className='bg-red-50 w-16 text-red-500 rounded-full'>
        {status}
        </div>
        </td>
      <td className="p-4 border-b flex space-x-2 Items-center justify-center">
        <button className="text-blue-500" onClick={() => onView(id)}>
          <AiFillEye size={24} />
        </button>
        <button className="text-red-500" onClick={() => onDelete(id)}>
          <AiFillDelete size={24} />
        </button>
      </td>
    </tr>
  );
};

TicketList.propTypes = {
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TicketList;
