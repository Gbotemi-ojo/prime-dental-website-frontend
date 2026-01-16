// src/components/Hero/Hero.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

// Assumes 'airbody.jpg' is inside 'src/assets/images/'

// --- SVG Icons (No changes here) ---
const CalendarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" />
  </svg>
);
const StarIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27l-5.18 2.73 1-5.73-4.17-4.08 5.76-.83L12 4l2.59 5.36 5.76.83-4.17 4.08 1 5.73z" /></svg>;
const UserIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>;
const PinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>;
const SunGraphic = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" className="hero-graphic-sun">
    <circle cx="50" cy="50" r="20" fill="var(--color-graphic-sun)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map(r => (
      <line key={r} x1="50" y1="50" x2="50" y2="20" stroke="var(--color-graphic-sun)" strokeWidth="4" transform={`rotate(${r} 50 50)`} />
    ))}
  </svg>
);
const BalloonGraphic = () => (
  <svg width="80" height="120" viewBox="0 0 80 120" className="hero-graphic-balloon">
    <path d="M40 0 C62.091 0 80 17.909 80 40 C80 60 60 80 40 100 C20 80 0 60 0 40 C0 17.909 17.909 0 40 0 Z" fill="#E0F2F1" />
    <line x1="40" y1="100" x2="40" y2="120" stroke="#E0F2F1" strokeWidth="2" />
  </svg>
);

// --- List of words to rotate ---
const rotatingWords = [
  "Affordable",
  "Skilled",
  "Friendly",
  "Painless"
];

// --- Animation settings ---
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseDuration = 2000;

// --- NEW: Wavy Bottom Shape Component ---
const WavyBottomShape = () => (
  <div className="hero-wavy-bottom">
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 100V0C240 50 480 100 720 100S1200 50 1440 0V100H0Z"
        fill="var(--color-background)"
      />
    </svg>
  </div>
);


const Hero = () => {
  // --- State for the typing effect ---
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // --- Effect for typing logic ---
  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    let timeoutId;

    if (isDeleting) {
      // Handle deleting
      if (letterIndex > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentWord.substring(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
      }
    } else {
      // Handle typing
      if (letterIndex < currentWord.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentWord.substring(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, pause
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [wordIndex, letterIndex, isDeleting]);


  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* --- Text Content (Left Column) --- */}
        <div className="hero-content">
          <SunGraphic />
          <h1>
            <span className="hero-adjective">
              {currentText}
              <span className="typing-cursor">|</span>
            </span>
            Dentistry for a Healthy Smile
          </h1>
          <p>
            Visit our friendly dental clinic in Iyana ipaja Lagos for advanced and
            pain-free procedures — from scaling and polishing to laser teeth
            whitening, braces, and dental implants. Your comfort is our
            priority.
          </p>
          <Link to="/appointments" className="hero-button">
            <CalendarIcon />
            <span>Book appointments</span>
          </Link>
          <div className="hero-trust-badges">
            <div className="hero-trust-badge-item">
              <StarIcon />
              <span>HEFAMAA Accredited</span>
            </div>
            <div className="hero-trust-badge-item">
              <UserIcon />
              <span>Licensed Dentists</span>
            </div>
            <div className="hero-trust-badge-item">
              <PinIcon />
              <span>alimosho, Lagos.</span>
            </div>
          </div>
        </div>

        {/* --- Image (Right Column) --- */}
        <div className="hero-image-wrapper">
          <div className="hero-image-bg-blob"></div>
          <BalloonGraphic />
          <img
            src='./images/airbody.jpg' // Use the imported image
            alt="Patient receiving dental treatment"
            className="hero-image"
          />
        </div>
        
      </div>
      
      {/* --- NEW: Add the wavy shape here --- */}
      <WavyBottomShape />
    </section>
  );
};

export default Hero;
