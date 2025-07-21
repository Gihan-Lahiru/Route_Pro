import React, { useState } from 'react';
import './DriverRegistrationForm.css';

export default function DriverRegistrationForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    license: '',
    vehicleType: '',
    experience: '',
    location: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert('Please agree to the terms and conditions');
      return;
    }
    // Send data to backend
    console.log(form);
  };

  return (
    <div className="driver-form-container">
      <div className="form-header">
        <div className="icon-circle">🚗</div>
        <h2>Become a Driver</h2>
        <p>Create your Driver account</p>
      </div>

      <form onSubmit={handleSubmit} className="driver-form">
        <input name="fullName" type="text" placeholder="Enter your full name" value={form.fullName} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} required />
        <input name="license" type="text" placeholder="Enter your license number" value={form.license} onChange={handleChange} required />
        
        <select name="vehicleType" value={form.vehicleType} onChange={handleChange} required>
          <option value="">Select vehicle type</option>
          <option value="car">Car</option>
          <option value="minicar">Mini Car</option>
          <option value="van">Van</option>
          <option value="bike">Bike</option>
          <option value="tuk">Tuk</option>
        </select>

        <input name="experience" type="number" placeholder="Enter your years of driving experience. eg: 5" value={form.experience} onChange={handleChange} required />
        <input name="location" type="text" placeholder="Enter your primary location(city or area)" value={form.location} onChange={handleChange} required />
        <input
              type="password"
              name="password"
              required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$"
              title="Must be at least 12 characters, include uppercase and lowercase letters, a number, and a special character"
              placeholder="Create a strong password" value={form.password} onChange={handleChange} />        
              <input name="confirmPassword" type="password" placeholder="Confirm your password" value={form.confirmPassword} onChange={handleChange} required />

        <div className="checkbox-container">
  
  <label className="checkbox-label">
  <input type="checkbox" />
  I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
</label>
</div>

        <button type="submit" className="submit-btn">Create Driver Account</button>

        <p className="signin-link">
          Already have a driver account? <a href="#">Sign in here</a>
        </p>
      </form>
    </div>
  );
}
