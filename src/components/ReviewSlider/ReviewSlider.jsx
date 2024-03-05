import React from "react";
import { Link } from "react-router-dom";
import "./ReviewSlider.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ReviewSlider(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <div className='w-3/4 m-auto'>
            <div className="mt-20">
                <Slider {...settings}>
                {data.map((d) => (
                    <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
                    <div className='h-56 bg-violet-900 flex justify-center items-center rounded-t-xl'>
                        <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                    </div>
        
                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                        <p className="text-xl font-semibold">{d.name}</p>
                        <p className="text-center">{d.review}</p>
                        <button className='bg-violet-900 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>        
      </div>
    );
}


const data = [
    {
      name: `John Morgan`,
      img: `/images/reviews/John_Morgan.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson`,
      img: `/images/reviews/Ellie_Anderson.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo`,
      img: `/images/reviews/Nia_Adebayo.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie`,
      img: `/images/reviews/Rigo_Louie.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams`,
      img: `/images/reviews/Mia_Williams.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    
  ];

export default ReviewSlider;