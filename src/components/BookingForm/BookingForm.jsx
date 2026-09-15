// src/components/BookingForm/BookingForm.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API_BASE_URL from '../../config/api';
import './BookingForm.css';

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  // Initial State matches your Schema
  const initialFormData = {
    name: '',
    sex: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    address: '',
    branch: '', // Added branch field
    hmo: '', // Optional
    requestedAppointmentDate: '',
    complaint: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic Validation including the new branch field
    if (!formData.name || !formData.phoneNumber || !formData.sex || !formData.branch) {
      toast.error("Please fill in all required fields (Name, Phone, Sex, Branch).");
      setLoading(false);
      return;
    }

    try {
      // Endpoint: /website-bookings/submit
      const response = await fetch(`${API_BASE_URL}/api/website-bookings/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Appointment request submitted successfully!");
        setFormData(initialFormData); // Reset form
      } else {
        toast.error(data.error || "Failed to submit booking.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking-form-section">
      <div className="booking-form-container">
        <div className="booking-card">
          <form onSubmit={handleSubmit} className="booking-form-grid">
            
            {/* --- Personal Details --- */}
            <div className="form-group full-width">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="sex" className="form-label">Sex *</label>
              <select 
                id="sex" 
                name="sex" 
                className="form-select"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
              <input 
                type="date" 
                id="dateOfBirth" 
                name="dateOfBirth" 
                className="form-input"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            {/* --- Contact Details --- */}
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                className="form-input"
                placeholder="0703 070 8877"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="address" className="form-label">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                className="form-input"
                placeholder="Street address, City"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* --- Appointment Details --- */}
            <div className="form-group">
              <label htmlFor="branch" className="form-label">Branch to Visit *</label>
              <select 
                id="branch" 
                name="branch" 
                className="form-select"
                value={formData.branch}
                onChange={handleChange}
                required
              >
                <option value="">Select Branch</option>
                <option value="Iju">Iju</option>
                <option value="Iyana Ipaja">Iyana Ipaja</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="hmo" className="form-label">HMO Information (If Applicable)</label>
              <input 
                type="text" 
                id="hmo" 
                name="hmo" 
                className="form-input"
                placeholder="HMO Name / ID"
                value={formData.hmo}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="requestedAppointmentDate" className="form-label">Preferred Date</label>
              <input 
                type="date" 
                id="requestedAppointmentDate" 
                name="requestedAppointmentDate" 
                className="form-input"
                value={formData.requestedAppointmentDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]} // Disable past dates
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="complaint" className="form-label">Reason for Visit / Complaint</label>
              <textarea 
                id="complaint" 
                name="complaint" 
                className="form-textarea"
                placeholder="Please describe your symptoms or the service you need..."
                value={formData.complaint}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="full-width">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Request Appointment'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
