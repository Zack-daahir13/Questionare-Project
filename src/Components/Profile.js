import React from "react";

function Profile({ points, questionnaires }) {
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Total Points: {points}</h2>
      <h3>Questionnaires Completed:</h3>
      <ul>
        {questionnaires.map((q, index) => (
          <li key={index}>
            <a href={q.name} target="_blank" rel="noopener noreferrer">
              Questionnaire {index + 1}
            </a> - Points: {q.points}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
