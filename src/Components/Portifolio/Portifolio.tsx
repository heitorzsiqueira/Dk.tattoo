import React from 'react';
import './Portifolio.css';

interface TattooProps {
  image: string;
  category: string;
  title: string;
}

const TattooCard: React.FC<TattooProps> = ({ image, category, title }) => {
  return (
    <div className="tattoo-card">
      <div className="image-container">
        <img src={image} alt={title} className="tattoo-img" />
        <div className="tattoo-info">
          <span className="tattoo-cat">{category}</span>
          <h3 className="tattoo-name">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TattooCard;