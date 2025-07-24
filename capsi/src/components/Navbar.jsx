import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/industrial-action-plans">Industrial Action Plans</Link></li>
        <li><Link to="/vitalrail">VitalRail</Link></li>
        <li><Link to="/participation-options">Participation Options</Link></li>
        <li><Link to="/otna-ethics">OTNA Ethics</Link></li>
        <li><Link to="/about">About OnTrackNorthAmerica</Link></li>
        <li><Link to="/braintrust">Brain Trust</Link></li>
      </ul>
    </nav>  
    );
}

export default Navbar;