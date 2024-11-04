import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    let api = "http://localhost:9000/users/userupdatedisplay";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const myrecDel = (id) => {
    let api = "http://localhost:9000/users/userdatadelete";
    axios.post(api, { id: id }).then((res) => {
      alert("Data Deleted!!");
      loadData();
    });
  };

  const myrecEdit = (id) => {
    navigate(`editdata/${id}`);
  };

  return (
    <>
      <h4>Update User Records</h4>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Room Type</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((key) => (
            <tr key={key.id}>
              <td>{key.name}</td>
              <td>{key.email}</td>
              <td>{key.mobile}</td>
              <td>{key.roomType}</td>
              <td>{key.checkIn}</td>
              <td>{key.checkOut}</td>
              <td>{key.message}</td>
              <td>
                <button onClick={() => myrecEdit(key.id)}>Edit</button>
                <button onClick={() => myrecDel(key.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Update;
