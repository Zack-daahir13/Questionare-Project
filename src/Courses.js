// src/pages/Courses.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation to new page
import './Courses.css'; // Styling

const Courses = () => {
  const [courses, setCourses] = useState(() => {
    // Load courses from localStorage if they exist
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  const [passwordPrompt, setPasswordPrompt] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Save courses to localStorage whenever they change
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  // Handle folder upload and create a new course
  const handleFolderUpload = async (event) => {
    const files = Array.from(event.target.files).filter((file) =>
      file.type.startsWith('video')
    );

    if (files.length > 0) {
      const newCourse = {
        id: courses.length + 1,
        title: event.target.files[0].webkitRelativePath.split('/')[0],
        instructor: 'Zack Daahir', // Static name for now
        avatar: './images/1.png', // Placeholder avatar
        rating: 4, // Static rating for now
        duration: '8h 28m', // Static duration
        lessons: files.length, // Auto-calculate lessons
        videos: files.map((file) => ({
          name: file.name,
          url: URL.createObjectURL(file),
        })),
      };
      setCourses([...courses, newCourse]);
    }
  };

  // Delete course after confirmation
  const handleDeleteCourse = (courseId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this course?'
    );
    if (confirmDelete) {
      const updatedCourses = courses.filter((course) => course.id !== courseId);
      setCourses(updatedCourses);
    }
  };

  // Handle course click and password check
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setPasswordPrompt(true);
  };

  const handlePasswordSubmit = (password) => {
    if (password === '123') {
      navigate(`/course/${selectedCourse.id}`, { state: { course: selectedCourse } });
    } else {
      alert('Incorrect password. Try again.');
    }
    setPasswordPrompt(false);
  };

  return (
    <div className="courses-container">
      <div className="header">
        <h2>Explore Different Courses</h2>
        <input
          type="file"
          webkitdirectory="true"
          mozdirectory="true"
          onChange={handleFolderUpload}
          className="upload-btn"
        />
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img
              src="./images/2.png"
              alt={course.title}
              className="course-image"
              onClick={() => handleCourseClick(course)}
            />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.lessons} lesson(s) • {course.duration}</p>
              <div className="instructor-info">
                <img src={course.avatar} alt="Instructor" className="avatar" />
                <span>{course.instructor}</span>
              </div>
              <div className="rating">
                {'⭐'.repeat(course.rating)}
                {'☆'.repeat(5 - course.rating)}
              </div>
            </div>
            <div className="card-actions">
              <button className="delete-btn" onClick={() => handleDeleteCourse(course.id)}>
                Delete
              </button>
              <button className="enroll-btn" onClick={() => handleCourseClick(course)}>
                Enroll Now ➔
              </button>
            </div>
          </div>
        ))}
      </div>

      {passwordPrompt && (
        <div className="password-modal">
          <h3>Enter Password to Access Course</h3>
          <input
            type="password"
            placeholder="Enter Password"
            onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit(e.target.value)}
          />
          <button onClick={() => setPasswordPrompt(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Courses;
