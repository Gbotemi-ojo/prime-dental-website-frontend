// src/config/servicesData.js
import React from 'react';
import { 
  FaTooth, 
  FaTeeth, 
  FaTeethOpen, 
  FaCrown, 
  FaStethoscope 
} from 'react-icons/fa';
import { 
  MdOutlineCleanHands, 
  MdOutlineAutoAwesome, 
  MdLayers, 
  MdFlashOn, 
  MdCheckCircleOutline, 
  MdHealing, 
  MdChildCare, 
  MdScanner, 
  MdEmergency, 
  MdOutlineBrush 
} from 'react-icons/md';
import { GiTooth } from 'react-icons/gi';

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

export const allServices = [
  {
    title: 'Dental Consultation',
    icon: <FaStethoscope />,
    description: 'Professional advice and oral health assessment for every patient.',
    category: 'general',
    titleInLagos: 'Dental Consultation in Lagos',
    introPara: 'At Prime Dental Clinic, we offer professional dental consultations in Lagos to help you understand your oral health and choose the right treatment plan.',
    whatHappens: 'Your consultation includes a complete oral examination, discussion of your dental history, and digital diagnostics.',
    benefits: ['Early detection of dental issues', 'Expert guidance on treatment options', 'Personalized care tailored to your needs', 'Stress-free experience'],
    process: [
      { title: 'Oral Exam', text: 'Full evaluation of teeth and gums.' },
      { title: 'Discussion', text: 'Explanation of options and costs.' },
      { title: 'Imaging', text: 'High-quality diagnostics.' },
      { title: 'Plan', text: 'A roadmap for your smile.' },
    ],
  },
  {
    title: 'Scaling & Polishing',
    icon: <MdOutlineCleanHands />,
    description: 'Maintain healthy teeth with expert checkups and cleanings.',
    category: 'general',
    titleInLagos: 'Scaling & Polishing in Lagos',
    introPara: 'Our professional Scaling and Polishing service is the cornerstone of preventive dental care.',
    whatHappens: 'Our hygienists remove hardened plaque and polish teeth to remove surface stains.',
    benefits: ['Prevents gum disease', 'Brighter smile', 'Fresh breath', 'Early detection of issues'],
    process: [
      { title: 'Assessment', text: 'Check of gum health.' },
      { title: 'Scaling', text: 'Gentle removal of tartar.' },
      { title: 'Polishing', text: 'Stain removal for a shine.' },
      { title: 'Flossing', text: 'Final detailed clean.' },
    ],
  },
  {
    title: 'Laser Teeth Whitening',
    icon: <MdOutlineAutoAwesome />,
    description: 'Brighten your smile safely with advanced whitening treatments.',
    category: 'cosmetic',
    titleInLagos: 'Laser Teeth Whitening in Lagos',
    introPara: 'Achieve a dramatically brighter smile in just one visit with our advanced laser technology.',
    whatHappens: 'A professional whitening gel is activated by a specialized laser to lift deep stains.',
    benefits: ['Noticeably whiter teeth', 'Results in one hour', 'Safe procedure', 'Long-lasting results'],
    process: [
      { title: 'Checkup', text: 'Ensure suitability.' },
      { title: 'Prep', text: 'Gum protection.' },
      { title: 'Laser', text: 'Gel activation.' },
      { title: 'Reveal', text: 'Instant brightness.' },
    ],
  },
  {
    title: 'Tooth Extraction',
    icon: <GiTooth />,
    description: 'Gentle, pain-free tooth removal for your comfort and health.',
    category: 'general',
    titleInLagos: 'Tooth Extraction in Lagos',
    introPara: 'We perform gentle and virtually painless tooth extractions when necessary for your health.',
    whatHappens: 'The area is fully numbed, and our skilled dentists remove the tooth with minimal trauma.',
    benefits: ['Eliminates pain', 'Prevents infection spread', 'Resolves crowding', 'Speeds up recovery'],
    process: [
      { title: 'Numbing', text: 'Full local anesthesia.' },
      { title: 'Extraction', text: 'Gentle removal.' },
      { title: 'Gauze', text: 'Bleeding management.' },
      { title: 'Aftercare', text: 'Recovery guidance.' },
    ],
  },
  {
    title: 'Dental Fillings',
    icon: <MdLayers />,
    description: 'Restore damaged teeth with durable, natural-looking fillings.',
    category: 'general',
    titleInLagos: 'Dental Fillings in Lagos',
    introPara: 'Stop decay in its tracks with our durable, tooth-colored composite fillings.',
    whatHappens: 'Decay is removed and the space is filled with a resin that matches your natural tooth.',
    benefits: ['Stops cavity spread', 'Restores strength', 'Natural appearance', 'Single visit fix'],
    process: [
      { title: 'Removal', text: 'Gentle decay clearing.' },
      { title: 'Bonding', text: 'Preparing the surface.' },
      { title: 'Layering', text: 'Applying the resin.' },
      { title: 'Polishing', text: 'Shaping to match bite.' },
    ],
  },
  {
    title: 'Root Canal Treatment',
    icon: <MdFlashOn />,
    description: 'Save infected teeth with precise, painless root canal therapy.',
    category: 'specialized',
    titleInLagos: 'Root Canal Treatment in Lagos',
    introPara: 'Relieve dental pain and save your natural tooth with our precise root canal therapy.',
    whatHappens: 'The infected pulp is removed, canals are cleaned, and the tooth is sealed and protected.',
    benefits: ['Pain relief', 'Saves natural tooth', 'Prevents extraction', 'Restores function'],
    process: [
      { title: 'Diagnosis', text: 'X-ray evaluation.' },
      { title: 'Cleaning', text: 'Removing infection.' },
      { title: 'Sealing', text: 'Protecting the canals.' },
      { title: 'Restoration', text: 'Applying a crown.' },
    ],
  },
  {
    title: 'Braces & Orthodontics',
    icon: <FaTeeth />,
    description: 'Straighten teeth for a healthy, confident smile at any age.',
    category: 'specialized',
    titleInLagos: 'Braces in Lagos',
    introPara: 'Achieve the straight, healthy smile you have always wanted with modern orthodontic care.',
    whatHappens: 'Brackets and wires guide your teeth into ideal positions over a planned period.',
    benefits: ['Corrects crooked teeth', 'Improves bite', 'Easier cleaning', 'Boosts confidence'],
    process: [
      { title: '3D Scan', text: 'Digital tooth model.' },
      { title: 'Planning', text: 'Movement mapping.' },
      { title: 'Bonding', text: 'Placing the braces.' },
      { title: 'Adjustments', text: 'Monthly guidance.' },
    ],
  },
  {
    title: 'Clear Aligners',
    icon: <MdCheckCircleOutline />,
    description: 'Discreet, comfortable teeth alignment with modern clear aligners.',
    category: 'specialized',
    titleInLagos: 'Clear Aligners in Lagos',
    introPara: 'Straighten your teeth discreetly with custom-made, virtually invisible aligners.',
    whatHappens: 'You wear a series of removable trays that gradually shift your teeth into place.',
    benefits: ['Discreet look', 'Removable for eating', 'Comfortable fit', 'No food restrictions'],
    process: [
      { title: 'Scan', text: 'Digital impression.' },
      { title: 'Preview', text: 'See your future smile.' },
      { title: 'Trays', text: 'Receive your aligners.' },
      { title: 'Checkups', text: 'Progress monitoring.' },
    ],
  },
  {
    title: 'Dental Implants',
    icon: <FaTeethOpen />,
    description: 'Permanent tooth replacement for a strong, natural-looking smile.',
    category: 'specialized',
    titleInLagos: 'Dental Implants in Lagos',
    introPara: 'Rediscover the confidence of a full smile with our permanent implant solutions.',
    whatHappens: 'A titanium post acts as a new root, providing a foundation for a custom crown.',
    benefits: ['Permanent replacement', 'Natural function', 'Preserves bone', 'High success rate'],
    process: [
      { title: 'Assessment', text: 'Bone density check.' },
      { title: 'Surgery', text: 'Post placement.' },
      { title: 'Healing', text: 'Bone integration.' },
      { title: 'Crown', text: 'Final tooth fit.' },
    ],
  },
  {
    title: 'Crowns & Bridges',
    icon: <FaCrown />,
    description: 'Repair and replace teeth with durable crowns and bridges.',
    category: 'cosmetic',
    titleInLagos: 'Crowns & Bridges in Lagos',
    introPara: 'Restore the strength and appearance of damaged teeth with custom-made restorations.',
    whatHappens: 'Damaged teeth are reshaped to hold caps, or gaps are bridged with replacement teeth.',
    benefits: ['Restores strength', 'Protects weak teeth', 'Durable porcelain', 'Prevents shifting'],
    process: [
      { title: 'Prep', text: 'Tooth reshaping.' },
      { title: 'Impression', text: 'Digital scan.' },
      { title: 'Temp', text: 'Interim protection.' },
      { title: 'Fitting', text: 'Permanent cement.' },
    ],
  },
  {
    title: 'Gum Treatment',
    icon: <MdHealing />,
    description: 'Advanced care to prevent and treat gum disease effectively.',
    category: 'specialized',
    titleInLagos: 'Gum Care in Lagos',
    introPara: 'Healthy gums are the foundation of your smile. We treat all stages of gum disease.',
    whatHappens: 'From deep cleanings to targeted therapies, we restore the health of your gum tissues.',
    benefits: ['Stops bleeding', 'Prevents recession', 'Avoids tooth loss', 'Overall health boost'],
    process: [
      { title: 'Exam', text: 'Pocket measurement.' },
      { title: 'Clean', text: 'Deep root planing.' },
      { title: 'Meds', text: 'Infection control.' },
      { title: 'Maintenance', text: 'Long-term care.' },
    ],
  },
  {
    title: 'Child Dental Care',
    icon: <MdChildCare />,
    description: 'Gentle, fun dental care for kids of all ages.',
    category: 'general',
    titleInLagos: 'Pediatric Care in Lagos',
    introPara: 'We make visiting the dentist a positive, fun experience for your little ones.',
    whatHappens: 'Gentle checkups, fluoride treatments, and education in a stress-free environment.',
    benefits: ['Positive attitude', 'Prevents cavities', 'Early detection', 'Parental education'],
    process: [
      { title: 'Intro', text: 'A ride in the chair.' },
      { title: 'Clean', text: 'Gentle polish.' },
      { title: 'Shield', text: 'Sealant application.' },
      { title: 'Reward', text: 'Prize for bravery.' },
    ],
  },
  {
    title: 'X-Rays & Imaging',
    icon: <MdScanner />,
    description: 'Accurate digital imaging for precise diagnosis.',
    category: 'general',
    titleInLagos: 'Digital Imaging in Lagos',
    introPara: 'We use low-radiation digital sensors to get a clear view of your oral health.',
    whatHappens: 'Instant digital images allow for faster, more accurate treatment planning.',
    benefits: ['90% less radiation', 'Instant results', 'Better diagnostics', 'Eco-friendly'],
    process: [
      { title: 'Scan', text: 'Seconds to capture.' },
      { title: 'Review', text: 'Discussing findings.' },
      { title: 'Plan', text: 'Precision targeting.' },
      { title: 'File', text: 'Digital records.' },
    ],
  },
  {
    title: 'Emergency Care',
    icon: <MdEmergency />,
    description: 'Immediate dental treatment for urgent pain or broken teeth.',
    category: 'general',
    titleInLagos: 'Emergency Dentist in Lagos',
    introPara: 'Dental emergencies need prompt attention. We are here to get you out of pain fast.',
    whatHappens: 'Immediate assessment and stabilization for broken teeth or severe pain.',
    benefits: ['Fast pain relief', 'Same-day visits', 'Expert trauma care', 'Prevents damage'],
    process: [
      { title: 'Call', text: 'Immediate triage.' },
      { title: 'Visit', text: 'Rapid assessment.' },
      { title: 'Relief', text: 'Pain management.' },
      { title: 'Fix', text: 'Permanent planning.' },
    ],
  },
  {
    title: 'Veneers & Cosmetics',
    icon: <MdOutlineBrush />,
    description: 'Enhance your smile with veneers and aesthetic dental care.',
    category: 'cosmetic',
    titleInLagos: 'Veneers in Lagos',
    introPara: 'Transform your smile with custom shells that cover chips, gaps, or stains.',
    whatHappens: 'A minimal amount of enamel is prepped to bond porcelain or resin shells.',
    benefits: ['Instant transformation', 'Stain resistant', 'Minimally invasive', 'Perfect finish'],
    process: [
      { title: 'Design', text: 'Your perfect smile.' },
      { title: 'Prep', text: 'Enamel shaping.' },
      { title: 'Scan', text: 'Precision model.' },
      { title: 'Bond', text: 'Permanent fit.' },
    ],
  },
].map((service) => ({ ...service, slug: slugify(service.title) }));

export const headerServices = allServices.filter((s) =>
  ['Scaling & Polishing', 'Laser Teeth Whitening', 'Root Canal Treatment', 'Dental Implants', 'Child Dental Care'].includes(s.title)
);
