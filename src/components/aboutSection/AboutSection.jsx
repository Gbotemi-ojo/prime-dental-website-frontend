// src/components/AboutSection/AboutSection.jsx

import React from 'react';
import './AboutSection.css';

// --- Import your image ---
// Make sure you add 'about-dentist.png' (or your name) to src/assets/images/

// --- SVG Icons ---
const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="var(--color-check-icon)"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17L4 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* --- Text Content (Left Column) --- */}
        <div className="about-content">
          <span className="about-tag">Who We Are</span>
          <h2 className="about-title">
            Dental Experts Dedicated to Your Smile
          </h2>
          <p className="about-description">
            At Prime Dental Clinic, we ensure every patient feels comfortable
            and confident. From preventive care to advanced treatments, we
            make healthy smiles possible for families across Lagos.
          </p>

          <ul className="about-list">
            <li>
              <CheckIcon />
              <span>Friendly, licensed dentists and welcoming staff</span>
            </li>
            <li>
              <CheckIcon />
              <span>Convenient same-day appointments available</span>
            </li>
            <li>
              <CheckIcon />
              <span>Trusted by thousands of patients across Lagos since 2018</span>
            </li>
          </ul>

          <a href="tel:+2347030708877" className="about-button">
            <PhoneIcon />
            <span>Call us today</span>
          </a>
        </div>

        {/* --- Image (Right Column) --- */}
        <div className="about-image-wrapper">
          <div className="about-image-blob"></div>
          <img
            src='./images/airbody.jpg'
            alt="Friendly dental expert"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
