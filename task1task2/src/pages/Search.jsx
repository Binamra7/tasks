import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Container, InputBox, List } from '../components';

export const Search = ({ items }) => {
  const [searchQuery, _setSearchQuery] = useState('');
  const [filteredItems, _setFilteredItems] = useState(items);

  // eslint-disable-next-line
  const debouncedFilterItems = useCallback(
    debounce((query) => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      _setFilteredItems(filtered);
    }, 300),
    [items]
  );

  const _handleChange = (e) => {
    const value = e.target.value;
    _setSearchQuery(value);
    debouncedFilterItems(value);
  };

  useEffect(() => {
    return () => {
      debouncedFilterItems.cancel();
    };
  }, [debouncedFilterItems]);

  return (
    <div className='max-w-md mx-auto p-4'>
      <h1 className='text-2xl font-bold text-center my-6'>Search Countries</h1>
      <InputBox value={searchQuery} _onChange={_handleChange} />
      <Container>
        <List listItems={filteredItems} />
      </Container>
    </div>
  );
};

Search.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
