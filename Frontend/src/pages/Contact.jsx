import React, { useState } from 'react';
// import './BookNow.css'; // Ensure you import your CSS file
import { ToastContainer, toast } from 'react-toastify';
const BookNow = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        tableType: '',
        bookingDate: '',
        bookingTime: '',
        guests: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can add your API call here to submit the data
    };

    return (
        <>
        <section id="booking">
            <h2>Book Your Table</h2>
            <form id="bookingForm" onSubmit={handleSubmit} className="booking-form">
                <div className="form-container">
                    <div className="form-section">
                        <h5>Personal Information</h5>
                        <label htmlFor="name">Full Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />

                        <label htmlFor="mobile">Mobile Number:</label>
                        <input 
                            type="tel" 
                            id="mobile" 
                            name="mobile" 
                            value={formData.mobile} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-section">
                        <h5>Booking Details</h5>
                        <label htmlFor="tableType">Table Type:</label>
                        <select 
                            id="tableType" 
                            name="tableType" 
                            value={formData.tableType} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Select Table Type</option>
                            <option value="standard">Standard - ₹500</option>
                            <option value="vip">VIP - ₹1000</option>
                            <option value="private">Private - ₹1500</option>
                        </select>

                        <label htmlFor="bookingDate">Booking Date:</label>
                        <input 
                            type="date" 
                            id="bookingDate" 
                            name="bookingDate" 
                            value={formData.bookingDate} 
                            onChange={handleChange} 
                            required 
                        />

                        <label htmlFor="bookingTime">Booking Time:</label>
                        <input 
                            type="time" 
                            id="bookingTime" 
                            name="bookingTime" 
                            value={formData.bookingTime} 
                            onChange={handleChange} 
                            required 
                        />

                        <label htmlFor="guests">Number of Guests:</label>
                        <input 
                            type="number" 
                            id="guests" 
                            name="guests" 
                            min="1" 
                            max="20" 
                            value={formData.guests} 
                            onChange={handleChange} 
                            required 
                        />

                        <label htmlFor="message">Special Requests:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="3" 
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Any additional requests..."
                        ></textarea>
                    </div>
                </div>

                <button onClick={handleSubmit}>Submit</button>

            </form>
        </section>
        <ToastContainer />
        </>
    );
}

export default BookNow;
