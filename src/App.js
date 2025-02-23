// src/App.js
//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import SingUp from './Components/SignUp';
//import Signin from './Components/Signin';






import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Courses from "./Courses";
import CoursePage from './CoursePage';
import BooksPage from "./BooksPage";
import Signin from "./Components/Signin";
import Questionnaire from "./Components/Questionnaire";
import Profile from "./Components/Profile"; // Import Profile component
import "./App.css";

function App() {
  const [points, setPoints] = useState(0);
  const [questionnaires, setQuestionnaires] = useState([]); // Kaydi questionnaire-ka iyo points
  

  // Function cusub: handleUpdatePoints
  const handleUpdatePoints = (questionnaireName, newPoints) => {
    // Hubi in questionnaire-kaas horay loo buuxiyey
    const isAlreadyCompleted = questionnaires.some(q => q.name === questionnaireName);
    
    if (isAlreadyCompleted) {
      alert("Questionnaire-kan waad horay u buuxisay!");
      return;
    }

    setPoints((prevPoints) => prevPoints + newPoints);
    setQuestionnaires((prev) => [
      ...prev,
      { name: questionnaireName, points: newPoints },
    ]);
  };

  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <Topbar />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CoursePage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/questionnaire" element={<Questionnaire onUpdatePoints={handleUpdatePoints} />} />
              <Route path="/profile" element={<Profile points={points} questionnaires={questionnaires} />} /> {/* Profile page with points prop */}
            </Routes>
            
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;









// src/App.js
// import React from "react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
// import "./App.css";

// function App() {
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <main className="main-content">
//         <Topbar />
//         <section className="content">
//           <h1>Welcome to the Dashboard!</h1>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SingUp />} />
//         <Route path="/Signin" element={<Signin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
