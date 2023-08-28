import React from 'react';
import Feedbacks from './components/Feedbacks';
import IntroCard from './components/IntroCard'; 
import SecondaryCard from './components/SecondaryCard';
import './App.css'; 
import image1 from './assets/images/house1.jpg'; 
import image2 from './assets/images/house2.jpg'; 
import image3 from './assets/images/house3.jpg'; 
import './index.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



function App() {
  return (
    <div className="app-container">
      <div className="background-circle"></div>
      <div className="row-container" >
      <IntroCard />
      </div>
      <h1 className="big-heading">Welcome to Our Feedbacks</h1>
      <div className="row-container" >
      <SecondaryCard />
      </div>
      <div className="row-container">
        <div className="right-column">
          <Feedbacks />
        </div>
        <div className="left-column">
          <h1 className="big-heading">Welcome to Our Feedbacks</h1>
           <div className="slider-controler">
           <div className="swiper-button-next slider-arrow">
           <FaArrowLeft />
      </div>
      <div className="swiper-button-prev slider-arrow">
        <FaArrowRight />
      </div>
  </div>
    
          
        </div>
      </div>
      <div >
      <div className="intro-card-container">

        <img src={image1} alt="Image1" className="intro-card secondary-card end-page-image" />
        <img src={image2} alt="Image2" className="intro-card secondary-card end-page-image" />
        <img src={image3} alt="Image3" className="intro-card secondary-card end-page-image" />
      </div>
      </div>
    </div>
  );
}

export default App;
