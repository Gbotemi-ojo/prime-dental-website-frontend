// src/pages/Contact.jsx
import ContactSection from '../components/ContactSection/ContactSection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Footer from '../components/footer/Footer';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* This page doesn't have a hero,
        it just has the main content section.
      */}
      <ContactSection />
      <WhyChooseUs />
      <Footer />
      
      {/* We can add a "Book Appointment" CTA here later if needed */}
    </div>
  );
};

export default Contact;
