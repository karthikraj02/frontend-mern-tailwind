import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


import giphyGif from "./assets/images/events/giphy.gif";
import musicEventImg from "./assets/images/events/music.jpg";
import Cluster2k25Img from "./assets/images/events/Cluster2k25.JPG";
import Elixir2K25Img from "./assets/images/events/Elixir2K25.JPG";
import MBCAsessionImg from "./assets/images/events/Evening-BCA-Session.JPG";
import galleryImg from "./assets/images/events/gallery.jpg";
import EBCAsessionImg from "./assets/images/events/Morning-BCA-Session.JPG";
import IOSnativeImg from "./assets/images/events/ios&native.png";
import talkImg from "./assets/images/events/talk.jpg";
import amruthamahotsavaImg from "./assets/images/events/amruthamahotsava.jpg";
import Spectrum2k24Img from "./assets/images/events/Spectrum2K24.JPG";
import RaniAbbakkaProgramImg from "./assets/images/events/Rani-Abbakka-Program.jpg";
import coldplayImg from "./assets/images/events/coldplay.jpg";
import ragudixitImg from "./assets/images/events/ragudixit.jpg";

const featuredEvents = [
  {
    title: "Orchestra by Swadham Band",
    date: "Monday, August 6, 2025",
    time: "6pm to 8pm",
    description:
      "A night of world-class music performances at Mudana Mantapa, MGM. Entry is free for all campus members.",
    image: musicEventImg,
    cta: "Register Now",
  },
  {
    title: "Orchestra by Ragudixith",
    date: "Monday, August 6, 2025",
    time: "6pm to 8pm",
    description:
      "A night of world-class music performances at Mudana Mantapa, MGM. Entry is free for all campus members.",
    image: ragudixitImg,
    cta: "Register Now",
  },
  {
    title: "ColdPlay World Tour",
    date: "Friday, August 15, 2025",
    time: "4pm to 11pm",
    description:
      "A night of world-class music performances at Mudana Mantapa, MGM. Entry is free for all campus members.",
    image: coldplayImg,
    cta: "Register Now",
  },
];

