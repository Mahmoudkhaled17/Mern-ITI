import { useState } from "react";
import PersonalInfo from "./personalInfo";
import Education from "./education";
import Experience from "./experience";
import CvPreview from "./cvPreview";
import "./index.css";

function App() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({ school: "", title: "", dateFrom: "", dateTo: "" });
  const [experience, setExperience] = useState({ company: "", position: "", responsibilities: "", dateFrom: "", dateTo: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="app">
      <h1>CV Builder</h1>

      <PersonalInfo data={general} onChange={setGeneral} submitted={submitted} />
      <Education data={education} onChange={setEducation} submitted={submitted} />
      <Experience data={experience} onChange={setExperience} submitted={submitted} />

      <div className="actions">
        {!submitted ? (
          <button className="btn-save" onClick={() => setSubmitted(true)}>Save CV</button>
        ) : (
          <button className="btn-edit" onClick={() => setSubmitted(false)}>Edit CV</button>
        )}
      </div>

      {submitted && (
        <CvPreview general={general} education={education} experience={experience} />
      )}
    </div>
  );
}

export default App;
