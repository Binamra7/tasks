import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Search, Users } from './pages';
import { countries } from './constants/countriesList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>Hello world</h1>} />
        <Route path='/search' element={<Search items={countries} />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
