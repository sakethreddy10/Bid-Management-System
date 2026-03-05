import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img 
          src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/placement-happenings/webcoding-gif/logo-bids-logistic.avif"
          alt="logo-image"
          className="logo"
        />
        <span className="logo-text">LOGISTIC</span>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-title">Main Menu</h3>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Bid</Link>
            </li>
            <li>
              <Link to="/pod" className="nav-link">POD</Link>
            </li>
            <li>
              <Link to="/vendor" className="nav-link">Vendor</Link>
            </li>
            <li>
              <Link to="/user" className="nav-link">User</Link>
            </li>
          </ul>
        </div>
        
        <div className="nav-section footer-menu">
          <h3 className="nav-title">Footer Menu</h3>
          <ul className="nav-list">
            <li>
              <Link to="/settings" className="nav-link">Settings</Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
            <li>
              <Link to="/logout" className="nav-link">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar