// src/components/WhyChooseUs/WhyChooseUs.jsx

import React from 'react';
import './WhyChooseUs.css';

// --- SVG Icons ---
const IconCalendar = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" />
  </svg>
);

const IconHeart = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <path d="M2 12h5l2 -10l3 18l3 -8h5" />
  </svg>
);

const IconBuilding = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M9 9h0M12 9h0M15 9h0M9 13h0M12 13h0M15 13h0" />
  </svg>
);


// --- Feature Data ---
const features = [
  {
    icon: <IconCalendar />,
    title: 'Easy appointments',
    text: 'Book online, by phone, or in person with flexible scheduling options.',
  },
  {
    icon: <IconHeart />,
    title: 'Patient first approach',
    text: 'Every treatment plan is personalized to your needs for the best results.',
  },
  {
    icon: <IconBuilding />,
    title: 'Convenient Location',
    text: 'Our Alimosho clinic is easily accessible for all Lagos residents.',
  },
];


const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        {/* --- Header Area --- */}
        <div className="why-choose-us-header">
          <div className="why-choose-us-title-block">
            <span className="section-tag-light">Our difference</span>
            <h2 className="section-title">
              Why Choose Prime Dental Clinic in Lagos?
            </h2>
          </div>
          <div className="why-choose-us-description">
            <p>
              At Prime Dental Clinic in Lagos, we prioritize patient-focused
              care, advanced dental technology, and a welcoming
              environment—ensuring every visit is comfortable, stress-free,
              and dedicated to your long-term oral health.
            </p>
          </div>
        </div>

        {/* --- Features Grid --- */}
        <div className="why-choose-us-grid">
          {features.map((feature, index) => (
            <div className="why-choose-us-card" key={index}>
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
