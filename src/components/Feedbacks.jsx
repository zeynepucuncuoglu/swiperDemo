import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'; 

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/images/img_1.jpg';
import slide_image_2 from '../assets/images/img_2.jpg';
import slide_image_3 from '../assets/images/img_3.jpg';
import slide_image_4 from '../assets/images/img_4.jpg';



function Feedbacks() {
  const feedbacksData = [
    { image: slide_image_1, name: 'John Doe', command: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum' },
    { image: slide_image_2, name: 'John Doe', command: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' },
    { image: slide_image_3, name: 'John Doe', command: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' },
    { image: slide_image_4, name: 'John Doe', command: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' },
  
  ];

  return (
    <div className="container">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {feedbacksData.map((feedback, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="feedback-card">
              <img src={feedback.image} alt={`Feedback by ${feedback.name}`} className="feedback-image" />
              <div className="feedback-details">
                <h3 className="feedback-name">{feedback.name}</h3>
                <p className="feedback-command">{feedback.command}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Feedbacks;
