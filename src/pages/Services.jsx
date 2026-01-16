// src/pages/Services.jsx

import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import ServiceGrid from '../components/ServiceGrid/ServiceGrid';
import AppointmentCTA from '../components/appointmentCTA/AppointmentCTA';
import Footer from '../components/footer/Footer';


// --- Define the data for the hero ---
const pageTitle = "Our Complete Dental Services";
const pageDescription = "From routine checkups to advanced cosmetic and restorative care, discover all the services we offer to keep your smile healthy and beautiful.";

// Define the breadcrumbs for this page
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '' }, // No path means it's the current page
];

const Services = () => {
  return (
    <div className="services-page">
      <PageHero
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={breadcrumbs}
      />
      <ServiceGrid />
      <AppointmentCTA />
      <Footer />
      {/* --- All your other "Services" page sections will go here --- */}
      
    </div>
  );
};

export default Services;
