import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Image imports
import A from '../images/pick2.jpg';
import B from '../images/pick4.jpg';
import C from '../images/pick3.jpg';

import d from '../images/product1.png';
import e from '../images/product2.png';
import f from '../images/product3.png';
import g from '../images/product4.png';
import h from '../images/product7.png';
import i from '../images/product8.png';
import j from '../images/product5.png';
import k from '../images/product9.png';

const Home = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const api = 'http://localhost:9000/bookings/bookingsave';
    axios
      .post(api, input)
      .then((res) => {
        console.log(res);
        console.log('Booking data successfully saved!');
        alert('Booking data successfully saved!');
        setInput({}); // Clear form inputs after submission
      })
      .catch((err) => {
        alert(err.response?.data || 'Error occurred while saving booking data');
      });
  };

  return (
    <>
      <div id='Header'>
        <Carousel>
          <Carousel.Item>
            <img src={A} width="1550" height="700" alt="Slide 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Welcome to Our Restaurant Service</h3>
              <p>Your comfort is our priority.</p>
              <Link to="/booknow">
                <button style={{ backgroundColor: 'pink', borderRadius: '30px' }}>
                  Book Now
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={B} width="1550" height="700" alt="Slide 2" />
            <Carousel.Caption className="carousel-caption">
              <h3>Enjoy Our Exquisite Menu</h3>
              <p>Book a table for an unforgettable experience.</p>
              <Link to="/booknow">
                <button style={{ backgroundColor: 'pink', borderRadius: '30px' }}>
                  Book Now
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={C} width="1550" height="700" alt="Slide 3" />
            <Carousel.Caption className="carousel-caption">
              <h3>Reserve Your Table Today</h3>
              <p>Experience the best service and cuisine.</p>
              <Link to="/booknow">
                <button style={{ backgroundColor: 'pink', borderRadius: '30px' }}>
                  Book Now
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="home1">
        <div className="div1">
          <h2>Exclusive Discounts</h2>
          <p>Special offers for our valued guests.</p>
        </div>
        <div className="div1">
          <h2>Delicious Recipes</h2>
          <p>Experience the unique flavors of our menu.</p>
        </div>
        <div className="div1">
          <h2>Reserve & Save</h2>
          <p>Book early and enjoy our promotions.</p>
        </div>
      </div>

      <div className="home2">
        <div className="d1">
          <p>OUR MENU</p>
          <h1>Our Popular Food Items</h1>
        </div>
       
        <div>
          <img src={d}/>
          <h4>Egg And Cocumber</h4>
          <p>Rs.....</p>
        </div>
        <div>
          <img src={e}/>
          <h4>Chicken Fried Rice</h4>
          <p>Rs.....</p>
        </div>
        <div>
          <img src={f}/>
          <h4>Breakfast Platter</h4>
          <p>Rs.....</p>
        </div>
        <div>
          <img src={g}/>
          <h4>Butter Pasta</h4>
          <p>Rs.....</p>
        </div>
        <div>
          <img src={h}/>
          <h4>Grilled Chicken</h4>
          <p>Rs.....</p>
        </div>
        <div>
          <img src={i}/>
          <h4>Kozo Sushi Platter</h4>
          <p>Rs.....</p>
        </div>
        <div>
          <img src={j}/>
          <h4>Chicken With Rice</h4>
          <p>Rs.....</p>
          
        </div>
        <div>
          <img src={k}/>
          <h4>Chicken Leg Piece</h4>
          <p>Rs.....</p>
        </div>
      </div>

      <section id="booking">
        <h2>Table Reservation</h2>
        <h2>Book Your Table Now</h2>
        <form id="bookingForm" onSubmit={handleSubmit} className="booking-form">
          <div className="form-container">
            <div className="form-section">
              <h5>Reservation Details</h5>

              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" onChange={handleInput} required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" onChange={handleInput} required />

              <label htmlFor="mobile">Mobile Number:</label>
              <input type="tel" id="mobile" name="mobile" onChange={handleInput} required />

              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" onChange={handleInput} required />

              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" onChange={handleInput} required />

              <label htmlFor="persons">Number of Persons:</label>
              <input type="number" id="persons" name="persons" min="1" onChange={handleInput} required />
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
};

export default Home;
