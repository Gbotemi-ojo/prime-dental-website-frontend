// src/pages/Appointments.jsx
import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import BookingForm from '../components/BookingForm/BookingForm';

const Appointments = () => {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Appointments', path: null }
  ];

  return (
    <>
      <PageHero 
        title="Book an Appointment"
        description="Schedule your visit with our expert dental team. Fill out the form below and we will confirm your appointment shortly."
        breadcrumbs={breadcrumbs}
      />
      
      <BookingForm />
    </>
  );
};

export default Appointments;
