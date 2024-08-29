import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return (
    <div className='w-full max-h-[70vh] overflow-auto p-6 border rounded-xl bg-accent'>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
