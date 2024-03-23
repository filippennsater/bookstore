import React from 'react'
import '../../App.css'
import AboutSection from './AboutSection';
import ValueSection from './ValueSection';
import OwnerSection from './OwnerSection';
import Footer from '../../components/footer/Footer';

function About (){
    return (
    <>
      <AboutSection/>
      <ValueSection/>
      <OwnerSection/>
      <Footer/>
    </>
    );
}

export default About;