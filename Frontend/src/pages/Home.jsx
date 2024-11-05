import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import A from "../images/pick2.jpg";
import B from "../images/pick4.jpg";
import C from "../images/pick3.jpg";

import d from "../images/product1.png";
import e from "../images/product2.png";
import f from "../images/product3.png";
import g from "../images/product4.png";
import h from "../images/product7.png";
import i from "../images/product8.png";
import j from "../images/product5.png";
import k from "../images/product9.png";

import React, { useState } from 'react';
import axios from "axios";


const Home = () => {
  const [input, setInput] = useState({});
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    let api = "http://localhost:9000/users/usersave";
    axios.post(api, input).then((res) => {
      console.log(res);
      console.log("Data successfully saved!");
      toast.success("Data Successfully saved!!!");
      setInput({});
    
    })
    .catch((err) => {
      alert(err.response.data)
    
    });
  };

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={A} width="1550" height="680" alt="Slide 1" />
            <Carousel.Caption className="carousel-caption">
              <h3>Welcome to Our restorant Service</h3>
              <p>Your comfort is our priority.</p>
              <Link to="/booknow">
                <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                  Book Now
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={B} width="1550" height="680" alt="Slide 2" />
            <Carousel.Caption className="carousel-caption">
              <h3>Welcome to Our Hotel Booking Service</h3>
              <p>Your comfort is our priority.</p>
              <Link to="/booknow">
                <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                  Book Now
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={C} width="1550" height="680" alt="Slide 3" />
            <Carousel.Caption className="carousel-caption">
              <h3>Welcome to Our Hotel Booking Service</h3>
              <p>Your comfort is our priority.</p>
              <Link to="/booknow">
                <button style={{ backgroundColor: "pink", borderRadius: "30px" }}>
                  Book Now
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home1">
        <div className="div1">
          <h2> Discount Vaoucher</h2>
          <p>Athouritativly Transition Unique Portals</p>
        </div>

        <div className="div1">
          <h2> Original Recipes</h2>
          <p>Athouritativly Transition Unique Portals</p>
        </div>

        <div className="div1">
          <h2> Discount Vaoucher</h2>
          <p>Athouritativly Transition Unique Portals</p>
        </div>
      </div>

      <div className="home2">
        <div className="d1">
          <p>OUR MENU</p>
          <h1>Our Popular Foods Item</h1>
        </div>
        <div className="d2">
          <img src={d} />
          <h3>Breakfast Platter</h3>
        </div>
        <div className="d3">
          <img src={e} />
          <h3>Butter Pasta</h3>
        </div>
        <div className="d4">
          <img src={f} />
          <h3>Chiken Fried Rice</h3>
        </div>
        <div className="d5">
          <img src={g} />
          <h3></h3>
        </div>
        <div className="d6">
          <img src={h} />
          <h3>Chiken With Rice</h3>
        </div>
        <div>
          <img src={i} />
          <h3>Egg and Cocumber</h3>
        </div>
        <div>
          <img src={j} />
          <h3>Chiken With Rice</h3>
        </div>
        <div>
          <img src={k} />
          <h3>Chiken Leg Piece</h3>
        </div>
      </div>
      
      <section id="booking">
          <h2>Need Booking?</h2>
            <h2>Reserve Your Personal Table Now</h2>
            <form id="bookingForm" onSubmit={handleSubmit} className="booking-form">
                <div className="form-container">
                    <div className="form-section">
                        <h5>Personal Information</h5>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"  onChange={handleInput} required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name ="email"  onChange={handleInput} required />

                        <label htmlFor="mobile">Mobile Number:</label>
                        <input type="tel" id="mobile" name="mobile"  onChange={handleInput} required />

                        <label htmlFor="date and time">Date and Time</label>
                        <input type="date and time" id="date and time" name="date and time"  onChange={handleInput} required />

                        <label htmlFor="mobile">total person</label>
                        <input type="tel" id="mobile" name="mobile"  onChange={handleInput} required />
                    </div>
                    </div>
                     {/* <input type="submit" value="Submit" /> */}
                    </form>
                    </section>


    </>
  );
};

export default Home;