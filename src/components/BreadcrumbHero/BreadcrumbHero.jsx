// src/components/BreadcrumbHero/BreadcrumbHero.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './BreadcrumbHero.css';

const BreadcrumbHero = ({ title, breadcrumbs }) => {
  return (
    <section className="breadcrumb-hero-section">
      <div className="breadcrumb-hero-container">
        <h1 className="breadcrumb-hero-title">{title}</h1>
        
        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {crumb.path ? (
                  <Link to={crumb.path}>{crumb.name}</Link>
                ) : (
                  <span aria-current="page">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadcrumbHero;
