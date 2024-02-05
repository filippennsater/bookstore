import React from 'react'
import '../../App.css'
import HomeSection from './HomeSection';
import HomeButtonSection from './HomeButtonSection';
import HomeTransitionSection from './HomeTransitionSection';
import FlowerSection from './FlowerSection';
import Footer from '../../components/footer/Footer';

function Home (){
    return (
    <>
      <HomeSection/>
      <HomeButtonSection/>
      <HomeTransitionSection/>
      <FlowerSection/>
      <Footer/>
    </>
    );
}

export default Home;