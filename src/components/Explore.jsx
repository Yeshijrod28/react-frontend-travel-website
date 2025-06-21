import React from 'react';
import './Explore.css';

const places = [
  { name: 'PHOBJIKHA', image: 'https://imgs.search.brave.com/RGX-1CvmG4e27mdwZl94xUUfs-hBfFEX0kBeftVwSL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/Njg3OTEzMC9waG90/by90aGUtc2Nlbmlj/LXZpZXctb2YtcGhv/Ymppa2hhLXZhbGxl/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZVR4WS15ZXo2/anhUYjd5SmZPOEY3/X0xZUWxZTW9PQzhN/TmR5LV9XOXdKaz0' },
  { name: 'BUMTHANG', image: 'https://imgs.search.brave.com/a5xhJHjT9Bv28ySnt8DU-f22VuIAHkieDVjlhHogbQ4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MjgyMjUxL3Bob3Rv/L2RyYW1hdGljLXN1/bnJheXMtb3Zlci1q/YWthci1kem9uZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/U2tpVHpJaVdUOW9Q/YXpCNUJBaGtuM3Ax/Z2x6QUIzeGs2S0lY/aW53c0xRMD0' },
  { name: 'GANGTEY', image: 'https://imgs.search.brave.com/R0cEWPPeQX8XBLvjLx8jiEehZd0UHuVOFx22MBvbRQc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92Lmdy/ZWF0dGliZXR0b3Vy/LmNvbS9waG90b3Mv/MjAyMi8wOC9nYW5n/dGV5LWdvZW1iYS0t/MDgtNDY5MjMud2Vi/cA' },
  { name: 'TRONGSA', image: 'https://imgs.search.brave.com/UEgGK2HpA2chJtrc50f3JBQ1p7jXHce5OKyGFSqkPTE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQxLzkxLzY1/LzM2MF9GXzY0MTkx/NjU5Ml80S3VmU0dq/VndKWjFNUVA4eks2/dmVzYmhBTDdiOWt5/aC5qcGc' },
  { name: 'MEMORIAL CHORTEN', image: 'https://imgs.search.brave.com/YOVZ02HuL3Hluiry1neYNLsk7KVcUEayODzA3h5N8FU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYw/NzU3OTMzMC9waG90/by9uYXRpb25hbC1t/ZW1vcmlhbC1jaG9y/dGVuLXZpZXctb2Yt/dGhpbXBodS1kdXJp/bmctZGF5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13bW13/UEplZ0xFaXd6ZE5h/UEU1QkRxbWhKOHNy/bjJRVmp5SkZhVmVP/aHpRPQ' },
  { name: 'WANGDUE', image: 'https://imgs.search.brave.com/Lsk-EH56cb632eVhr-34ILjB_ppuTgUKUuQ76RLtpxo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGQvZmQvNDYvM2Mv/d2FuZ2R1ZS1kem9u/Zy1iZWZvcmUuanBn' },
];

const Explore = () => {
  return (
    <section id='explore' className="explore-section">
      <h2>Explore More Places</h2>
      <div className="explore-grid">
        {places.map((place, index) => (
          <div className="explore-card" key={index}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
