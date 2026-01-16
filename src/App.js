// src/App.js
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import your new Header
// FIXED: Changed "header/header" to "header/Header" to match your file
import Header from "./components/header/Header.jsx";

// Import a generic Loader
// FIXED: Changed "Loader/Loader" to "loader/Loader" to match your folder/file
import Loader from "./components/loader/Loader.jsx";

// --- Lazy-loaded page components for your NEW site ---
// These correspond to your header links.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const Appointments = lazy(() => import("./pages/Appointments"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
        {/* Your new Header, appears on all pages */}
        <Header />

        {/* The "App" class can be used for global page styling if needed */}
<div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />

            {/* --- UPDATED: Nested Services Routes --- */}
            {/* This new structure clearly tells the router:
                - /services EXACTLY renders <Services />
                - /services/ANYTHING-ELSE renders <ServiceDetailPage />
            */}
            <Route path="/services">
              <Route index element={<Services />} />
              <Route path=":slug" element={<ServiceDetailPage />} />
            </Route>

          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
