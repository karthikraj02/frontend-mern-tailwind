import React, { useState, useRef, useEffect } from "react";
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
    description: "A night of world-class music performances at Mudana Mantapa, MGM. Entry free for all campus members.",
    image: musicEventImg,
    cta: "Register Now",
  },
  {
    title: "Orchestra by Ragudixith",
    date: "Monday, August 6, 2025",
    time: "6pm to 8pm",
    description: "A night of world-class music performances at Mudana Mantapa, MGM. Entry free for all campus members.",
    image: ragudixitImg,
    cta: "Register Now",
  },
  {
    title: "ColdPlay World Tour to MGM",
    date: "Friday, August 15, 2025",
    time: "4pm to 11pm",
    description: "A night of world-class music performances at Mudana Mantapa, MGM. Entry free for all campus members.",
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
  {
    title: "Spectrum 2k19: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2019",
    time: "5:30pm",
    desc: "Spectrum 2k19.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k18: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2018",
    time: "5:30pm",
    desc: "Spectrum 2k18.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k17: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2017",
    time: "5:30pm",
    desc: "Spectrum 2k17.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k16: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2016",
    time: "5:30pm",
    desc: "Spectrum 2k16.",
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

const EventCalendar = () => {
  // ROTATING FEATURED EVENT STATE
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((idx) => (idx + 1) % featuredEvents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentFeaturedEvent = featuredEvents[currentFeatureIndex];

  // FILTER STATES
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // MODALS STATES
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [modalEventTypes, setModalEventTypes] = useState([]);
  const [modalLocations, setModalLocations] = useState([]);
  const [modalYears, setModalYears] = useState([]);

  const dateInputRef = useRef();

  // FILTERING LOGIC
  let filteredEvents = eventList;

  // Selected Date filtering
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

  // Filter by tab only if no selectedDate
  if (!selectedDate) {
    if (activeFilter === "Today") {
      filteredEvents = filteredEvents.filter((ev) => ev.date === "Aug 5, 2025");
    } else if (activeFilter === "Month") {
      filteredEvents = filteredEvents.filter(
        (ev) =>
          ev.date.includes("Aug") ||
          ev.date.includes("Sep") ||
          ev.date.includes("Sept")
      );
    } else if (activeFilter === "Past") {
      filteredEvents = [];
    }
  }

  // Modal filters
  if (modalEventTypes.length) {
    filteredEvents = filteredEvents.filter((ev) =>
      modalEventTypes.includes(ev.type)
    );
  }
  if (modalLocations.length) {
    filteredEvents = filteredEvents.filter((ev) =>
      modalLocations.includes(ev.location)
    );
  }
  if (modalYears.length) {
    filteredEvents = filteredEvents.filter((ev) => {
      const matchYear = ev.date.match(/\b(19|20)\d{2}\b/);
      return matchYear && modalYears.includes(matchYear[0]);
    });
  }

  // Modal control functions
  const openFilterModal = () => setFilterModalOpen(true);
  const closeFilterModal = () => setFilterModalOpen(false);
  const resetFilterModal = () => {
    setModalEventTypes([]);
    setModalLocations([]);
    setModalYears([]);
  };

  const openDateModal = () => setDateModalOpen(true);
  const closeDateModal = () => setDateModalOpen(false);
  const applyDateModal = () => closeDateModal();
  const clearDate = () => {
    setSelectedDate("");
    closeDateModal();
  };

  useEffect(() => {
    if (dateModalOpen && dateInputRef.current) {
      dateInputRef.current.focus();
    }
  }, [dateModalOpen]);

  // Keyboard event handler for modals + body scroll lock
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        closeFilterModal();
        closeDateModal();
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

  const handleDatePicked = (date) => {
    setSelectedDate(date);
    setActiveFilter("All");
  };

  return (
    <div
      className="calendar-body"
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        margin: 0,
        padding: "0 0 2rem 0",
        background: "#f7f6fb",
        minHeight: "100vh",
      }}
    >
      {/* Featured Event */}
      <section
        style={{
          background: "linear-gradient(90deg, #242082 60%, #0e0f2c 120%)",
          padding: "1rem 0 2.45rem",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.1rem" }}>
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
              alt=""
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
                style={{ fontSize: 24, margin: 0, fontWeight: 700, color: "#242082" }}
              >
                {currentFeaturedEvent.title}
              </h2>
              <div style={{ margin: "0.6em 0" }}>
                <span style={{ color: "#8428e4", fontWeight: 600, fontSize: 15 }}>
                  {currentFeaturedEvent.date}
                </span>
                <span
                  style={{
                    color: "#222243",
                    fontSize: 13,
                    marginLeft: 24,
                    fontWeight: 500,
                  }}
                >
                  {currentFeaturedEvent.time}
                </span>
              </div>
              <p style={{ fontSize: 15, color: "#2d2d41", marginBottom: "1em" }}>
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
                  fontWeight: 700,
                  letterSpacing: 0.7,
                  textDecoration: "none",
                  transition: "background .2s",
                  width: "fit-content",
                }}
              >
                {currentFeaturedEvent.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Select Date Buttons */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
          padding: "1rem 1.1rem 0 1.1rem",
        }}
      >
        {/* Filter Button */}
        <button
          onClick={openFilterModal}
          style={{
            background: "#88001b",
            color: "#fff",
            border: 0,
            borderRadius: 7,
            padding: "0.69em 2.3em",
            fontWeight: 600,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            transition: "background .2s",
            boxShadow: "0 1px 6px #cb21311f",
            outline: "none",
          }}
          aria-haspopup="dialog"
          aria-expanded={filterModalOpen}
        >
          <svg
            width={22}
            height={22}
            fill="none"
            viewBox="0 0 24 24"
            style={{ marginRight: 5 }}
          >
            <path
              d="M3 6h18M7 12h10M10 18h4"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filter
        </button>

        {/* Filter Modal */}
        {filterModalOpen && (
          <div
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
            style={{
              position: "fixed",
              zIndex: 10001,
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(40,20,54,0.29)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={closeFilterModal}
          >
            <div
              style={{
                minWidth: 340,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 4px 32px #2e2e4b2c",
                padding: "2.3rem 2.1rem 2.1rem 2.1rem",
                maxHeight: "86vh",
                overflowY: "auto",
                minHeight: 210,
                width: "100%",
                maxWidth: 420,
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeFilterModal}
                style={{
                  position: "absolute",
                  top: 11,
                  right: 17,
                  border: 0,
                  background: "none",
                  color: "#202055",
                  fontWeight: 700,
                  fontSize: 30,
                  cursor: "pointer",
                }}
                aria-label="Close Filters"
              >
                ×
              </button>
              <h3
                style={{
                  margin: "0 0 1.2rem 0",
                  fontWeight: 800,
                  color: "#7d1436",
                }}
              >
                Filter Events
              </h3>

              <div style={{ marginBottom: 22 }}>
                <strong style={{ color: "#5e4314" }}>Event Type</strong>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 8,
                  }}
                >
                  {getUnique(eventList, "type").map((type) => (
                    <label
                      key={type}
                      style={{ fontWeight: 500, fontSize: 15, cursor: "pointer" }}
                    >
                      <input
                        type="checkbox"
                        value={type}
                        checked={modalEventTypes.includes(type)}
                        onChange={(e) => {
                          setModalEventTypes((s) =>
                            e.target.checked ? [...s, type] : s.filter((t) => t !== type)
                          );
                        }}
                        style={{ marginRight: 5 }}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <strong style={{ color: "#5e4314" }}>Location</strong>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 8,
                  }}
                >
                  {getUnique(eventList, "location").map((loc) => (
                    <label
                      key={loc}
                      style={{ fontWeight: 500, fontSize: 15, cursor: "pointer" }}
                    >
                      <input
                        type="checkbox"
                        value={loc}
                        checked={modalLocations.includes(loc)}
                        onChange={(e) => {
                          setModalLocations((s) =>
                            e.target.checked ? [...s, loc] : s.filter((l) => l !== loc)
                          );
                        }}
                        style={{ marginRight: 5 }}
                      />
                      {loc}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <strong style={{ color: "#5e4314" }}>Year</strong>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 8,
                  }}
                >
                  {getUnique(eventList, "year").map((year) => (
                    <label
                      key={year}
                      style={{ fontWeight: 500, fontSize: 15, cursor: "pointer" }}
                    >
                      <input
                        type="checkbox"
                        value={year}
                        checked={modalYears.includes(year)}
                        onChange={(e) => {
                          setModalYears((s) =>
                            e.target.checked ? [...s, year] : s.filter((y) => y !== year)
                          );
                        }}
                        style={{ marginRight: 5 }}
                      />
                      {year}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
                <button
                  onClick={closeFilterModal}
                  style={{
                    background: "#242082",
                    color: "#fff",
                    border: 0,
                    borderRadius: 13,
                    padding: "0.6em 1.5em",
                    fontWeight: 700,
                    fontSize: 16,
                    flex: "1 1 23%",
                  }}
                >
                  Apply
                </button>
                <button
                  onClick={resetFilterModal}
                  style={{
                    background: "#fed6ce",
                    color: "#8428e4",
                    border: 0,
                    borderRadius: 13,
                    padding: "0.6em 1.5em",
                    fontWeight: 700,
                    fontSize: 16,
                    flex: "1 1 23%",
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Select Date Button */}
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={dateModalOpen}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#88001b",
            color: "#fff",
            borderRadius: 7,
            padding: "0.69em 2.3em",
            fontWeight: 600,
            fontSize: 18,
            gap: 8,
            cursor: "pointer",
            boxShadow: "0 1px 6px #cb21311f",
            outline: "none",
            border: 0,
            marginBottom: 4,
            position: "relative",
          }}
          onClick={() => setDateModalOpen(true)}
        >
          <svg
            width={22}
            height={22}
            fill="none"
            viewBox="0 0 24 24"
            style={{ marginRight: 5 }}
          >
            <rect
              x={3}
              y={5}
              width={18}
              height={16}
              rx={2}
              stroke="currentColor"
              strokeWidth={2}
            />
            <path
              d="M16 3v4M8 3v4M3 9h18"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          Select a Date
          {selectedDate && (
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
                marginLeft: 10,
                color: "#fedcdc",
                display: "flex",
                alignItems: "center",
              }}
            >
              {selectedDate}
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: 6,
                  fontWeight: 700,
                  color: "#fff",
                }}
                title="Clear date"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDate("");
                }}
              >
                ×
              </span>
            </span>
          )}
        </button>

        {dateModalOpen && (
          <div
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
            style={{
              position: "fixed",
              zIndex: 10001,
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(40,20,54,0.29)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setDateModalOpen(false)}
          >
            <div
              style={{
                minWidth: 330,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 18px #3a387c22",
                padding: "2.2rem 2.1rem",
                minHeight: 150,
                width: "100%",
                maxWidth: 345,
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setDateModalOpen(false)}
                style={{
                  position: "absolute",
                  top: 11,
                  right: 17,
                  border: 0,
                  background: "none",
                  color: "#373775",
                  fontWeight: 700,
                  fontSize: 28,
                  cursor: "pointer",
                }}
                aria-label="Close Date Picker"
              >
                ×
              </button>
              <h3
                style={{ margin: 0, marginBottom: 20, fontWeight: 800, color: "#7d1436" }}
              >
                Select Date
              </h3>
              <input
                ref={dateInputRef}
                type="date"
                aria-label="Pick event date"
                value={selectedDate}
                onChange={(e) => handleDatePicked(e.target.value)}
                style={{
                  fontSize: 18,
                  padding: "0.55em 1.0em",
                  borderRadius: 8,
                  border: "1.3px solid #ddd",
                  fontFamily: "inherit",
                  marginBottom: 16,
                }}
              />
              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <button
                  type="button"
                  style={{
                    background: "#242082",
                    color: "#fff",
                    border: 0,
                    borderRadius: 13,
                    padding: "0.6em 1.5em",
                    fontWeight: 700,
                    fontSize: 16,
                    flex: "1 1 23%",
                  }}
                  onClick={applyDateModal}
                  disabled={!selectedDate}
                >
                  Apply
                </button>
                <button
                  type="button"
                  style={{
                    background: "#fed6ce",
                    color: "#8428e4",
                    border: 0,
                    borderRadius: 13,
                    padding: "0.6em 1.5em",
                    fontWeight: 700,
                    fontSize: 16,
                    flex: "1 1 23%",
                  }}
                  onClick={clearDate}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "1.45rem 1.25rem 0 1.25rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2.5em",
        }}
      >
        <div style={{ display: "flex", gap: "0.8em" }}>
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-tab${activeFilter === f ? " active" : ""}`}
              onClick={() => {
                setActiveFilter(f);
                setSelectedDate("");
              }}
              style={{
                border: 0,
                background: activeFilter === f ? "#22227e" : "#fff",
                color: activeFilter === f ? "#fff" : "#222243",
                borderRadius: 22,
                fontWeight: 700,
                padding: ".55em 1.5em",
                fontSize: 16,
                boxShadow:
                  activeFilter === f ? "0 2px 8px #1111920c" : undefined,
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <main
        style={{
          maxWidth: 1200,
          margin: "1.5rem auto",
          padding: "0 1.2rem",
        }}
      >
        <h2
          style={{
            margin: "0 0 1.2rem 0",
            fontWeight: 800,
            fontSize: 28,
            color: "#242082",
            letterSpacing: -0.5,
          }}
        >
          Events
        </h2>
        {filteredEvents.length === 0 ? (
          <div style={{ fontStyle: "italic", color: "#adadca", padding: "1em 0 0 0" }}>
            No events found for this filter.
          </div>
        ) : (
          <section
            className="calendar-event-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(272px, 1fr))",
              gap: "1.4em",
              width: "100%",
              margin: "0 0 2.5em 0",
            }}
          >
            {(showAll ? filteredEvents : filteredEvents.slice(0, 8)).map(
              (item, i) => (
                <EventCard key={item.title + i} ev={item} />
              )
            )}
          </section>
        )}
        {filteredEvents.length > 8 && (
          <div style={{ textAlign: "center", marginTop: -8 }}>
            <button
              className="showall-ev-btn"
              style={{
                background: "none",
                color: "#2a2a7b",
                border: 0,
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
                padding: ".3em 1.2em",
                borderRadius: 11,
              }}
              onClick={() => setShowAll((a) => !a)}
            >
              {showAll ? "Show Less Events" : "Show All Events"}
            </button>
          </div>
        )}
      </main>

      {/* Minimal responsiveness */}
      <style>{`
        @media (max-width: 1000px) {
          .featured-event-card { flex-direction: column !important; }
          .featured-event-card img { width: 100% !important; min-height: 170px !important; }
        }
        @media (max-width: 700px) {
          .calendar-body h1 { font-size: 2.1rem !important; }
          .mit-banner-left h2, .event-title { font-size: 1.1rem !important; }
          .calendar-event-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

const EventCard = ({ ev }) => (
  <div
    className="calendar-event-card"
    style={{
      boxShadow: "0 1px 8px #2f296810",
      borderRadius: "1.1em",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      minHeight: 240,
      transition: "box-shadow .17s",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "100%",
        height: 115,
        background: "#eee",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={ev.image}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div
      style={{
        padding: "1.23em 1.3em",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          color: "#a392e0",
          fontWeight: 700,
          letterSpacing: 1,
          fontSize: 14,
          marginBottom: 3,
        }}
      >
        {ev.type} • <span style={{ color: "#252060" }}>{ev.date}</span>
      </span>
      <h3
        style={{
          fontSize: 16.7,
          color: "#252060",
          fontWeight: 700,
          margin: "4px 0 7px",
          lineHeight: 1.33,
        }}
      >
        {ev.title}
      </h3>
      <div style={{ color: "#232243", fontSize: 14.4, flex: 1 }}>{ev.desc}</div>
      <div
        style={{
          fontSize: 13,
          color: "#7d7e96",
          marginTop: 12,
          display: "flex",
          alignItems: "center",
          gap: 11,
        }}
      >
        <span
          style={{
            background: "#f6f2fc",
            color: "#6a54b9",
            fontWeight: 600,
            borderRadius: 9,
            padding: "3px 10px",
            fontSize: 13,
          }}
        >
          {" "}
          {ev.location}{" "}
        </span>
        <span style={{ fontWeight: 500, color: "#363675" }}>{ev.time}</span>
      </div>
    </div>
  </div>
);

export default EventCalendar;
