import React from 'react';
import '../../App.css';
import './WhiteSection.scss';

import MediumCard from '../../components/MediumCard/MediumCard';
import '../../components/MediumCard/MediumCard.scss';




function WhiteSection() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };


    return (

    <div className='white-container'>





    </div>

    )
}

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default WhiteSection