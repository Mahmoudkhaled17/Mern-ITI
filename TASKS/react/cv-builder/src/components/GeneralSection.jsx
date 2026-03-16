import { useState } from 'react'

function FieldGroup({ label, name, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div className="field-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

function GeneralSection({ data, onSave }) {
  const [editing, setEditing] = useState(!data.submitted)
  const [form, setForm] = useState(data)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    onSave({ ...form, submitted: true })
    setEditing(false)
  }

  const handleEdit = () => {
    setEditing(true)
  }

  return (
    <div className="section-card">
      <div className="section-header">
        <span className="section-label">Personal Info</span>
        {!editing && (
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
        )}
      </div>

      {editing ? (
        <>
          <FieldGroup label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Mahmoud Khaled" />
          <FieldGroup label="Job Title" name="title" value={form.title} onChange={handleChange} placeholder="e.g. GIS Analyst" />
          <div className="two-col">
            <FieldGroup label="Email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@email.com" />
            <FieldGroup label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+20 100 000 0000" />
          </div>
          <FieldGroup label="Location" name="location" value={form.location} onChange={handleChange} placeholder="Cairo, Egypt" />
          <FieldGroup label="LinkedIn / Portfolio URL" name="url" value={form.url} onChange={handleChange} placeholder="linkedin.com/in/yourname" />
          <button className="submit-btn" onClick={handleSubmit}>Save Personal Info</button>
        </>
      ) : (
        <div className="display-block">
          <p className="display-name">{form.name || '—'}</p>
          {form.title && <p className="display-muted">{form.title}</p>}
          <p className="display-muted">
            {form.email}{form.phone && ` · ${form.phone}`}
          </p>
          {form.location && <p className="display-muted">{form.location}</p>}
          {form.url && <p className="display-muted">{form.url}</p>}
        </div>
      )}
    </div>
  )
}

export default GeneralSection
