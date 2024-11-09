import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Display = () => {
  const [myData, setMyData] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:9000/Bookings/Bookingdisplay";
    try {
      const response = await axios.get(api);
      setMyData(response.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const tableRows = myData.map((booking, index) => (
    <tr key={index}>
      <td>{booking.name}</td>
      <td>{booking.email}</td>
      <td>{booking.mobile}</td>
      <td>{booking.tableSize}</td>
      <td>{booking.bookingDate}</td>
      <td>{booking.bookingTime}</td>
      <td>{booking.guests}</td>
      <td>{booking.message}</td>
    </tr>
  ));

  return (
    <center>
      <h4 style={{ marginTop: "60px" }}>Table Booking List</h4>
      <Table responsive="sm" bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Table Size</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>Guests</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </center>
  );
};

export default Display;
