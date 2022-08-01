import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import { Routes,Route } from "react-router-dom";
import Rent from './Rent';
import Sell from './Sell';
import Buy from './Buy';
import Login from './Login';
import Register from './Register';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Rent />}/>
        <Route path="/sell" element={<Sell />}/>
        <Route path="/buy" element={<Buy />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  )
}
