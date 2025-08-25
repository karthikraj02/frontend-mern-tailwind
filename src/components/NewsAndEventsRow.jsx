import React, { useRef, useState } from "react";

import { useParams, Link } from "react-router-dom";

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
// Dummy Data
const newsItems = [
  {
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },{
    date: "10 Jul 2025",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "From Teaching to Innovating: Faculty Upskilling Through FDP",
  },
  // Add more news for carousel if desired
];

const eventItems = [
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
  // Add more items as needed
];

// Main Component
const NewsAndEventsRow = () => {
  const [newsIndex, setNewsIndex] = useState(0);
  const [eventsStart, setEventsStart] = useState(0);
  const MAX_EVENTS = 3; // Events to display at once

  const handlePrevNews = () => setNewsIndex(idx => Math.max(idx - 1, 0));
  const handleNextNews = () => setNewsIndex(idx => Math.min(idx + 1, newsItems.length - 1));

  const handlePrevEvents = () => setEventsStart(s => Math.max(s - 1, 0));
  const handleNextEvents = () => setEventsStart(s => Math.min(s + 1, eventItems.length - MAX_EVENTS));

  // You may want to fetch images dynamically or pass them as props
  const news = newsItems[newsIndex];
  const visibleEvents = eventItems.slice(eventsStart, eventsStart + MAX_EVENTS);

  return (
    <div
      className="news-events-row"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "38px 0 30px 0",
        width: "97%",
        margin: "0 auto",
        gap: 40,
      }}
    >
      {/* NEWS */}
      <section style={{ flex: 1.4, marginRight: 38 }}>
        <div style={{ fontWeight: 600, fontSize: "1.23rem", marginBottom: 12 }}>
          News
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: 340,
            borderRadius: 8,
            background: "#dadada",
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          <img
            src={news.image}
            alt="news"
            style={{
              width: "100%",
              height: "340px",
              objectFit: "cover",
              filter: "brightness(0.83)",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              background: "#fec200",
              color: "#222",
              padding: "6px 18px 6px 12px",
              borderRadius: "0 0 7px 0",
              fontWeight: "bold",
              fontSize: "1.07rem",
              letterSpacing: "0.01em"
            }}
          >
            {news.date}
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              padding: "15px 20px",
              color: "#fff",
              background: "linear-gradient(0deg,rgba(0,0,0,0.6) 98%,rgba(0,0,0,0.11) 100%)",
              fontSize: "1.14rem",
              fontWeight: 500,
            }}
          >
            {news.title}
          </div>
        </div>
        {/* Carousel/page indicators */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "16px 0 0 0",
          gap: 8
        }}>
          {newsItems.map((_, idx) => (
            <span
              key={idx}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: newsIndex === idx ? "#fa9000" : "#eee",
                display: "inline-block",
                margin: "0 2px"
              }}
            />
          ))}
        </div>
        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: 13
        }}>
          <a
            href="#"
            style={{
              color: "#e88407",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "1.02rem",
              letterSpacing: ".02em",
              display: "flex",
              alignItems: "center",
            }}
          >
            VIEW MORE NEWS <span style={{ marginLeft: 5, fontSize: "1.12em" }}>&#8250;</span>
          </a>
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ flex: 1, maxWidth: 420 }}>
        <div style={{ fontWeight: 600, fontSize: "1.23rem", marginBottom: 12 }}>
          Events
        </div>
        <div>
          {visibleEvents.map((event, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 17,
                background: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                padding: "0px 8px",
                borderRadius: "7px",
                minHeight: 65,
                position: "relative",
              }}
            >
              <img
                src={event.image}
                alt="event"
                style={{
                  height: 56,
                  width: 56,
                  objectFit: "cover",
                  borderRadius: "4px",
                  marginTop: 9,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: "#fa9000",
                    background: "#ffeeda",
                    display: "inline-block",
                    fontWeight: "700",
                    padding: "2px 8px",
                    fontSize: ".97rem",
                    borderRadius: "3px",
                    marginBottom: 4,
                  }}
                >
                  {event.date}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#222",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: 185
                  }}
                  title={event.title}
                >
                  {event.title}
                </div>
                <div
                  style={{
                    fontWeight: 400,
                    color: "#666",
                    fontSize: ".94rem",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: 190
                  }}
                  title={event.desc}
                >
                  {event.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel/page indicators for events */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2px 0 11px 0",
          gap: 4
        }}>
          {Array.from({ length: eventItems.length - MAX_EVENTS + 1 }).map((_, idx) => (
            <span
              key={idx}
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: eventsStart === idx ? "#fa9000" : "#eee",
                display: "inline-block",
                margin: "0 1px"
              }}
            />
          ))}
        </div>
        {/* View More & Arrows */}
        <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 3px",
  }}
>
  <Link
    to="/eventcalendar"
    style={{
      color: "#e88407",
      fontWeight: 600,
      textDecoration: "none",
      fontSize: "1.02rem",
      letterSpacing: ".02em",
      display: "flex",
      alignItems: "center",
    }}
  >
    VIEW MORE EVENTS <span style={{ marginLeft: 6, fontSize: "1.12em" }}>&#8250;</span>
  </Link>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      alignItems: "flex-end",
    }}
  >
    <button
      aria-label="Scroll events up"
      onClick={handlePrevEvents}
      disabled={eventsStart === 0}
      style={{
        border: "none",
        background: "#fa9000",
        color: "#fff",
        fontSize: "1.5em",
        borderRadius: "3px",
        width: 32,
        height: 32,
        marginBottom: 2,
        opacity: eventsStart === 0 ? 0.5 : 1,
        cursor: eventsStart === 0 ? "not-allowed" : "pointer",
      }}
    >
      &#9650;
    </button>
            <button
              aria-label="Scroll events down"
              onClick={handleNextEvents}
              disabled={eventsStart >= eventItems.length - MAX_EVENTS}
              style={{
                border: "none",
                background: "#fa9000",
                color: "#fff",
                fontSize: "1.5em",
                borderRadius: "3px",
                width: 32,
                height: 32,
                marginTop: 2,
                opacity: eventsStart >= eventItems.length - MAX_EVENTS ? 0.5 : 1,
                cursor: eventsStart >= eventItems.length - MAX_EVENTS ? "not-allowed" : "pointer"
              }}
            >
              &#9660;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
  
};

export default NewsAndEventsRow;
