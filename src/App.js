import './App.css';

import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Market from './pages/market/Market';
import Favorites from './pages/favorites/Favorites';
import About from './pages/about/About';

function App() {
  return (
    
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/market" exact Component={Market} />
          <Route path="/favorites" exact Component={Favorites} />
          <Route path="/about" exact Component={About} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
