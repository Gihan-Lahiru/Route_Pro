import React, { useState } from 'react';
import './TravelerRegistrationForm.css';

export default function TravelerRegistrationForm() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(form);
  };

  return (
    <div className="traveler-form-container">
      <div className="form-header">
        <div className="icon-circle">👥</div>
        <h2>Welcome Back</h2>
        <p>Sign in to your traveller account</p>
      </div>

      <form onSubmit={handleSubmit} className="traveler-form">
        <input
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="username"
          type="text"
          placeholder="Choose a username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Create Account</button>

        <p className="signin-text">
          Already have an account? <a href="#">Sign in</a>
        </p>
        <p className="terms-text">
          By continuing, you agree to our <a href="C:\Users\Nawo\OneDrive\Desktop\React\project\src\components\TermsCondition.html">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </p>
      </form>
    </div>
  );
}
