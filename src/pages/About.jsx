// src/pages/About.jsx

import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import CommitmentSection from '../components/CommitmentSection/CommitmentSection';
import ImpactSection from '../components/ImpactSection/ImpactSection';
import StaffSection from '../components/StaffSection/StaffSection';
import WorkGallery from '../components/WorkGallery/WorkGallery';
import AppointmentCTA from '../components/appointmentCTA/AppointmentCTA';

// --- Define the data for the hero ---
const pageTitle = "Expert Dental Care in Lagos";
const pageDescription = "Welcome to Prime Dental Clinic, your trusted destination for dental care in Lagos. Whether you need preventive care, cosmetic dentistry, or advanced treatments, our skilled team combines modern technology with a gentle approach to make every visit stress-free and comfortable.";

// Define the breadcrumbs for this page
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '' }, // No path means it's the current page
];

const About = () => {
  return (
    <div className="about-page">
      <PageHero
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={breadcrumbs}
      />
      
      <CommitmentSection />
      
      <ImpactSection />
      
      {/* --- NEW: Meet the Team --- */}
      <StaffSection />
      
      {/* --- NEW: Pictures and Videos --- */}
      <WorkGallery />
      
      <AppointmentCTA />
      
      {/* Note: If you have Footer in your App.js global layout, 
        you can remove the Footer import here to avoid duplication.
      */}
    </div>
  );
};

export default About;