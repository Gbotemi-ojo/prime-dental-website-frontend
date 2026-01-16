// src/components/CommitmentSection/CommitmentSection.jsx

import React, { useState } from 'react';
import './CommitmentSection.css';

// --- Data for the Tabs ---
const tabContent = {
  mission: {
    title: 'Mission',
    text: 'To deliver exceptional, patient-focused dental care in Lagos through advanced technology, personalized treatments, and a commitment to comfort, affordability, and lifelong oral health.',
  },
  vision: {
    title: 'Vision',
    text: 'To be recognized as the most trusted dentist in Lagos, transforming smiles through innovation, compassion, and excellence.',
  },
  values: {
    title: 'Values',
    text: 'We are guided by five core principles: compassion in every interaction, excellence in dental care, integrity in our treatments and pricing, innovation through advanced technology, and patient-first care to ensure your comfort and satisfaction.',
  },
};

// --- Data for the 4-Step Process ---
const processSteps = [
  {
    number: '01',
    title: 'Appointment',
    text: 'Book your dental visit quickly and conveniently.',
  },
  {
    number: '02',
    title: 'Consultation',
    text: 'Share your dental concerns with our experienced dentists.',
  },
  {
    number: '03',
    title: 'Examination',
    text: 'Get a thorough oral health check using advanced technology.',
  },
  {
    number: '04',
    title: 'Treatment plan',
    text: 'Receive a tailored care plan designed for your smile.',
  },
];

// --- Arrow Icon ---
const IconArrowRight = () => (
  <svg
    className="process-arrow"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="#B0B0B0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke="#B0B0B0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommitmentSection = () => {
  const [activeTab, setActiveTab] = useState('values'); // 'values' is active by default in screenshots

  return (
    <section className="commitment-section">
      <div className="commitment-container">
        {/* --- Part 1: Commitment & Tabs --- */}
        <div className="commitment-top-grid">
          {/* Top-left text */}
          <div className="commitment-intro">
            <span className="section-tag-light">Our Commitment to Your Smile</span>
            <h2 className="section-title">
              At Prime Dental Clinic, everything we do is guided by principles
              that put your health, confidence, and comfort first.
            </h2>
          </div>

          {/* Top-right tabs */}
          <div className="commitment-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                Mission
              </button>
              <button
                className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab('vision')}
              >
                Vision
              </button>
              <button
                className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => setActiveTab('values')}
              >
                Values
              </button>
            </div>
            <div className="tab-content">
              <p>{tabContent[activeTab].text}</p>
            </div>
          </div>
        </div>

        {/* --- Part 2: 4-Step Process --- */}
        <div className="commitment-process">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="process-step">
                <span className="process-number">{step.number}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </div>
              {/* Add an arrow after each step except the last one */}
              {index < processSteps.length - 1 && (
                <IconArrowRight />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
