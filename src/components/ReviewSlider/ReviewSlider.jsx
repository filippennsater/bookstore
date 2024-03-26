import React from "react";
import { Link } from "react-router-dom";
import "./ReviewSlider.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="revCardContainer">
              <div className='revImageContainer'>
                <img src={d.img} alt="" className="revImage" />
              </div>

              <div className="revInfoContainer">
                <div className="reviewHeader">{d.name}</div>
                <div className="reviewText">{d.review}</div>
              </div>
                
                <button className='revButton cursor-pointer'>Read More</button>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


const data = [
  {
    name: `Daniel Larsson`,
    img: `/images/reviews/Daniel_Larsson.jpg`,
    review: `Impressive selection of books across various genres, ensuring there's something for everyone.`
  },
  {
    name: `Ellie Andersson`,
    img: `/images/reviews/Ellie_Andersson.jpg`,
    review: `Fantastic customer service that's responsive and helpful whenever I have questions or concerns.`
  },
  {
    name: `Maria Lindberg`,
    img: `/images/reviews/Maria_Lindberg.jpg`,
    review: `Great prices and frequent discounts make it easy to indulge in my reading passion without breaking the bank.`
  },
  {
    name: `Elin Zheng`,
    img: `/images/reviews/Elin_Zheng.jpg`,
    review: `The online store's user-friendly interface makes browsing and purchasing books a breeze!`
  },
  {
    name: `Johan Bergström`,
    img: `/images/reviews/Johan_Bergstrom.jpg`,
    review: `I love the competitive prices and regular promotions that make shopping for books here a bargain hunter's dream.`
  },
  {
    name: `Andreas Adebayo`,
    img: `/images/reviews/Andreas_Adebayo.jpg`,
    review: `The vast selection of titles means I always find what I'm looking for, and often discover new favorites too!`
  },

];

export default ReviewSlider;