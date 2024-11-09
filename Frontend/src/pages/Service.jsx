import React from 'react';
import { Link } from 'react-router-dom';
// import pic1 from '../images/pic1.jfif'; 
// import pic2 from '../images/pic2.jfif';
// import pic3 from '../images/pic3.jfif';
// import './Service.css'; // Uncomment if you have a CSS file for styles

const Service = () => {
  return (
    <section id="services">
      <h2>Our Table Booking Services</h2>
      <div className="services-container">
        <div className="service pic1">
          {/* <img src={pic1} alt="Standard Tables" style={{ width: '100%', borderRadius: '5px' }} /> */}
          <h3>Standard Tables</h3>
          <p>Book a comfortable standard table for a pleasant dining experience.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
        <div className="service pic2">
          {/* <img src={pic2} alt="Family Tables" style={{ width: '100%', borderRadius: '5px' }} /> */}
          <h3>Family Tables</h3>
          <p>Spacious tables perfect for family gatherings and celebrations.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
        <div className="service pic3">
          {/* <img src={pic3} alt="VIP Tables" style={{ width: '100%', borderRadius: '5px' }} /> */}
          <h3>VIP Tables</h3>
          <p>Experience luxury and privacy with our exclusive VIP tables.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
      </div>

      <div className="services-container">
        <div className="service">
          <h3>Free Wi-Fi</h3>
          <p>Enjoy high-speed internet access while you dine.</p>
        </div>
        <div className="service">
          <h3>24/7 Booking Support</h3>
          <p>Our support team is available around the clock for all your booking needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
