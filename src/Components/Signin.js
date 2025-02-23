import React from 'react';
import './SignIn.css'; // Your Signin CSS file

const Signin = () => {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />

        <div className="form-options">account
        <div>hello welcome the new course tutori</div>
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="signin-btn">Sign in</button>
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
