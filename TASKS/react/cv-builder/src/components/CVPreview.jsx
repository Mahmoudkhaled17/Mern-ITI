function CVPreview({ general, education, experience }) {
  const g = general

  return (
    <div className="cv-sheet">

      {/* Personal Info */}
      <div className="cv-header">
        {g.name
          ? <h1 className="cv-name">{g.name}</h1>
          : <p className="cv-placeholder">Your name will appear here</p>
        }
        {g.title && <p className="cv-job-title">{g.title}</p>}
        <div className="cv-contact-row">
          {g.email && <span>{g.email}</span>}
          {g.phone && <span>{g.phone}</span>}
          {g.location && <span>{g.location}</span>}
          {g.url && <span className="cv-link">{g.url}</span>}
        </div>
      </div>

      <div className="cv-divider" />

      {/* Education */}
      <section className="cv-section">
        <h2 className="cv-section-title">Education</h2>
        {education.entries?.filter((e) => e.school).length > 0
          ? education.entries.filter((e) => e.school).map((e, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-row">
                <span className="cv-entry-title">{e.school}</span>
                {(e.from || e.to) && (
                  <span className="cv-entry-date">{e.from}{e.to ? ` – ${e.to}` : ''}</span>
                )}
              </div>
              <p className="cv-entry-sub">{[e.degree, e.field].filter(Boolean).join(', ')}</p>
            </div>
          ))
          : <p className="cv-placeholder">Add your education on the left</p>
        }
      </section>

      <div className="cv-divider" />

      {/* Experience */}
      <section className="cv-section">
        <h2 className="cv-section-title">Experience</h2>
        {experience.entries?.filter((e) => e.company).length > 0
          ? experience.entries.filter((e) => e.company).map((e, i) => (
            <div key={i} className="cv-entry">
              <div className="cv-entry-row">
                <span className="cv-entry-title">{e.company}</span>
                {(e.from || e.to) && (
                  <span className="cv-entry-date">{e.from}{e.to ? ` – ${e.to}` : ''}</span>
                )}
              </div>
              {e.position && <p className="cv-entry-position">{e.position}</p>}
              {e.responsibilities && <p className="cv-entry-resp">{e.responsibilities}</p>}
            </div>
          ))
          : <p className="cv-placeholder">Add your experience on the left</p>
        }
      </section>

    </div>
  )
}

export default CVPreview
