import React from 'react';
import './Hero.css'
import Slider from './Slider';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>BHUTAN</h1>
        <p>
          Bhutan, nestled in the Eastern Himalayas, is a unique and captivating tourist destination known for its breathtaking natural landscapes, rich cultural heritage, and deep-rooted spiritual traditions. 
          Often referred to as the "Land of the Thunder Dragon," Bhutan offers visitors a rare glimpse into a country that values Gross National Happiness over material wealth. 
          From the majestic monasteries perched on cliffs, like the iconic Tiger’s Nest in Paro, to the vibrant festivals filled with traditional music and dance, every corner of Bhutan reflects its serene and mystical charm.
           With pristine forests, snow-capped peaks, and a commitment to environmental conservation, Bhutan promises a truly peaceful and enriching travel experience.
        </p>
        <button className="explore-button"> <a href='https://www.visitbhutan.com/page.php?id=68'>Know more →</a></button>
      </div>
      <div className="hero-right">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
