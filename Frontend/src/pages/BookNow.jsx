import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/style.css';

const BookNow = () => {
  // Initialize all state values
  const [input, setInput] = useState({});

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:9000/bookings/bookingsave";

    try {
      const res = await axios.post(api, input);
      console.log(res);
      toast.success("Data Successfully Saved");
      setInput({});
    } catch (err) {
      console.error(err);
      alert(err.response?.data || "An error occurred");
    }
  };

  return (
    <>
      <section id="booking">
        <h2>Book A Table</h2>
        <h3>Reserve Your Personal Table Now</h3>
        <form id="bookingForm" className="booking-form" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-section">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" value={input.name} onChange={handleInput} required />

              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" value={input.email} onChange={handleInput} required />

              <label htmlFor="mobile">Phone Number:</label>
              <input type="tel" id="mobile" name="mobile" value={input.mobile} onChange={handleInput} required />
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="tableSize">Table Size:</label>
            <select id="tableSize" name="tableSize" value={input.tableSize} onChange={handleInput} required>
              <option value="">Select Table Size</option>
              <option value="2">Table for 2</option>
              <option value="4">Table for 4</option>
              <option value="6">Table for 6</option>
              <option value="8">Table for 8</option>
            </select>

            <label htmlFor="bookingDate">Booking Date:</label>
            <input type="date" id="bookingDate" name="bookingDate" value={input.bookingDate} onChange={handleInput} required />

            <label htmlFor="bookingTime">Booking Time:</label>
            <input type="time" id="bookingTime" name="bookingTime" value={input.bookingTime} onChange={handleInput} required />

            <label htmlFor="guests">Total Person:</label>
            <input type="number" id="guests" name="guests" value={input.guests} onChange={handleInput} required min="1" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="3" value={input.message} onChange={handleInput} placeholder="Any additional requests..."></textarea>
          </div>

          <button type="submit" onClick={handleSubmit}>Book A Table</button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};

export default BookNow;
