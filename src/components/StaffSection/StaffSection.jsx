// src/components/StaffSection/StaffSection.jsx

import React from 'react';
import './StaffSection.css';

// --- Local Data: Name and Role only ---
const staffMembers = [
  {
    name: "Dr Okunlola Temitope",
    role: "Medical Director",
    image: "./images/okuns.jpg",
  },
  {
    name: "Dr Adeyemi",
    role: "Dental Surgeon",
    image: "./images/adeyemi.jpg",
  },
  {
    name: "Dental Therapist Afeezat",
    role: "Dental Therapist",
    image: "./images/afeezat.jpg",
  },
  {
    name: "miss adedoyin modupeoluwa",
    role: "Clinical administrator",
    image:"./images/adedoyin.jpg"
  },
  {
    name: "nurse olayinka",
    role: "dental nurse",
    image: "./images/olayinka.jpg",
  },
  {
    name: "nurse modupeoluwa",
    role: "nurse",
    image: "./images/modupeoluwa.jpg"
  },
  {
    name: "miss christiana",
    role: "front desk - receptionist",
    image: "./images/christiana.jpg"
  }
];

const StaffSection = () => {
  return (
    <section className="staff-section">
      <div className="staff-container">
        <div className="staff-header">
          <span className="section-tag-light">Our Experts</span>
          <h2 className="section-title">Meet the Professionals Behind Your Smile</h2>
          <p className="section-subheading">
            Our team of highly qualified specialists is committed to 
            providing excellence in dental care.
          </p>
        </div>

        <div className="staff-grid">
          {staffMembers.map((member, index) => (
            <div className="staff-card" key={index}>
              <div className="staff-image-wrapper">
                <img src={member.image} alt={member.name} className="staff-image" />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">{member.name}</h3>
                <p className="staff-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;