import { useState } from 'react'

const emptyEntry = () => ({ company: '', position: '', responsibilities: '', from: '', to: '' })

function ExperienceSection({ data, onSave }) {
  const [editing, setEditing] = useState(!data.submitted)
  const [entries, setEntries] = useState(data.entries || [emptyEntry()])

  const update = (index, field, value) => {
    setEntries((prev) =>
      prev.map((entry, i) => (i === index ? { ...entry, [field]: value } : entry))
    )
  }

  const addEntry = () => setEntries((prev) => [...prev, emptyEntry()])

  const removeEntry = (index) => {
    setEntries((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    onSave({ entries, submitted: true })
    setEditing(false)
  }

  return (
    <div className="section-card">
      <div className="section-header">
        <span className="section-label">Experience</span>
        {!editing && (
          <button className="edit-btn" onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>

      {editing ? (
        <>
          {entries.map((entry, i) => (
            <div key={i} className={i > 0 ? 'entry-block' : ''}>
              <div className="field-group">
                <label>Company Name</label>
                <input value={entry.company} onChange={(e) => update(i, 'company', e.target.value)} placeholder="e.g. CAPMAS" />
              </div>
              <div className="field-group">
                <label>Position Title</label>
                <input value={entry.position} onChange={(e) => update(i, 'position', e.target.value)} placeholder="e.g. GIS Analyst" />
              </div>
              <div className="field-group">
                <label>Main Responsibilities</label>
                <textarea
                  rows={3}
                  value={entry.responsibilities}
                  onChange={(e) => update(i, 'responsibilities', e.target.value)}
                  placeholder="Describe your key responsibilities and achievements..."
                />
              </div>
              <div className="two-col">
                <div className="field-group">
                  <label>From</label>
                  <input value={entry.from} onChange={(e) => update(i, 'from', e.target.value)} placeholder="Jan 2023" />
                </div>
                <div className="field-group">
                  <label>To</label>
                  <input value={entry.to} onChange={(e) => update(i, 'to', e.target.value)} placeholder="Present" />
                </div>
              </div>
              {entries.length > 1 && (
                <button className="remove-btn" onClick={() => removeEntry(i)}>Remove</button>
              )}
            </div>
          ))}
          <button className="add-btn" onClick={addEntry}>+ Add another</button>
          <button className="submit-btn" onClick={handleSubmit}>Save Experience</button>
        </>
      ) : (
        entries.map((entry, i) => (
          <div key={i} className={i > 0 ? 'display-item' : 'display-block'}>
            <p className="display-name">{entry.company || '—'}</p>
            <p className="display-muted" style={{ fontWeight: 500 }}>{entry.position}</p>
            <p className="display-muted">
              {entry.from}{entry.to ? ` – ${entry.to}` : ''}
            </p>
            {entry.responsibilities && (
              <p className="display-resp">{entry.responsibilities}</p>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default ExperienceSection
