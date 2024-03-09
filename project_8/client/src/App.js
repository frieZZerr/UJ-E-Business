import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import {Products, Product} from './pages/Products';
import Payments from './pages/Payments';

const NavBar = () => (
  <div className="navbar">
    <img src="./logo192.png" alt="Logo" style={{ width: '30px', height: 'auto' }} />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/payments">Payments</Link></li>
      </ul>
    </nav>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="payments" element={<Payments />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
