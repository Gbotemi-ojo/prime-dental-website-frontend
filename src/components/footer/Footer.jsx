// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaTooth } from 'react-icons/fa';
import './Footer.css';
import { headerServices } from '../../config/servicesData';

const Logo = () => (
  <div className="logo-icon-wrapper">
    <FaTooth className="logo-icon" />
  </div>
);

const IconScrollUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const Footer = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column footer-info">
            <Link to="/" className="footer-logo">
              <Logo />
              <span>PRIME DENTAL</span>
            </Link>
            <p>
              104, New Ipaja/Egbeda Road, opposite prestige super-market<br />
              Alimosho, Ipaja Rd, Ipaja, Lagos 100006, Lagos
            </p>
            <a href="tel:07030708877" className="footer-phone">0703 070 8877</a>
            <div className="footer-socials">
              <a href="https://web.facebook.com/p/Prime-Dental-Clinic-Lagos-61573131461530/" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com/primedental_ng/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://www.tiktok.com/@primedental_clinic" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></a>
            </div>
          </div>

          <div className="footer-column footer-menu">
            <h4 className="footer-heading">Menu</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-services">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {headerServices.slice(0, 3).map(service => (
                <li key={service.slug}><Link to={`/services/${service.slug}`}>{service.title}</Link></li>
              ))}
              <li><Link to="/services">All Services</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-hours">
            <h4 className="footer-heading">Business hours</h4>
            <ul className="footer-hours-list">
              <li><span>Weekdays</span><span>09.00 AM - 06.00 PM</span></li>
              <li><span>Saturday</span><span>10.00 AM - 04.00 PM</span></li>
              <li><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© Prime Dental Clinic. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <button className="scroll-top-button" onClick={handleScrollTop}><IconScrollUp /></button>
    </footer>
  );
};

export default Footer;
