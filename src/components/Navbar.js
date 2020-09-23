import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/">
      <span className="navbar-brand"><h1>CHRIS HUSSEY</h1></span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about">
            <span className="nav-link">ABOUT ME</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">
            <span className="nav-link">PORTFOLIO</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">
            <span className="nav-link">CONTACT</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume">
            <span className="nav-link">RESUME</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar; 
