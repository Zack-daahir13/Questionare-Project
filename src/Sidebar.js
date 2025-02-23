import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaBook } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Optional: Clear any session or localStorage data
    // localStorage.clear();

    navigate('/signin'); // Redirect to Signin page
  };

  return (
    <div className="sidebar">
      <img src='./images/logo.png'></img>
      <ul>
        <li>
          <Link to="/" className="sidebar-link">🏠 Home</Link>
        </li>
        <li>
          <Link to="/books" className="sidebar-link">📚 Books</Link>
        </li>
        <li>
          <Link to="/questionnaire" className="sidebar-link">❓ Questionnaire</Link>
        </li>
        <li>
          <Link to="/leaderboard" className="sidebar-link">📊 Leaderboard</Link>
        </li>
        <li>
          <Link to="/courses" className="sidebar-link">
            <FaBook className="icon" /> Courses
          </Link>
        </li>
        <li>
          <Link to="/profile" className="sidebar-link">👤 Profile</Link>
        </li>
      </ul>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        ⟳ Logout
      </button>
    </div>
  );
};

export default Sidebar;
