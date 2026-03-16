import { useState } from 'react'

const emptyEntry = () => ({ school: '', degree: '', field: '', from: '', to: '' })

function EducationSection({ data, onSave }) {
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
        <span className="section-label">Education</span>
        {!editing && (
          <button className="edit-btn" onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>

      {editing ? (
        <>
          {entries.map((entry, i) => (
            <div key={i} className={i > 0 ? 'entry-block' : ''}>
              <div className="field-group">
                <label>School / University</label>
                <input value={entry.school} onChange={(e) => update(i, 'school', e.target.value)} placeholder="e.g. Beni-Suef University" />
              </div>
              <div className="field-group">
                <label>Degree</label>
                <input value={entry.degree} onChange={(e) => update(i, 'degree', e.target.value)} placeholder="e.g. BSc" />
              </div>
              <div className="field-group">
                <label>Field of Study</label>
                <input value={entry.field} onChange={(e) => update(i, 'field', e.target.value)} placeholder="e.g. Navigation Science & Space Technology" />
              </div>
              <div className="two-col">
                <div className="field-group">
                  <label>From</label>
                  <input value={entry.from} onChange={(e) => update(i, 'from', e.target.value)} placeholder="2020" />
                </div>
                <div className="field-group">
                  <label>To</label>
                  <input value={entry.to} onChange={(e) => update(i, 'to', e.target.value)} placeholder="2024" />
                </div>
              </div>
              {entries.length > 1 && (
                <button className="remove-btn" onClick={() => removeEntry(i)}>Remove</button>
              )}
            </div>
          ))}
          <button className="add-btn" onClick={addEntry}>+ Add another</button>
          <button className="submit-btn" onClick={handleSubmit}>Save Education</button>
        </>
      ) : (
        entries.map((entry, i) => (
          <div key={i} className={i > 0 ? 'display-item' : 'display-block'}>
            <p className="display-name">{entry.school || '—'}</p>
            <p className="display-muted">{[entry.degree, entry.field].filter(Boolean).join(', ')}</p>
            <p className="display-muted">
              {entry.from && entry.to ? `${entry.from} – ${entry.to}` : entry.from || entry.to}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default EducationSection
