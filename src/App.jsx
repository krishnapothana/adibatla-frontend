import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BusinessDetail from './Pages/BusinessDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business/:id" element={<BusinessDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
