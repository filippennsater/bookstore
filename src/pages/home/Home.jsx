import React from 'react'
import '../../App.css'
import HomeSection from './HomeSection';
import HomeButtonSection from './HomeButtonSection';
import HomeTransitionSection from './HomeTransitionSection';
import FlowerSection from './FlowerSection';
import PearSection from './PearSection';
import GreenSection from './GreenSection';
import WhiteSection from './WhiteSection';
import PurpleSection from './PurpleSection';
import Footer from '../../components/footer/Footer';

function Home (){
    return (
    <>
      <HomeSection/>
      <HomeButtonSection/>
      <HomeTransitionSection/>
      <FlowerSection/>
      <PearSection/>
      <GreenSection/>
      <WhiteSection/>
      <PurpleSection/>
      <Footer/>
    </>
    );
}

export default Home;