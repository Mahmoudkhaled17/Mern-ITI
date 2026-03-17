function Education({ data, onChange, submitted }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <section className="form-section">
      <h2>Education</h2>

      {submitted ? (
        <div className="display-info">
          <p><strong>{data.title}</strong> — {data.school}</p>
          <p>{data.dateFrom} to {data.dateTo || "Present"}</p>
        </div>
      ) : (
        <>
          <div className="field-group">
            <label>School Name</label>
            <input name="school" type="text" value={data.school} onChange={handleChange} placeholder="Cairo University" />
          </div>
          <div className="field-group">
            <label>Degree / Title</label>
            <input name="title" type="text" value={data.title} onChange={handleChange} placeholder="B.Sc. Computer Science" />
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

export default Education;
