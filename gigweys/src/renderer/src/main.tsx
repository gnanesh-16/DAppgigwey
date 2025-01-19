import './assets/main.css'
import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './notifications.css'

export const NotificationContext = createContext<{
  showNotification: (message: string) => void;
}>({ showNotification: () => {} })

function AppWrapper() {
  const [notification, setNotification] = useState<string | null>(null)

  const showNotification = (message: string) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      <div className="main-container">
        <div className="animated-background">
          <div className="grid-overlay"></div>
          <div className="glow-circles">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`circle circle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        {notification && (
          <div className="notification">
            <div className="notification-content">{notification}</div>
          </div>
        )}
        <App />
      </div>
    </NotificationContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
)
