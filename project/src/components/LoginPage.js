import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Call your login API here
    console.log("Email:", email, "Password:", password);
    navigate("/"); // Redirect to home page after login
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="login.jpg" alt="Train Scenic" />
      </div>
      <div className="login-right">
        <img className="logo-image" src="new logo.png" alt="Logo" />

        <h2 className="welcome">Welcome</h2>
        <p className="login-subtitle">Login with Email</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
          <a className="forgot-link" href="#">
            Forgot your password?
          </a>
        </form>
      </div>
    </div>
  );
}


export default LoginPage;
