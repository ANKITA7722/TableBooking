import React from "react";
import '../css/style.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa'; 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          {/* Social Media Section */}
          <div className="footer-social">
            <h2>Follow Us</h2>
            <p>We believe that great food shouldn't break the bank.
              That's why we offer affordable options without compromising on taste.

            </p>
            <div className="icons">
              <FaFacebookF className="icon" />
              <FaInstagram className="icon" />
              <FaWhatsapp className="icon" />
              <FaTwitter className="icon" />
            </div>

          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h2>Quick Links</h2>
            <hr size="5" color="red" />
            <p>About Us</p>
            <p>Our Chefs</p>
            <p>Company History</p>
            <p>Our Gallery</p>
            <p>Need a Career?</p>
          </div>

          {/* Food Menu Section */}
          <div className="footer-section">
            <h2>Food Menu</h2>
            <hr size="5" color="red" />
            <p>Red Dish Oysters</p>
            <p>Crispy Chicken</p>
            <p>Wild Mushroom</p>
            <p>Kazo Sushi Platter</p>
            <p>Breakfast Platter</p>
          </div>

          {/* Get In Touch Section */}
          <div className="footer-section">
          <h2>Get In Touch</h2>
          <hr size="5" color="red" />
          <p><FaMapMarkerAlt className="icon" /> Address Location</p>
          <p><FaPhoneAlt className="icon" /> Phone Number</p>
          <p><FaEnvelope className="icon" /> Email Address</p>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
