// src/pages/CoursePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Courses.css'; // Use same CSS for styling

const CoursePage = () => {
  const location = useLocation();
  const { course } = location.state; // Get course data from state

  return (
    <div className="course-page">
      <h2>{course.title}</h2>
      <div className="video-list">
        {course.videos.map((video, index) => (
          <div key={index} className="video-item">
            <h3>{video.name}</h3>
            <video src={video.url} controls />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
