import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './components/HomePage';

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default App;
