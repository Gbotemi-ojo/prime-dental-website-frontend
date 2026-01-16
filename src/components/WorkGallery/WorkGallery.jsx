// src/components/WorkGallery/WorkGallery.jsx

import React from 'react';
import './WorkGallery.css';
import { type } from '@testing-library/user-event/dist/type';

// --- Local Data ---
const workItems = [
  {
    type: 'video',
    url: './works/_34. Dental Services Instagram Reel.mp4#t=0.001', 
  },
  {
    type: 'video',
    url: './works/_Dental Care Mobile Video.mp4#t=0.001',
  },
  {
    type: 'video',
    url: './works/_Dental Care Services Promotion Mobile Video.mp4#t=0.001',
  },
  {
    type: 'video',
    url: './works/_Dental Clinic Mobile Video (1).mp4#t=0.001',
  },
  {
    type: 'video',
    url: './works/_Dental Implants Mobile Video.mp4#t=0.001',
  },
  {
    type: 'video',
    url: './works/_Dental Services Promotion Mobile Video.mp4#t=0.001',
  },
  {
    type : 'image',
    url : "./works/_Tooth Whitening Before After Instagram Post (1).png"
  },
  {
    type : 'image',
    url : './works/66. Kids Dental Clinic Instagram Post.png'
  },
  {
    type : 'video',
    url : './works/Blue and White Modern Dental Health Tips Mobile Video (1).mp4'
  },
  {
    type : 'image',
    url : './works/Dental Care Clinic Services Instagram Post (1).png'
  },
  {
    type : 'video',
    url : './works/Dental Care Promotion Mobile Video.mp4'
  },
  {
    type : 'video',
    url : './works/Dental Clinic Mobile Video.mp4'
  },
];

const WorkGallery = () => {
  return (
    <section className="work-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-tag-light">Our Work</span>
          <h2 className="section-title">A Glimpse into Prime Dental</h2>
        </div>

        <div className="gallery-grid">
          {workItems.map((item, index) => (
            <div className={`gallery-item ${item.type}`} key={index}>
              {item.type === 'image' ? (
                <img src={item.url} alt={item.title} />
              ) : (
                <video controls preload="metadata">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="item-details">
                <span className="item-category">{item.category}</span>
                <h4 className="item-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
