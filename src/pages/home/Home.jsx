import React from 'react'
import '../../App.css'
import HomeSection from './HomeSection';
import HomeButtonSection from './HomeButtonSection';
import HomeTransitionSection from './HomeTransitionSection';
import FlowerSection from './FlowerSection';
import PearSection from './PearSection';
import Footer from '../../components/footer/Footer';

function Home (){
    return (
    <>
      <HomeSection/>
      <HomeButtonSection/>
      <HomeTransitionSection/>
      <FlowerSection/>
      <PearSection/>
      <Footer/>
    </>
    );
}

export default Home;