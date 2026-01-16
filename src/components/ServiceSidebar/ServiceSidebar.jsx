// src/components/ServiceSidebar/ServiceSidebar.jsx

import React from 'react';
import { Link }from 'react-router-dom';
import './ServiceSidebar.css';

const ServiceSidebar = () => {
  return (
    <aside className="service-sidebar">
      {/* "Our services" Card */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">Our services</h3>
        {/* We can make this a dynamic list later if needed */}
        <Link to="/services" className="sidebar-link">
          View All Dental Services
        </Link>
      </div>

      {/* "Request an appointment" Card */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">Request an appointment</h3>
        <p className="sidebar-text">
          Book your visit with our dentist in Lagos quickly and easily—secure
          your spot in just minutes.
        </p>
        <Link to="/appointments" className="sidebar-button">
          Book Appointment
        </Link>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
