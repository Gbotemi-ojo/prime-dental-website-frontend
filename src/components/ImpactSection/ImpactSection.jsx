// src/components/ImpactSection/ImpactSection.jsx

import React, { useState } from 'react'; // <-- Import useState
import './ImpactSection.css';


// --- UPDATED: Features data now includes descriptions ---
const features = [
  {
    title: 'Convenient Lagos Location',
    text: 'Easy to reach for busy professionals and families.',
  },
  {
    title: 'Licensed & Experienced Dentists',
    text: 'Our team is composed of certified professionals dedicated to the highest standard of care.',
  },
  {
    title: 'Affordable Payment Plans',
    text: 'We offer flexible payment options to ensure you get the care you need without financial stress.',
  },
  {
    title: 'Patient Comfort First',
    text: 'From a relaxing atmosphere to gentle procedures, your comfort is our top priority.',
  },
  {
    title: 'Advanced Dental Technology',
    text: 'We use the latest technology for diagnostics and treatments, ensuring accuracy and efficiency.',
  },
];

// --- Chevron Icon ---
const IconChevronDown = () => ( // <-- Renamed for clarity, icon is the same
  <svg
    className="impact-item-icon"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9" // <-- Flipped the icon to point down
      stroke="var(--color-primary-dark)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ImpactSection = () => {
  // --- NEW: State to track the active accordion ---
  // We'll use the index of the item. 'null' means all are closed.
  const [activeIndex, setActiveIndex] = useState(null);

  // --- NEW: Click handler ---
  const handleItemClick = (index) => {
    // If the clicked item is already open, close it.
    // Otherwise, open the new item.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="impact-section">
      <div className="impact-container">
        {/* --- Column 1: Text Content --- */}
        <div className="impact-content">
          <span className="section-tag-light">Our Impact on Smiles</span>
          <h2 className="section-title">
            Dental Care That Transforms Confidence
          </h2>
          <p className="section-subheading">
            For years, we’ve been redefining dental care in Lagos by creating
            positive, pain-free experiences for every patient. Our
            dedication to comfort, safety, and affordability has made us
            the preferred choice for families across the city.
          </p>

          {/* --- UPDATED: Feature List (Accordions) --- */}
          <div className="impact-list">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <div className="impact-item-wrapper" key={index}>
                  <button
                    className={`impact-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleItemClick(index)}
                    aria-expanded={isActive}
                  >
                    <span>{feature.title}</span>
                    <IconChevronDown />
                  </button>
                  <div
                    className={`impact-item-panel ${isActive ? 'active' : ''}`}
                  >
                    <p>{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Column 2: Image --- */}
        <div className="impact-image-wrapper">
          <img
           src={'./images/airbody.jpg'}
            alt="Dentist with dental model"
            className="impact-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
