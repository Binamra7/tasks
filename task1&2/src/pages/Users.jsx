import React, { useState } from 'react';
import { Container, List, Spinner } from '../components';

export const Users = () => {
  const [users, _setUsers] = useState([]);
  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState('');

  const _fetchUsers = async () => {
    try {
      _setLoading(true);
      const userData = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = await userData.json();
      const userName = data.map((user) => user.name);
      _setUsers(userName);
    } catch (error) {
      _setError('Error fetching users');
      console.error(error);
    } finally {
      _setLoading(false);
    }
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <button
        onClick={_fetchUsers}
        className='px-6 py-3 my-4 min-w-full text-center bg-blue-500 text-background font-bold rounded-lg shadow-lg hover:bg-accent hover:shadow-2xl'
      >
        {loading ? <Spinner /> : 'Fetch Users'}
      </button>

      <Container>
        {error.length > 0 ? (
          <List listItems={[error]} />
        ) : (
          <List listItems={users} />
        )}
      </Container>
    </div>
  );
};
