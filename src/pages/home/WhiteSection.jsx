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

            
<div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
           
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>

    </div>

    )
}

export default WhiteSection