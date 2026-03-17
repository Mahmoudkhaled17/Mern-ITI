function CvPreview({ general, education, experience }) {
  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>

      <div className="cv-section">
        <h3>Personal Info</h3>
        <p><strong>Name:</strong> {general.name}</p>
        <p><strong>Email:</strong> {general.email}</p>
        <p><strong>Phone:</strong> {general.phone}</p>
      </div>

      <div className="cv-section">
        <h3>Education</h3>
        <p><strong>{education.title}</strong></p>
        <p>{education.school}</p>
        <p>{education.dateFrom} — {education.dateTo || "Present"}</p>
      </div>

      <div className="cv-section">
        <h3>Experience</h3>
        <p><strong>{experience.position}</strong> at {experience.company}</p>
        <p>{experience.dateFrom} — {experience.dateTo || "Present"}</p>
        {experience.responsibilities && <p>{experience.responsibilities}</p>}
      </div>
    </div>
  );
}

export default CvPreview;
