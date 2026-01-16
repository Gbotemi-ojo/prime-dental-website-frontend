// src/components/AppointmentCTA/AppointmentCTA.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './AppointmentCTA.css';

const AppointmentCTA = () => {
  return (
    <div className="cta-container">
      <span className="cta-tag">Schedule Your Visit Today</span>
      <h2 className="cta-title">
        Same-Day Appointments Available
      </h2>
      <p className="cta-description">
        Book now and experience expert dental care in Lagos from
        professionals dedicated to your comfort.
      </p>
      <Link to="/appointments" className="cta-button">
        Make an appointment
      </Link>
    </div>
  );
};

export default AppointmentCTA;
