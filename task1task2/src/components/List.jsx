import React from 'react';
import PropTypes from 'prop-types';

export const List = ({ listItems }) => {
  const listItem = listItems.map((item, idx) => (
    <li
      key={idx}
      className='p-2 border border-gray-200 rounded-lg shadow-sm text-center text-background bg-accent mb-4'
    >
      {item}
    </li>
  ));

  const noMatch = (
    <li
      key='no-match'
      className='p-2 border border-gray-200 rounded-lg shadow-sm text-center bg-red-200 mb-4'
    >
      0 Results
    </li>
  );

  const list = listItems.length > 0 ? listItem : noMatch;

  return <ul className='mt-4 space-y-4'>{list}</ul>;
};

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
