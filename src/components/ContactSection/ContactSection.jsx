// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-content">
          <span className="section-tag-light">Contact</span>
          <h1 className="contact-title">Prime Dental Clinic Lagos</h1>
          <p className="contact-description">
            Have questions about our dental services or need help booking an
            appointment? We're here for you! You can reach us using the
            contact details below.
          </p>

          <div className="contact-details">
            <a href="tel:07030708877">
              <strong>Phone:</strong> 0703 070 8877
            </a>
            <a href="https://wa.me/2347030708877" target="_blank" rel="noopener noreferrer">
              <strong>Whatsapp:</strong> 0703 070 8877
            </a>
          </div>

          {/* --- Socials using react-icons --- */}
          <div className="contact-socials">
            <a href="https://web.facebook.com/p/Prime-Dental-Clinic-Lagos-61573131461530/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.instagram.com/primedental_ng/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.tiktok.com/@primedental_clinic" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok size={28} />
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.279586824215!2d3.2940557755649!3d6.612142293381935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9197d50be4b5%3A0xedd4d748b2e53c9a!2sPrime%20Dental%20Clinic!5e0!3m2!1sen!2sng!4v1767384585954!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }} // Changed from "border:0;" to an object
            allowFullScreen=""    // Changed to camelCase
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Changed to camelCase
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