const eventList = [
  {
    title: "Cluster 2k25.",
    date: "Jul 26, 2025",
    time: "1:00pm-2:30pm",
    desc: "Cluster 2k25.",
    image: Cluster2k25Img,
    type: "Talk",
    location: "A.V Hall",
  },
  {
    title: "An initiative dedicated to honoring & promoting history & legacy of a legendary queen & freedom fighter from Karnataka",
    date: "Aug 3 – Sep 3, 2025",
    time: "1:00pm-3:00pm",
    desc: "Small talk about Rani Abbakka.",
    image: RaniAbbakkaProgramImg,
    type: "History",
    location: "A.V Hall",
  },
  {
    title: "PG session for UG Evening BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "3:00pm-5:30pm",
    desc: "About MSc Computer Science.",
    image: EBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "1:00pm-2:30pm",
    desc: "About MSc Computer Science.",
    image: MBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Aug 13, 2025",
    time: "1:00pm – 2:30pm",
    desc: "About MSc Computer Science.",
    image: galleryImg,
    type: "Session",
    location: "Webinar",
  },
  {
    title: "Elixir 2K25: Chemistry Fest Oraganised by Manglore University",
    date: "Apr 3, 2025",
    time: "9:00am-5:00pm",
    desc: "Manglore University Elixir 2K25",
    image: Elixir2K25Img,
    type: "Fest",
    location: "Manglore University",
  },
  {
    title: "2 day Workshop on Basics of React Native and IOS Application.",
    date: "Apr 14-15, 2025",
    time: "9am – 5pm",
    desc: "Workshop on React Native & IOS App.",
    image: IOSnativeImg,
    type: "Workshop",
    location: "CS Lab",
  },
  {
    title: "Workshop on Hardware Implimentation on Internet of Things.",
    date: "Sep 3, 2025",
    time: "1:00pm-5:00pm",
    desc: "Workshop on IOT.",
    image: talkImg,
    type: "Workshop",
    location: "Gallery West",
  },
  {
    title: "Amrutha Mahotsava: Celebrating 75th year Anniversary of MGM College.",
    date: "Nov 29 - Dec 1, 2024",
    time: "8:30pm",
    desc: "Amrutha Mahotsava.",
    image: amruthamahotsavaImg,
    type: "Screening",
    location: "Field Lawn",
  },
  {
    title: "Spectrum 2k24: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2024",
    time: "5:30pm",
    desc: "Spectrum 2k24.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k23: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2023",
    time: "5:30pm",
    desc: "Spectrum 2k23.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k22: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2022",
    time: "5:30pm",
    desc: "Spectrum 2k22.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k21: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2021",
    time: "5:30pm",
    desc: "Spectrum 2k21.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k20: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2020",
    time: "5:30pm",
    desc: "Spectrum 2k20.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
];

const filters = ["All", "Past", "Today", "Month"];

const getUnique = (arr, key) =>
  Array.from(
    new Set(
      arr.map((ev) => {
        if (key === "year") {
          const match = ev.date.match(/\b(19|20)\d{2}\b/);
          return match ? match[0] : "";
        }
        return ev[key];
      })
    )
  )
    .filter(Boolean)
    .sort();

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

const EventCalendar = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Modal & filter states
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [modalEventTypes, setModalEventTypes] = useState([]);
  const [modalLocations, setModalLocations] = useState([]);
  const [modalYears, setModalYears] = useState([]);
  const dateInputRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((idx) => (idx + 1) % featuredEvents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        setFilterModalOpen(false);
        setDateModalOpen(false);
      }
    }
    if (filterModalOpen || dateModalOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [filterModalOpen, dateModalOpen]);

  const currentFeaturedEvent = featuredEvents[currentFeatureIndex];

  // Filtering logic
  let filteredEvents = [...eventList];
  if (selectedDate) {
    const [yyyy, mm, dd] = selectedDate.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Sept",
    ];
    const month = monthNames[parseInt(mm, 10) - 1];
    filteredEvents = filteredEvents.filter(
      (ev) =>
        ev.date.includes(`${month} ${parseInt(dd, 10)}`) ||
        ev.date.includes(`${month} ${dd}`) ||
        ev.date.includes(`${month}`)
    );
  }
  if (!selectedDate) {
    if (activeFilter === "Today") {
      filteredEvents = filteredEvents.filter((ev) => ev.date === "Aug 1, 2025");
    } else if (activeFilter === "Month") {
      filteredEvents = filteredEvents.filter(
        (ev) =>
          ev.date.includes("Aug") || ev.date.includes("Sep") || ev.date.includes("Sept")
      );
    } else if (activeFilter === "Past") {
      filteredEvents = [];
    }
  }
  if (modalEventTypes.length > 0) {
    filteredEvents = filteredEvents.filter((ev) => modalEventTypes.includes(ev.type));
  }
  if (modalLocations.length > 0) {
    filteredEvents = filteredEvents.filter((ev) =>
      modalLocations.includes(ev.location)
    );
  }
  if (modalYears.length > 0) {
    filteredEvents = filteredEvents.filter((ev) => {
      const match = ev.date.match(/\b(19|20)\d{2}\b/);
      return match && modalYears.includes(match[0]);
    });
  }

  const handleDatePicked = (date) => {
    setSelectedDate(date);
    setActiveFilter("All");
    setDateModalOpen(false);
  };

  // --- RENDER ---
  return (
    <div
      className="calendar-body"
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        margin: 0,
        padding: "0 0 2rem 0",
        background: "#fafafcff",
        minHeight: "100vh",
      }}
    >
      {/* Featured event */}
     <section
  className="relative overflow-hidden py-8 rounded-lg max-w-7xl mx-auto mb-8 text-white"
  style={{
    backgroundImage: `url(${giphyGif})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: 800,
              marginBottom: 16,
              letterSpacing: -2,
            }}
          >
            <span style={{ color: "#feb721", marginRight: 8 }}>Events</span>
            Calendar
          </h1>
          <div
            className="featured-event-card"
            style={{
              display: "flex",
              flexWrap: "wrap",
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 4px 18px #23217216",
              alignItems: "stretch",
              overflow: "hidden",
              marginBottom: 35,
              minHeight: 230,
              maxWidth: 850,
            }}
          >
            <img
              src={currentFeaturedEvent.image}
              alt={currentFeaturedEvent.title}
              style={{
                width: 250,
                height: "100%",
                objectFit: "cover",
                minHeight: 200,
                flexShrink: 0,
              }}
            />
            <div
              style={{
                flex: 1,
                padding: "1.6rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minWidth: 220,
              }}
            >
              <h2
                style={{
                  fontSize: 24,
                  color: "#242082",
                  margin: 0,
                  fontWeight: "700",
                }}
              >
                {currentFeaturedEvent.title}
              </h2>
              <div style={{ margin: "0.6em 0" }}>
                <span style={{ color: "#222243", fontWeight: 600, fontSize: 15 }}>
                  {currentFeaturedEvent.date}
                </span>
                <span
                  style={{ color: "#222243", fontSize: 13, fontWeight: 500, marginLeft: 24 }}
                >
                  {currentFeaturedEvent.time}
                </span>
              </div>
              <p style={{ fontSize: 15, color: "#2d2d41" }}>
                {currentFeaturedEvent.description}
              </p>
              <a
                href="#"
                className="featured-cta-btn"
                style={{
                  background: "#22227e",
                  color: "#fff",
                  borderRadius: 20,
                  padding: "0.59rem 1.8rem",
                  fontWeight: "700",
                  letterSpacing: 0.7,
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                {currentFeaturedEvent.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and date picker buttons */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
          padding: "1rem 1.1rem 0",
        }}
      >
        {/* Filter button */}
        <button
          onClick={() => setFilterModalOpen(true)}
          style={{
            background: "#88001b",
            color: "#fff",
            border: 0,
            borderRadius: 7,
            padding: "0.69rem 2.3rem",
            fontWeight: 600,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            boxShadow: "0 1px 6px #cb211f",
            outline: "none",
          }}
        >
          <svg width={22} height={22} fill="none" viewBox="0 0 24 24" style={{ marginRight: 5 }}>
            <path d="M3 6h18M7 12h10M10 18h4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Filter
        </button>
        {/* Filter modal */}
        {filterModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={() => setFilterModalOpen(false)}
            style={{
              position: "fixed",
              zIndex: 10001,
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(40,20,54,0.29)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 32px #23217222",
                maxWidth: 420,
                width: "100%",
                minWidth: 340,
                padding: "2rem",
                maxHeight: "86vh",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <button
                onClick={() => setFilterModalOpen(false)}
                aria-label="Close Filter"
                style={{ position: "absolute", right: 16, top: 12, background: "none", border: 0, fontSize: 28, fontWeight: "bold", cursor: "pointer" }}>
                ×
              </button>
              <h3 style={{ color: "#7a1436", marginBottom: 20, fontWeight: "bold" }}>Filter Events</h3>
              {/* Event Type filter */}
              <div style={{ marginBottom: 22 }}>
                <strong>Event Type</strong>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
                  {getUnique(eventList, "type").map(type => (
                    <label key={type} style={{ cursor: "pointer", fontWeight: 500 }}>
                      <input type="checkbox" value={type} checked={modalEventTypes.includes(type)}
                        onChange={e => {
                          setModalEventTypes(s => e.target.checked ? [...s, type] : s.filter(t => t !== type));
                        }}
                        style={{ marginRight: 5 }} />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              {/* Location filter */}
              <div style={{ marginBottom: 22 }}>
                <strong>Location</strong>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
                  {getUnique(eventList, "location").map(loc => (
                    <label key={loc} style={{ cursor: "pointer", fontWeight: 500 }}>
                      <input type="checkbox" value={loc} checked={modalLocations.includes(loc)}
                        onChange={e => {
                          setModalLocations(s => e.target.checked ? [...s, loc] : s.filter(l => l !== loc));
                        }}
                        style={{ marginRight: 5 }} />
                      {loc}
                    </label>
                  ))}
                </div>
              </div>
              {/* Year filter */}
              <div style={{ marginBottom: 22 }}>
                <strong>Year</strong>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
                  {getUnique(eventList, "year").map(year => (
                    <label key={year} style={{ cursor: "pointer", fontWeight: 500 }}>
                      <input type="checkbox" value={year} checked={modalYears.includes(year)}
                        onChange={e => {
                          setModalYears(s => e.target.checked ? [...s, year] : s.filter(y => y !== year));
                        }}
                        style={{ marginRight: 5 }} />
                      {year}
                    </label>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
                <button
                  onClick={() => setFilterModalOpen(false)}
                  style={{ flex: 1, background: "#242082", color: "#fff", borderRadius: 13, fontWeight: "bold", fontSize: 16, padding: "0.6rem", border: 0 }}>
                  Apply
                </button>
                <button
                  onClick={() => {
                    setModalEventTypes([]);
                    setModalLocations([]);
                    setModalYears([]);
                  }}
                  style={{ flex: 1, background: "#fed6ce", color: "#8424e", borderRadius: 13, fontWeight: "bold", fontSize: 16, padding: "0.6rem", border: 0 }}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Date picker button */}
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={dateModalOpen}
          onClick={() => setDateModalOpen(true)}
          style={{
            background: "#88001b",
            color: "#fff",
            borderRadius: 7,
            border: 0,
            padding: "0.69rem 2.3rem",
            fontWeight: 600,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            boxShadow: "0 1px 6px #cb211f",
            outline: "none",
            marginBottom: 4,
            position: "relative",
          }}>
          <svg width={22} height={22} fill="none" viewBox="0 0 24 24" style={{ marginRight: 5 }}>
            <rect x={3} y={5} width={18} height={16} rx={2} stroke="currentColor" strokeWidth={2} />
            <path d="M16 3v4M8 3v4M3 9h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          </svg>
          Select Date
          {selectedDate && (
            <span style={{ marginLeft: 10, color: "#fed6cc", fontWeight: "normal", fontSize: 16, display: "flex", alignItems: "center" }}>
              {selectedDate}
              <span onClick={e => { e.stopPropagation(); setSelectedDate(""); }} style={{ marginLeft: 6, cursor: "pointer", fontWeight: "bold", color: "#fff" }} title="Clear date">
                ×
              </span>
            </span>
          )}
        </button>
        {/* Date picker modal */}
        {dateModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={() => setDateModalOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(40,20,54,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10001,
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "2rem",
                width: "90%",
                maxWidth: 345,
                minWidth: 330,
                position: "relative",
                boxShadow: "0 3px 21px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button onClick={() => setDateModalOpen(false)} aria-label="Close Date Picker" style={{ position: "absolute", top: 8, right: 12, border: 0, background: "none", fontSize: 28, fontWeight: "bold", color: "#555", cursor: "pointer" }}>×</button>
              <h3 style={{ marginBottom: 20, fontWeight: "bold", fontSize: "1.2rem", color: "#7a1436" }}>Select Date</h3>
              <input type="date" ref={dateInputRef} value={selectedDate} onChange={e => handleDatePicked(e.target.value)} aria-label="Select event date"
                style={{ fontSize: 18, padding: "0.6rem 1rem", borderRadius: 8, border: "1.5px solid #ccc", fontFamily: "inherit", marginBottom: 16 }} />
            </div>
          </div>
        )}
      </div>
      
      {/* Tab filter buttons */}
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          padding: "1rem 1rem 0",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setSelectedDate("");
            }}
            style={{
              cursor: "pointer",
              background: activeFilter === filter ? "#222884" : "#fff",
              color: activeFilter === filter ? "#fff" : "#222222",
              padding: "0.5em 1.3em",
              borderRadius: 25,
              border: "none",
              fontWeight: "bold",
              boxShadow:
                activeFilter === filter ? "0 3px 9px rgb(34 34 132 / 0.3)" : "none",
              fontSize: 16,
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Events grid */}
      <main style={{ maxWidth: 1200, margin: "2rem auto 4rem", padding: "0 1rem" }}>
        <h2
          style={{
            color: "#242082",
            fontWeight: "800",
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          Events
        </h2>
        {filteredEvents.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#aaa" }}>No events found for this filter.</p>
        ) : (
          <>
            <section
              className="calendar-event-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: "1.4rem",
              }}
            >
              {filteredEvents
                .slice(0, showAll ? filteredEvents.length : 8)
                .map((ev, idx) => (
                  <EventCard
                    key={`${ev.title}-${idx}`}
                    ev={ev}
                    to={`/events/${slugify(ev.title)}`}
                  />
                ))}
            </section>

            {filteredEvents.length > 8 && (
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <button
                  onClick={() => setShowAll((s) => !s)}
                  style={{
                    border: "none",
                    background: "none",
                    color: "#2a2a7b",
                    fontWeight: "700",
                    fontSize: 18,
                    cursor: "pointer",
                    padding: "0.7rem 1rem",
                    borderRadius: 12,
                    boxShadow: "inset 0 0 8px #b9bade",
                  }}
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Event Card hover styles */}
      <style>{`
        .calendar-event-grid > a {
          text-decoration: none;
          color: inherit;
        }
        .calendar-event-grid > a > div {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          border-radius: 1.2rem;
        }
        .calendar-event-grid > a:hover > div {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          z-index: 5;
          position: relative;
        }
        @media (max-width: 900px) {
          .calendar-event-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }
        }
        @media (max-width: 600px) {
          .calendar-event-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

const EventCard = ({ ev, to }) => (
  <Link to={to} className="event-card">
    <div
      className="calendar-event-grid-item"
      style={{
        boxShadow: "0 1px 8px rgba(41, 41, 41, 0.04)",
        borderRadius: "1.2rem",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        minHeight: 260,
      }}
    >
      <div
        style={{
          height: 125,
          width: "100%",
          backgroundColor: "#eee",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ev.image}
          alt={ev.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          padding: "1rem 1.2rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ color: "#7b4bdb", fontWeight: "600", fontSize: 15 }}>
            {ev.type}
          </span>
          <span style={{ color: "#444", marginLeft: 10 }}>{ev.date}</span>
          <h3
            style={{
              fontWeight: "bold",
              color: "#222",
              fontSize: 18,
              marginTop: 6,
            }}
          >
            {ev.title}
          </h3>
          <p style={{ color: "#555", fontSize: 14, marginTop: 4 }}>{ev.desc}</p>
        </div>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            color: "#666",
          }}
        >
          <span
            style={{
              backgroundColor: "#e4e0f7",
              color: "#6441a5",
              borderRadius: 12,
              padding: "0.2rem 0.7rem",
            }}
          >
            {ev.location}
          </span>
          <span>{ev.time}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default EventCalendar;
