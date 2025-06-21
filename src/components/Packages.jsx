import React from 'react';
import './Packages.css';

const Packages = ({ onBook }) => {
  const packages = [
    {
      name: 'Bhutan Cultural Tour',
      duration: '7 Days / 6 Nights',
      price: '$999',
      image: 'https://imgs.search.brave.com/Nd77MRQ-oh6GdErjCe5oQ0j4R9dUREjHlbEpTZ8vaHA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iLWNk/bi5zcHJpbmduZXN0/LmNvbS9tZWRpYS9p/bWcva2QvaW1nXzA5/OTVkZjg2Yzc5Lmpw/Zz9hc3BlY3RfcmF0/aW89MjgwOjE0MCZ3/aWR0aD0yODA',
    },
    {
      name: 'Adventure in the Himalayas',
      duration: '10 Days / 9 Nights',
      price: '$1299',
      image: 'https://imgs.search.brave.com/OzNdpPNPwuHfO1EW_-Nr5glhiaQMJ_D0_uNpA-yazFQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNldGhlaGltYWxh/eWEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA5L3Ry/ZWtraW5nLWluLWJo/dXRhbi1hY3Rpdml0/eS5qcGc',
    },
    {
      name: 'Spiritual Retreat',
      duration: '5 Days / 4 Nights',
      price: '$699',
      image: 'https://imgs.search.brave.com/Qj49JnjsG0SaKS1OgBLK00UsxEiKBXpZfl0ZfFsuEGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzYw/MmQ3OGQ5Y2Q0YTI0/Mjk1MWQyZTEzZS8x/NzIzNjUyMDEzMTAx/LUpKMUFQNFpUSFk1/V1BLMUQwQlMxL3Vu/c3BsYXNoLWltYWdl/LUpxVDJXcDVTMERr/LmpwZw',
    },
  ];

  return (
    <section id="packages" className="packages-section">
      <h2>Tourism Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.name} />
            <div className="package-info">
              <h3>{pkg.name}</h3>
              <p>{pkg.duration}</p>
              <p className="price">{pkg.price}</p>
              <button className="book-btn" onClick={() => onBook(pkg)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
