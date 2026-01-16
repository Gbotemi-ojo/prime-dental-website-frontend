// src/components/header/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTooth } from 'react-icons/fa'; // Import tooth icon
import "./Header.css";
import { headerServices } from '../../config/servicesData';

// --- SVG Components ---

const Logo = () => (
  <div className="logo-icon-wrapper">
    <FaTooth className="logo-icon" />
  </div>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    width="28"
    height="24"
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 2H26" stroke="var(--color-hamburger-lines)" strokeWidth="3" strokeLinecap="round" />
    <path d="M2 12H26" stroke="var(--color-hamburger-lines)" strokeWidth="3" strokeLinecap="round" />
    <path d="M2 22H26" stroke="var(--color-hamburger-lines)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setIsServicesMobileOpen(false);
  };

  const toggleServicesMobile = () => setIsServicesMobileOpen(!isServicesMobileOpen);
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <Logo />
          <span className="logo-text">PRIME DENTAL</span>
        </Link>

        <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
          <HamburgerIcon />
        </button>

        <div className="desktop-nav-wrapper">
          <nav className="main-nav">
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="nav-item-dropdown">
                <button className="nav-link-button">
                  Services <span className="dropdown-arrow">▼</span>
                </button>
                <ul className="dropdown-menu">
                  {headerServices.map(service => (
                    <li key={service.slug}>
                      <Link to={`/services/${service.slug}`}>{service.title}</Link>
                    </li>
                  ))}
                  <li><Link to="/services">All Dental Services</Link></li>
                </ul>
              </li>
              <li><Link to="/appointments">Book Appointment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <button className="search-button"><SearchIcon /></button>
        </div>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li className="nav-item-dropdown-mobile">
            <button className={`nav-link-button ${isServicesMobileOpen ? "active" : ""}`} onClick={toggleServicesMobile}>
              Services <span className="dropdown-arrow">▼</span>
            </button>
            <ul className={`mobile-submenu ${isServicesMobileOpen ? "active" : ""}`}>
              {headerServices.map(service => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} onClick={handleLinkClick}>{service.title}</Link>
                </li>
              ))}
              <li><Link to="/services" onClick={handleLinkClick}>All Dental Services</Link></li>
            </ul>
          </li>
          <li><Link to="/appointments" onClick={handleLinkClick}>Book Appointment</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;