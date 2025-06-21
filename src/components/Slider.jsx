import React from 'react';
import './Slider.css';

const sliderData = [
  {
    name: 'PARO TAKTSHANG',
    image: 'https://media.gettyimages.com/id/139749806/photo/tigers-nest-and-prayer-flags.jpg?s=612x612&w=0&k=20&c=LYpYZqKs90GTFD3-n6b79tHPlWW3iuwy0KsA4DJQUeY='},
  {
    name: 'PUNAKHA DZONG',
    image: 'https://imgs.search.brave.com/NzbsD62FEV1doYklsSVYVmPNsFYXaXujur5YWHJPlGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzI0Lzk0LzAz/LzM2MF9GXzMyNDk0/MDMzOV9COXlOMldB/VFc5VVRyTGxSUGxN/TUR0NlcwR2NRQVlH/Qy5qcGc',
  },
  {
    name: 'BUDDHA DORDENMA',
    image: 'https://imgs.search.brave.com/4HbMFJfLeDboMnEND9Xfew0JO8AWk36e5Vtw4u-KU4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MzA3OTczNi9waG90/by9nb2xkZW4tYnVk/ZGhhLXN0YXR1ZS1p/bi1iaHV0YW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWs2/dExFNlpIWTl4UjVU/bkx1T0x2R3Jzcl9n/Y1RnYlFUb3RndG5Z/enU3N3M9',
  },
   {
    name: 'THIMPHU DZONG',
    image: 'https://imgs.search.brave.com/gpqr2kGz26OdWLBdNFLr1zzTfapCZspO2tN0wM6Ty8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjU0/ODMzODkyL3Bob3Rv/L3RoaW1waHUtYmh1/dGFuLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1UZXhGbjRo/WTEzeHhTUlJwN0x6/aHByc0F5Z1owTjMy/NW5zYUQtYzBFYmdF/PQ',
  },
   {
    name: 'DOCHHULA',
    image: 'https://imgs.search.brave.com/49XdkMlbRXOfvvho_vTWxG8l8D2-ajSqOG9koCk4Udw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWEvNWEvNGUvMDgv/ZG9jaHVsYS1wYXNz/LWJodXRhbi5qcGc',
  },
];

const Slider = () => {
  return (
    <div className="slider">
      {sliderData.map((place, index) => (
        <div className="slide" key={index}>
          <img src={place.image} alt={place.name} />
          <h3>{place.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Slider;
