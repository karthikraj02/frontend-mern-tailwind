import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventCalendar from "./components/EventCalendar";
import EventDetail from "./components/EventDetail"; // Import EventDetail component

// Dummy components for demo
function Home() {
  return <div className="p-8">Welcome to Home Page</div>;
}
function VisionMission() {
  return <div className="p-8">Vision & Mission content here</div>;
}
function Principal() {
  return <div className="p-8">Principal content here</div>;
}
function Management() {
  return <div className="p-8">Management content here</div>;
}
function History() {
  return <div className="p-8">History content here</div>;
}
function Gallery() {
  return <div className="p-8">Image Gallery content here</div>;
}
function Contact() {
  return <div className="p-8">Contact us content here</div>;
}
// Add more dummy components as needed from nav
// Fallback 404 component
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* About */}
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/management" element={<Management />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Academics, Admissions, Faculty and Campus, Cultural Centres, Activities routes can be added similarly */}

        {/* Events Section */}
        <Route path="/eventcalendar" element={<EventCalendar />} />
        <Route path="/events/:slug" element={<EventDetail />} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}
