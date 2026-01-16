// src/pages/Home.jsx

import React from 'react';
import Hero from '../components/hero/Hero'; // <-- 1. IMPORT THE HERO COMPONENT
import Services from '../components/services/Services';
import AboutSection from '../components/aboutSection/AboutSection';
import PromiseSection from '../components/promiseSection/PromiseSection';
import TestimonialsSection from '../components/testimonialsSection/TestimonialsSection';
import AppointmentCTA from '../components/appointmentCTA/AppointmentCTA';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <> {/* <-- 2. Use a Fragment to return multiple components */}
      <Hero /> {/* <-- 3. ADD THE HERO COMPONENT */}
      <Services />
      <AboutSection />
      <PromiseSection />
      <TestimonialsSection />
      <AppointmentCTA />
      <Footer />
      {/* You can add the rest of your home page
        components here as we build them.
      */}
      
      {/* This is the old placeholder content, you can remove it */}
      {/* <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Home Page</h1>
        <p>Welcome to Prime Dental!</p>
      </div> 
      */}
    </>
  );
};

export default Home;
