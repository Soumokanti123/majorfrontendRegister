import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        <form className="register-form">
          <div className="register-input-container">
            <label htmlFor="name">Name/Organization Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="register-input-container">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="register-input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="register-input-container">
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
              <option value="food">Food</option>
              <option value="medical">Medical</option>
              <option value="damage">Damage</option>
              <option value="rescue">Rescue</option>
            </select>
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
