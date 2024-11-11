import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import '../css/style.css';
import Table from 'react-bootstrap/Table';


const Update = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const loadBookings = () => {
    let api = "http://localhost:9000/Bookings/Bookingdisplay";
    axios.get(api).then((res) => {
      console.log(res.data);
      setBookings(res.data);
    }).catch((err) => {
      toast.error("Failed to load bookings!");
    });
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const deleteBooking = (id) => {
    let api = "http://localhost:9000/bookings/delete";
    axios.post(api, { id: id }).then(() => {
      toast.success("Booking deleted successfully!");
      loadBookings();
    }).catch(() => {
      toast.error("Failed to delete booking!");
    });
  };

  const editBooking = (id) => {
    navigate(`edit/${id}`);
  };

  return (
    <>
    <div>
      <h4>Manage Table Bookings</h4>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Guest Name</th>
            <th>Contact Email</th>
            <th>Phone Number</th>
            <th>Table Type</th>
            <th>Booking Date</th>
            <th>Time Slot</th>
            <th>Special Requests</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.guestName}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.tableType}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.timeSlot}</td>
              <td>{booking.requests}</td>
              <td>
                <button onClick={() => editBooking(booking.id)}>Edit</button>
                <button onClick={() => deleteBooking(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <ToastContainer />
    </>
  );
};

export default Update;
