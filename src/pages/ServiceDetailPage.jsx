// src/pages/ServiceDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { allServices } from '../config/servicesData'; 
import BreadcrumbHero from '../components/BreadcrumbHero/BreadcrumbHero';
import ServiceSidebar from '../components/ServiceSidebar/ServiceSidebar';
import './ServiceDetailPage.css'; 

// --- Checkmark Icon for Benefits ---
const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-check-icon)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17L4 12" />
  </svg>
);

// --- Arrow Icon for Process ---
const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ServiceDetailPage = () => {
  const { slug } = useParams();
  
  const service = allServices.find(s => s.slug === slug);

  if (!service) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Service Not Found</h1>
        <p>Sorry, we couldn't find the service you're looking for.</p>
      </div>
    );
  }
  
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '' }, 
  ];

  return (
    <div className="service-detail-page">
      <BreadcrumbHero
        title={service.title}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="service-detail-layout">
        
        <main className="service-detail-content">
          {/* --- NEW: Image-free Text Hero Section --- */}
          <div className={`service-detail-text-hero ${service.category}`}>
            <div className="category-tag">{service.category} Dentistry</div>
            <h1>{service.titleInLagos}</h1>
            <p className="large-intro">{service.introPara}</p>
          </div>

          <div className="service-content-block">
            <h2>What Happens During a {service.title}?</h2>
            <p>{service.whatHappens}</p>
          </div>

          <div className="service-content-block">
            <h2>Benefits of a {service.title}</h2>
            <ul className="service-benefits-list">
              {service.benefits.map((benefit, index) => (
                <li key={index}>
                  <IconCheck />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-content-block">
            <h2>Our Process</h2>
            <div className="service-process-grid">
              {service.process.map((step, index) => (
                <div className="process-grid-item" key={index}>
                  <div className="process-grid-item-text">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                  <div className="process-grid-item-icon">
                    <IconArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <div className="service-detail-sidebar">
          <ServiceSidebar />
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailPage;
