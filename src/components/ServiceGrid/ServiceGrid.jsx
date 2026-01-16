// src/components/ServiceGrid/ServiceGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceGrid.css';
import { allServices } from '../../config/servicesData';

// We removed the static ServiceIcon component since we are using icons from data

const ServiceCard = ({ title, description, slug, category, icon }) => {
  return (
    <div className={`service-grid-card ${category}`}>
      <div className="service-icon-container">
        {/* Renders the specific icon assigned in servicesData.js */}
        {icon}
      </div>
      <div className="service-grid-content">
        <h3 className="service-grid-title">{title}</h3>
        <p className="service-grid-description">{description}</p>
        <Link to={`/services/${slug}`} className="service-grid-link">
          Learn more →
        </Link>
      </div>
    </div>
  );
};

const ServiceGrid = () => {
  return (
    <section className="service-grid-section">
      <div className="service-grid-container">
        {allServices.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            slug={service.slug}
            category={service.category}
            icon={service.icon} // Passing the icon prop here
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
