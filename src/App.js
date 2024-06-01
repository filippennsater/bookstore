import './App.css';

import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Suggestion from './pages/suggestion/Suggestion';

import Profile from './pages/user/profile/Profile';
import Login from './pages/user/login/Login';
import Logout from './pages/user/logout/Logout';
import Signup from './pages/user/signup/Signup';

import Cart from './pages/cart/Cart';
import SingleItem from './pages/singleItem/SingleItem';

import PodcastList from './pages/podcastList/PodcastList';
import Podcast from './pages/podcast/Podcast';

import { connect } from "react-redux";

function App({ current }) {
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
          <Route path="/suggestion" exact Component={Suggestion} />
          
          <Route path="/profile" exact Component={Profile} />
          <Route path="/login" exact Component={Login} />
          <Route path="/logout" exact Component={Logout} />
          <Route path="/signup" exact Component={Signup} />

          <Route path="/cart" exact Component={Cart} />
          <Route path="/product/:id" element={current ? <SingleItem /> : <Navigate to="/shop" />}/>

          <Route path="/podcastList" exact Component={PodcastList} />
          <Route path="/podcast" exact Component={Podcast} />
        </Routes>
      </Router>
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
