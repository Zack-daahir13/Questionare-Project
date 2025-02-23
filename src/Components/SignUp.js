// src/components/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup-container">
      <div className="left">
        <h1>Logo here</h1>
        <h2>Sign up</h2>
        <p>
          Already have an account?{' '}
          <Link to="/signin" className="signin-link">Sign In</Link>
        </p>
        <form>
          <label>Full name:</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email address :</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />

          <label>Confirm password:</label>
          <input type="password" placeholder="Confirm your password" />

          <div className="checkbox-container">
            <input type="checkbox" />
            <span>
              I agree with <a href="#">Terms</a> and <a href="#">privacy policy</a>
            </span>
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
      <div className="right">
        <h1>Welcome to our community</h1>
        <p>
          At QPoint, we’re building a platform where researchers, students, and professionals can 
          share knowledge and contribute to meaningful projects. Join us and start making an impact today!
        </p>
      </div>
    </div>
  );
}

export default SignUp;
