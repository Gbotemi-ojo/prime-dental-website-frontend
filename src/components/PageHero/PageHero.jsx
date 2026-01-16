// src/components/PageHero/PageHero.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({ title, description, breadcrumbs }) => {
  return (
    <section className="page-hero-section">
      <div className="page-hero-container">
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-description">{description}</p>
        
        {/* --- Breadcrumbs Navigation --- */}
        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {crumb.path ? (
                  // It's a link if it has a 'path'
                  <Link to={crumb.path}>{crumb.name}</Link>
                ) : (
                  // It's the current page (no link)
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

export default PageHero;
