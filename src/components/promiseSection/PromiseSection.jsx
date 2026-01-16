// src/components/PromiseSection/PromiseSection.jsx

import React from 'react';
import './PromiseSection.css';

// --- SVG Icons (Placeholders) ---
const IconPatientSafety = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m12 10.5 2 2 4-4" />
  </svg>
);
const IconCommunication = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="13" y2="14" />
  </svg>
);
const IconPersonalizedCare = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconComfortFirst = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 6 4-4 4 4" />
    <path d="m16 18-4 4-4-4" />
    <path d="M12 2v20" />
    <path d="M20.4 14.5a9 9 0 0 0-16.8 0" />
  </svg>
);
const IconExpertTeam = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconContinuousFollowUp = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

// --- Data for the 6 commitments ---
const promiseData = [
  {
    icon: <IconPatientSafety />,
    title: 'Patient Safety',
    description: 'We follow strict infection control and sterilization protocols to ensure a clean, safe environment.',
  },
  {
    icon: <IconCommunication />,
    title: 'Clear Communication',
    description: 'We explain every step of your treatment so you feel informed and confident.',
  },
  {
    icon: <IconPersonalizedCare />,
    title: 'Personalized Care Plans',
    description: 'Every smile is unique. We design treatment plans tailored to your dental needs and goals.',
  },
  {
    icon: <IconComfortFirst />,
    title: 'Comfort First',
    description: 'From pain-free procedures to a relaxing atmosphere, your comfort comes first.',
  },
  {
    icon: <IconExpertTeam />,
    title: 'Expert Team Approach',
    description: 'Our skilled dentists and specialists work together to deliver the highest standard of care.',
  },
  {
    icon: <IconContinuousFollowUp />,
    title: 'Continuous Follow-up',
    description: 'We provide clear next steps after your visit and follow up to ensure lasting results.',
  },
];

const PromiseSection = () => {
  return (
    <section className="promise-section">
      <div className="promise-container">
        {/* --- Section Header --- */}
        <div className="promise-header">
          <span className="promise-tag">Our Promise</span>
          <h2 className="promise-title">
            6 Commitments to Your Dental Health
          </h2>
          <p className="promise-subheading">
            At Prime Dental Clinic in Lagos, we go beyond treatment to provide
            personalized, comfortable, and consistent care.
          </p>
        </div>

        {/* --- Commitments Grid --- */}
        <div className="promise-grid">
          {promiseData.map((item, index) => (
            <div className="promise-item" key={index}>
              <div className="promise-icon-wrapper">{item.icon}</div>
              <h3 className="promise-item-title">{item.title}</h3>
              <p className="promise-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
