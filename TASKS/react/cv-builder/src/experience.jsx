function Experience({ data, onChange, submitted }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <section className="form-section">
      <h2>Experience</h2>

      {submitted ? (
        <div className="display-info">
          <p><strong>{data.position}</strong> — {data.company}</p>
          <p>{data.dateFrom} to {data.dateTo || "Present"}</p>
          {data.responsibilities && <p>{data.responsibilities}</p>}
        </div>
      ) : (
        <>
          <div className="field-group">
            <label>Company Name</label>
            <input name="company" type="text" value={data.company} onChange={handleChange} placeholder="Esri Egypt" />
          </div>
          <div className="field-group">
            <label>Position Title</label>
            <input name="position" type="text" value={data.position} onChange={handleChange} placeholder="GIS Analyst" />
          </div>
          <div className="field-group">
            <label>Responsibilities</label>
            <textarea name="responsibilities" rows={3} value={data.responsibilities} onChange={handleChange} placeholder="Describe your main duties..." />
          </div>
          <div className="field-group">
            <label>From</label>
            <input name="dateFrom" type="month" value={data.dateFrom} onChange={handleChange} />
          </div>
          <div className="field-group">
            <label>To</label>
            <input name="dateTo" type="month" value={data.dateTo} onChange={handleChange} />
          </div>
        </>
      )}
    </section>
  );
}

export default Experience;
