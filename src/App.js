import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Programs from './components/Programs';
import About from './components/About';
import EventCalendar from './components/EventCalendar';
import EventDetail from './components/EventDetail'; // Import EventDetail component

import './main.css';
<<<<<<< HEAD
=======
import './Footer.css';
import './Header.css';
>>>>>>> aa459b8 (Initial commit)

// Fallback 404 component
const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: 50 }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/eventcalendar" element={<EventCalendar />} />


        {/* New route for event details with slug param */}
        <Route path="/events/:slug" element={<EventDetail />} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
