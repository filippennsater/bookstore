import './App.css';

import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

import Login from './pages/user/login/Login';

function App() {
  return (
    
    <>
    <Router>
      <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/shop" exact Component={Shop} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/about" exact Component={About} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
