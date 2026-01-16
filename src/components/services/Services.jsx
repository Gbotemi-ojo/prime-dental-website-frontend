// src/components/Services/Services.jsx

import React from 'react';
import './Services.css';

// --- Import your service images ---
// Make sure you add these images to src/assets/images/

// --- Service Card Data ---
// We can manage all card content here
const servicesData = [
  {
    category: 'General Dentistry',
    title: 'Scaling & Polishing',
    description: 'Remove plaque, tartar, and stains with gentle scaling and polishing for a cleaner, brighter smile. Perfect for gum health and oral hygiene.',
    image: './images/sandp-edit.png',
  },
  {
    category: 'Specialized Dentistry',
    title: 'Dental Implants',
    description: 'Replace missing teeth with natural-looking, durable dental implants. Our specialists provide pain-free, precise treatment for a perfect fit.',
    image: './images/dental-implants.jpg',
  },
  {
    category: 'General Dentistry',
    title: 'Laser Teeth Whitening',
    description: 'Brighten your smile with our advanced laser teeth whitening treatments. Safe, effective, and long-lasting results for a confident, radiant smile in Lagos.',
    image: './images/teethwhite.jpg'
  },
  {
    category: 'Specialized Dentistry',
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with modern orthodontic solutions — including metal braces and clear aligners — for kids, teens, and adults.',
    image: './images/primebraces.jpg'
  },
];

/**
 * Re-usable component for a single service card
 */
const ServiceCard = ({ category, title, description, image }) => {
  return (
    <div className="service-card">
      {/* This structure is designed to be re-ordered with CSS.
        On Desktop: Text is on the left, Image is on the right.
        On Mobile/Tablet: Image is between Title and Description.
      */}
      <div className="service-card-text">
        <span className="service-card-category">{category}</span>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
      <div className="service-card-image-wrapper">
        <img src={image} alt={title} className="service-card-image" />
      </div>
    </div>
  );
};

/**
 * The main Services section component
 */
const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* --- Section Header --- */}
        <div className="services-header">
          <span className="section-tag">Our Dental Services</span>
          <h2 className="section-title">
            Comprehensive dental care for All Ages
          </h2>
          <p className="section-subheading">
            Get expert and affordable dental care in alimosho, Lagos. Our
            HEFAMAA-accredited dental clinic ensures a healthy, beautiful
            smile for all ages.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              category={service.category}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
