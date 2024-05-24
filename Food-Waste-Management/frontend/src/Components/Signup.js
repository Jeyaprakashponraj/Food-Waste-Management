import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/signup", {
        username: username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <h2 className="text-center">SignUp</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Name :</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Password :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button className="login-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
