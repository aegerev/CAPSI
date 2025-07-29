import capsiLogo from '../assets/CAPSI.png'

import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
      
    <nav>
      {/* The image is now a direct child of <nav> */}
      <img src={capsiLogo} alt="CAPSI Logo" className="navbar-logo" />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/industrial-action-plans">Industrial Action Plans</Link></li>
        <li><Link to="/vitalrail">VitalRail</Link></li>
        <li><Link to="/participation-options">Participation Options</Link></li>
        <li><Link to="/otna-ethics">OTNA Ethics</Link></li>
        <li><Link to="/about">About OnTrackNorthAmerica</Link></li>
        <li><Link to="/braintrust">BrainTrust</Link></li>
      </ul>

    </nav>
      
    );
    
}

export default Navbar;