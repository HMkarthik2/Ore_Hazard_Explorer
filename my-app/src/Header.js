import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

const Header = () => {
  const location = useLocation(); // Get the current route location

  return (
    <header className="header">
      <h1 className="site-heading">Ore Hazard Explorer</h1>

      {/* Navbar */}
      <nav className="navbar">
        <button className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </button>
        <button className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </button>
        <button className={location.pathname === "/safety-measures" ? "active" : ""}>
          <Link to="/safety-measures">Safety Measures</Link>
        </button>
        <button>
          <a href="http://192.168.4.1/" target="_blank" rel="noopener noreferrer" className="rover-control"
          >
            Rover Control
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
