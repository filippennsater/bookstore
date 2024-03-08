import React from 'react'
import '../../App.css'
import AboutSection from './AboutSection';
import ValueSection from './ValueSection';
import Footer from '../../components/footer/Footer';

function About (){
    return (
    <>
      <AboutSection/>
      <ValueSection/>
      <Footer/>
    </>
    );
}

export default About;