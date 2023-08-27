import React from 'react';
import { intros } from '../constants/index';

import { FaUser, FaBriefcase, FaHeart } from 'react-icons/fa';

const icons = [FaUser, FaBriefcase, FaHeart];

const IntroCard = () => {
  return (
    <div className={`intro-card-container`}>
      {intros.map((stat, index) => (
        <div key={stat.id} className="intro-card">
          {React.createElement(icons[index], { className: 'icon' })}
          <p className="intro-card-text">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IntroCard;
