import React from 'react';
import PropTypes from 'prop-types';

export const InputBox = ({ value, _onChange}) => {
  return (
    <input
      type='text'
      placeholder='Search'
      value={value}
      onChange={_onChange}
      className='w-full p-2 mb-4 border border-gray-300 rounded-xl'
    />
  );
};

InputBox.propTypes = {
  value: PropTypes.string.isRequired,
  _onChange: PropTypes.func.isRequired,
}