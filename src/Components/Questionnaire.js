import React, { useState } from "react";
import "./APP.css"; // CSS Styling la heli karo

function Questionnaire({ onUpdatePoints }) {
  const [questionnaireLink, setQuestionnaireLink] = useState("");
  const [uploadedLinks, setUploadedLinks] = useState([]); // Array cusub oo lagu kaydinayo linkiyo badan

  const handleUpload = () => {
    if (!questionnaireLink) {
      alert("Fadlan marka hore link-ga questionnaire-ka soo gali!");
      return;
    }

    // Kudar questionnaire cusub oo leh link iyo hasCompleted si uusan userku mar labaad u gujin
    const newQuestionnaire = {
      link: questionnaireLink,
      hasCompleted: false,
      name: `Questionnaire - ${uploadedLinks.length + 1}`, // Magaca questionnaire-ka
    };

    setUploadedLinks([...uploadedLinks, newQuestionnaire]); // Ku dar array-ga links cusub
    setQuestionnaireLink(""); // Sifee input-ka kadib upload
  };

  const handleLinkClick = (index) => (e) => {
    if (uploadedLinks[index].hasCompleted) {
      alert("Questionnaire-kan waad horay u buuxisay!");
      e.preventDefault(); // Ha u oggolaanin link-ga in uu mar kale furmo
      return;
    }

    const pointsEarned = 10; // Dhibcaha questionnaire-ka (waad beddeli kartaa haddii loo baahdo)

    onUpdatePoints(uploadedLinks[index].name, pointsEarned); // Dhibcaha ayaa user-ka loogu darayaa

    // Update array-ga: calaamadee in questionnaire-kan la dhameeyey
    const updatedLinks = uploadedLinks.map((q, i) =>
      i === index ? { ...q, hasCompleted: true } : q
    );
    setUploadedLinks(updatedLinks);
  };

  return (
    <div className="questionnaire-container">
      <h1>Questionnaire</h1>
      <input
        type="text"
        placeholder="Soo gali link-ga questionnaire-ka"
        value={questionnaireLink}
        onChange={(e) => setQuestionnaireLink(e.target.value)}
        className="input-field"
      />
      <button onClick={handleUpload} className="upload-button">
        Upload Questionnaire
      </button>

      {uploadedLinks.length > 0 && (
        <div className="questionnaire-list">
          <h2>Questionnaires-kaaga:</h2>
          {uploadedLinks.map((q, index) => (
            <div key={index} className="questionnaire-item">
              <p>{q.name}:</p>
              <a
                href={q.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick(index)}
                className={`questionnaire-link ${q.hasCompleted ? "disabled" : ""}`}
              >
                {q.link}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Questionnaire;
