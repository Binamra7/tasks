import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import { Search, Users } from './pages';
import { countries } from './constants/countriesList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='mt-10 flex justify-around items-center max-w-[50%] m-auto'>
              <Link
                className='w-60 h-32 bg-accent m-16 p-4 rounded-lg text-center'
                to='/search'
              >
                Search (Task1)
              </Link>
              <Link
                className='w-60 h-32 bg-accent m-16 p-4 rounded-lg text-center'
                to='/users'
              >
                Users (Task2)
              </Link>
            </div>
          }
        />
        <Route path='/search' element={<Search items={countries} />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
