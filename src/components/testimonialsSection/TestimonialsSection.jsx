// src/components/TestimonialsSection/TestimonialsSection.jsx

import React, { useRef } from 'react'; // <-- Only useRef is needed now
import './TestimonialsSection.css';

// --- Helper function to get initials (Unchanged) ---
const getInitials = (name) => {
  if (!name) return '?';
  const names = name.split(' ');
  const first = names[0][0] || '';
  const last = names.length > 1 ? names[names.length - 1][0] : '';
  return (first + last).toUpperCase();
};

// --- Testimonial Data (Unchanged) ---
const testimonialData = [
  // ... (Your 5 testimonials are still here)
  {
    stars: 5,
    text: "My experience at Prime Dental Clinic was one of the best I've had. They saved me from a wrong diagnosis. The staff are very polite and friendly, and the environment is clean and calming. The doctors took their time to explain procedures clearly and honestly and ensured I was comfortable throughout. Definitely my go-to clinic and one I would recommend to all my friends and family.",
    author: 'Oluwatomisin Gbadebo',
    timeAgo: 'a month ago',
  },
  {
    stars: 5,
    text: '"The staff were really gentle and friendly, they made me feel at ease throughout my appointment. They took their time explaining everything clearly. I highly recommend their services." Prime dental clinic.',
    author: 'Ajokotola Olajumoke',
    timeAgo: '2 months ago',
  },
  {
    stars: 5,
    text: 'Took my son there today and I must say all the staff and doctors were top notch 👌i also love the conducive environment and they are also well equipped.nice 1',
    author: 'Bukola Olusesi',
    timeAgo: 'a month ago',
  },
  {
    stars: 5,
    text: 'Their services is top notch from their hospitality to the nurses who are so welcoming and treat their customers as kings to receiving ultimate care it’s a place you could recommend to someone',
    author: 'Kanebi Rejoice',
    timeAgo: '2 months ago',
  },
  {
    stars: 5,
    text: 'Really nice experience at this clinic. The place is super clean and has a calm vibe, which I appreciated. The staff were all super friendly and welcoming. The dentist made everything feel easy and smooth, no stress at all. Would definitely recommend!',
    author: 'Aishah Motunrayo',
    timeAgo: '6 months ago',
  },
];

// --- Star Rating Component (Unchanged) ---
const StarRating = ({ count }) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="var(--color-primary-dark)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27l-5.18 2.73 1-5.73-4.17-4.08 5.76-.83L12 4l2.59 5.36 5.76.83-4.17 4.08 1 5.73z" />
      </svg>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

// --- Decorative ABC Blocks (Unchanged) ---
const DecorativeGraphics = () => (
  <>
    <div className="deco-graphic deco-abc">
      <span>A</span>
      <span>B</span>
      <span>C</span>
    </div>
  </>
);

// --- Left and Right Arrow Icons (Unchanged) ---
const IconChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const TestimonialsSection = () => {
  // --- NEW: Simplified ref ---
  const sliderRef = useRef(null);

  // --- NEW: Updated handleScroll with looping logic ---
  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Get the first card and the gap
    const card = slider.children[0];
    if (!card) return;
    const cardGap = parseFloat(window.getComputedStyle(slider).gap) || 24;
    const scrollAmount = card.offsetWidth + cardGap;

    if (direction === 'right') {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      // If at the end, loop to start
      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    } else { // direction === 'left'
      // If at the start, loop to end
      if (slider.scrollLeft <= 10) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="testimonials-section">
      <DecorativeGraphics />
      <div className="testimonials-container">
        {/* --- Section Header (Unchanged) --- */}
        <div className="testimonials-header">
          <span className="section-tag-light">12,000+ Happy Smiles</span>
          <h2 className="section-title">Stories from our patients</h2>
          <p className="section-subheading">
            Hear from patients who trust <strong>Prime Dental Clinic</strong> for everything
            from routine checkups to advanced dental treatments in Lagos.
          </p>
        </div>

        {/* --- UPDATED: Testimonial Slider Wrapper --- */}
        <div className="testimonial-slider-wrapper">
          
          {/* --- UPDATED: Scroll Buttons (no disabled prop) --- */}
          <button
            className="scroll-button left"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <IconChevronLeft />
          </button>
          
          <div className="testimonial-slider" ref={sliderRef}>
            {testimonialData.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <StarRating count={testimonial.stars} />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-initials">
                    {getInitials(testimonial.author)}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-title">{testimonial.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="scroll-button right"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <IconChevronRight />
          </button>
          {/* --- End Scroll Buttons --- */}

          {/* --- Slider Dots (Unchanged) --- */}
          <div className="testimonial-dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
