import React from 'react'
import logo from "./logo.png";
import "./Landing.css";


export const Navbar = () => {
  return (
    <nav className="group-parent">
          <img className="group-child" alt="" src={logo} />
          <div className="group-wrapper">
            <div className="patients-parent">
              <div className="patients">Patients</div>
              <div className="patients1">About</div>
              <div className="settings">Settings</div>
            </div>
          </div>
          <div className="welcome-dr-fluka-parent">
            <div className="welcome-dr-fluka">Welcome, Dr Fluka</div>
            <div className="group-item" />
          </div>
        </nav>
  )
}
