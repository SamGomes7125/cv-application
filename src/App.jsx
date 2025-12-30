import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";
import "./styles/app.css";

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([
    {
      school: "",
      title: "",
      date: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      responsibilities: [],
      from: "",
      to: "",
    },
  ]);

  return (
    <div className="app">
      <h1>CV Application</h1>

      <div className="layout">
        {/* Form Section */}
        {isEditing && (
          <div className="form-column">
            <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
            <Education data={education} setData={setEducation} />
            <Experience data={experience} setData={setExperience} />

            <button onClick={() => setIsEditing(false)}>
              Submit CV
            </button>
          </div>
        )}

        {/* Preview Section */}
        <div className="preview-column">
          {!isEditing && (
            <CVPreview
              general={generalInfo}
              education={education}
              experience={experience}
            />
          )}
        </div>
      </div>

      {/* Edit Button */}
      {!isEditing && (
        <div className="center-btn">
          <button onClick={() => setIsEditing(true)}>
            Edit CV
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
