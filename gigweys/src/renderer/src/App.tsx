import { useState } from 'react'
import './App.css'

// Custom SVG Icons as components
const RecordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" fill="currentColor"/>
  </svg>
)

const StopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
    <rect x="7" y="7" width="10" height="10" fill="currentColor"/>
  </svg>
)

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
    <path d="M8 6L18 12L8 18V6Z" fill="currentColor"/>
  </svg>
)

function App(): JSX.Element {
  const [isRecording, setIsRecording] = useState(false)

  const handleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <div className="app-container">
      <div className="glass-container">
        <h1 className="title">Web Automation</h1>
        <div className="button-group">
          <button
            className={`glass-button ${isRecording ? 'recording' : ''}`}
            onClick={handleRecording}
          >
            {isRecording ? (
              <>
                <StopIcon />
                Stop Recording
              </>
            ) : (
              <>
                <RecordIcon />
                Start Recording
              </>
            )}
          </button>
          <button className="glass-button replay">
            <PlayIcon />
            Replay
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
