import React from 'react'
import '../../App.css'
import HomeSection from './HomeSection';
import HomeButtonSection from './HomeButtonSection';
import HomeTransitionSection from './HomeTransitionSection';
import Footer from '../../components/footer/Footer';

function Home (){
    return (
    <>
      <HomeSection/>
      <HomeButtonSection/>
      <HomeTransitionSection/>
      <Footer/>
    </>
    );
}

export default Home;