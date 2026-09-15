# Prime Dental Clinic - Patient Portal

This repository contains the React frontend for the Prime Dental Clinic application[cite: 2]. It serves as the primary patient-facing portal, providing a modern interface for discovering dental services, reviewing patient testimonials, and requesting appointments[cite: 2].

## Key Features

*   **Lazy-Loaded Routing:** Optimized performance using React `Suspense` and dynamic imports for all major page components[cite: 2].
*   **Dynamic Service Pages:** A dedicated routing structure cleanly separates the main services overview from detailed, category-specific service pages[cite: 2].
*   **Online Appointments:** An integrated booking form with state management and toast notifications for user feedback[cite: 2].
*   **Interactive UI Elements:** Responsive mobile navigation, custom CSS-driven animations, and a dynamic work gallery[cite: 2].

## Tech Stack

*   **Framework:** React with React Router DOM for client-side navigation[cite: 2].
*   **Styling:** Pure CSS utilizing a comprehensive set of CSS variables for consistent global theming[cite: 2].
*   **Icons & Graphics:** React Icons and inline SVGs for lightweight visual elements[cite: 2].
*   **Notifications:** React Toastify for non-blocking UI alerts and error handling[cite: 2].

## Getting Started

1. Install the necessary frontend dependencies using `npm install` or `yarn install`.
2. Start the local development server by running `npm start`.
3. Ensure the EMR backend is running locally, or update the `API_BASE_URL` in `src/config/api.js` to point to your Vercel deployment[cite: 2].