import React from 'react';
import { second } from '../constants/index';
import { FaUser, FaBriefcase, FaHeart } from 'react-icons/fa';

const icons = [FaUser, FaBriefcase, FaHeart];

const secondaryCard = () => {
  return (
    <div className={`intro-card-container`}>
      {second.map((stat, index) => (
        <div key={stat.id} className="intro-card secondary-card">
          
          <img src={stat.img} alt={stat.title} className="card-image" />

          <p className="intro-card-text">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default secondaryCard;
