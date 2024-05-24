import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/userShow")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAcceptance = (userId) => {
    console.log(`User with Name ${userId} accepted`);
  };
  const handleReject = (userId) => {
    console.log(`User with Name ${userId} rejected`);
  };

  return (
    <div className="profile-container">
      <h2 className="text-center mb-4">User Profiles</h2>
      <div className="row">
        {users.map((user) => (
          <div key={user._id} className="col-lg-4 mb-4">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title text-center mb-3">{user.username}</h5>
                <p className="card-text">
                  <strong>Name of Homage:</strong> {user.place}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {user.add}
                </p>
                <p className="card-text">
                  <strong>Persons:</strong> {user.person}
                </p>
                <p className="card-text">
                  <strong>Date:</strong> {user.date}
                </p>
                <p className="card-text">
                  <strong>Phone no:</strong> {user.num}
                </p>
                <button
                  className="btn btn-success btn-block"
                  onClick={() => handleAcceptance(user._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => handleReject(user._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
