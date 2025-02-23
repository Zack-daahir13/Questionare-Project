import React from 'react';
import './Home.css'; // Make sure to link to your CSS file

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Welcome to Your Learning Dashboard</h1>
                <p>Explore courses, take quizzes, and track your progress!</p>
            </div>
            <div className="home-content">
                <div className="home-card">
                    <img src="./images/3.png" alt="Books" className="home-icon" />
                    <h2>Books</h2>
                    <p>Access a wide range of educational books to enhance your knowledge.</p>
                </div>
                <div className="home-card">
                    <img src="./images/4.png" alt="Questionnaire" className="home-icon" />
                    <h2>Questionnaire</h2>
                    <p>Test your understanding and challenge yourself with interactive quizzes.</p>
                </div>
                <div className="home-card">
                    <img src="./images/5.png" alt="Leaderboard" className="home-icon" />
                    <h2>Leaderboard</h2>
                    <p>See how you rank against others and aim for the top of the leaderboard.</p>
                </div>
                <div className="home-card">
                    <img src="./images/6.png" alt="Courses" className="home-icon" />
                    <h2>Courses</h2>
                    <p>Enroll in various courses tailored to your interests and career goals.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
