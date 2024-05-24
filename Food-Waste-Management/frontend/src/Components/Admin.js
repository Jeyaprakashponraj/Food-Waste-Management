import React, { useState} from "react";
import axios from "axios";

export default function Form() {
  const [place, setPlace] = useState("");
  const [add, setAdd] = useState("");
  const [person, setPerson] = useState("");
  const [date, setDate] = useState("");
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/auth/donate`, {
        place,
        add,
        person,
        date,
        num,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setPlace("");
    setAdd("");
    setPerson("");
    setDate("");
    setNum("");
    alert("Data send to user successfully");
  };

  return (
    <div className="form-container">
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="place">Name of Place:</label>
          <input
            type="text"
            id="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="persons">No of Persons:</label>
          <input
            type="number"
            id="persons"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact No:</label>
          <input
            type="number"
            id="contact"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
