import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          RVC<span>Automation</span>
        </div>
        
        <nav className="nav-menu">
          <a href="#products">Products</a>
          <a href="#docs">Docs</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="header-buttons">
          <button className="github-button">
            <span className="star-icon">★</span>
            45.1K
          </button>
          <button className="cta-button">Go to Console</button>
        </div>
      </div>
    </header>
  )
}

export default Header
