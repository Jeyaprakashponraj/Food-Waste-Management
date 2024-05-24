import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/signin", { email, password })
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data.message === "Login successful") {
          auth.login({ name: res.data.user.name, email: res.data.user.email });
          if (res.data.user.email === "jeyaprakashponraj188@gmail.com") {
            navigate("/");
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response) {
          setMessage(err.response.data.message);
        } else {
          setMessage("An error occurred. Please try again.");
        }
      });
  };

  return (
    <div className="login-container">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Login
        </button>
        {message && <p className="error-message">{message}</p>}
      </form>
      <p className="signup-link">
        Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
      </p>
    </div>
  );
}
