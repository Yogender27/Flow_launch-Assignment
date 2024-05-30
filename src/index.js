import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Products from './Components/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Products/>} />
    <Route path="/details/:productId" element={<Details />} />
  </Routes>
</Router>
);

