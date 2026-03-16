import { useState } from 'react'
import GeneralSection from './components/GeneralSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import CVPreview from './components/CVPreview'
import './styles/sections.css'
import './styles/preview.css'

function App() {
  const [tab, setTab] = useState('editor')

  const [general, setGeneral] = useState({
    name: '', title: '', email: '', phone: '', location: '', url: '', submitted: false,
  })
  const [education, setEducation] = useState({
    entries: [{ school: '', degree: '', field: '', from: '', to: '' }],
    submitted: false,
  })
  const [experience, setExperience] = useState({
    entries: [{ company: '', position: '', responsibilities: '', from: '', to: '' }],
    submitted: false,
  })

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="app-title">CV <span>Builder</span></h1>
        <div className="tab-bar">
          <button className={`tab ${tab === 'editor' ? 'active' : ''}`} onClick={() => setTab('editor')}>Edit</button>
          <button className={`tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>Preview</button>
        </div>
      </header>

      {tab === 'editor' ? (
        <div className="editor-pane">
          <GeneralSection data={general} onSave={setGeneral} />
          <EducationSection data={education} onSave={setEducation} />
          <ExperienceSection data={experience} onSave={setExperience} />
        </div>
      ) : (
        <div className="preview-pane">
          <CVPreview general={general} education={education} experience={experience} />
        </div>
      )}
    </div>
  )
}

export default App
