function PersonalInfo({ data, onChange, submitted }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <section className="form-section">
      <h2>Personal Info</h2>

      {submitted ? (
        <div className="display-info">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
        </div>
      ) : (
        <>
          <div className="field-group">
            <label>Full Name</label>
            <input
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="field-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              placeholder="john@email.com"
            />
          </div>
          <div className="field-group">
            <label>Phone</label>
            <input
              name="phone"
              type="tel"
              value={data.phone}
              onChange={handleChange}
              placeholder="+20 100 000 0000"
            />
          </div>
        </>
      )}
    </section>
  );
}

export default PersonalInfo;
