import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaShareAlt,
  FaTrain,
  FaCar,
  FaWalking,
  FaChevronRight,
  FaRegCalendarPlus,
} from "react-icons/fa";
import exhibitBanner from "./assets/images/gandhi.jpg"; // Use your preferred exhibit image

const AWiderHorizonPage = () => (
  <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#fafafc", minHeight: "100vh", color: "#222" }}>

    {/* Breadcrumb and title area */}
    <div style={{ background: "#4c3988", color: "#fff", padding: "1.3rem 0 2rem", borderBottom: "1px solid #edeaf6" }}>
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ fontSize: "1.05rem", opacity: 0.74, fontWeight: 500, marginBottom: 8, letterSpacing: 0 }}>
          Events Calendar <FaChevronRight style={{ fontSize: "0.8em", margin: "0 .32em" }} /> Thursday, July 31
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 800, margin: 0, lineHeight: "1.23", letterSpacing: -1 }}>
            A Wider Horizon: How Katharine Dexter McCormick Changed the World and MIT
          </h1>
        </div>
      </div>
    </div>

    {/* Main card */}
    <div style={{
      position: "relative", top: "-55px", margin: "0 auto 0",
      borderRadius: "24px", overflow: "hidden",
      background: "#fff", maxWidth: 940,
      boxShadow: "0 6px 32px #29209215", display: "flex", flexWrap: "wrap", alignItems: "stretch"
    }}>
      <div style={{ flex: "1 1 410px", minWidth: 0, padding: "2.6rem 2.6rem 2.9rem 2.25rem" }}>
        <h2 style={{
          fontSize: "1.51rem",
          fontWeight: 700,
          margin: "0 0 11px",
          color: "#272172",
          lineHeight: "1.4"
        }}>
          A Wider Horizon: How Katharine Dexter McCormick Changed the World and MIT
        </h2>
        <div style={{ display: "flex", alignItems: "center", color: "#6143ba", fontWeight: 600, fontSize: 15.6, marginBottom: 19 }}>
          <FaCalendarAlt style={{ marginRight: 10, fontSize: 18 }} />
          Thursday, July 31, 2025
          <span style={{ marginLeft: 15, color: "#8c87ae", fontWeight: 400, fontSize: 15, letterSpacing: 0.16 }}>
            + 8 dates
          </span>
        </div>
        {/* "I'm Interested" and share */}
        <div style={{ marginBottom: 19, display: 'flex', alignItems: 'center' }}>
          <a
            href="#"
            style={{
              background: "#22227e",
              color: "#fff",
              borderRadius: 21,
              padding: "10px 32px",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 0.18,
              textDecoration: "none",
              marginRight: 17,
              boxShadow: "0 2px 9px #372e7510",
              display: "inline-block"
            }}
          >
            I'm Interested
          </a>
          <a href="#" style={{ display: "flex", alignItems: "center", color: "#755fea", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            <FaShareAlt style={{ marginRight: 8, fontSize: 17 }} /> Share
          </a>
        </div>
        <div style={{fontSize:17, color: "#253072", minHeight: 82, marginBottom: 9, lineHeight: "1.65", maxWidth: 470}}>
          Throughout her life, Katharine Dexter McCormick widened the horizons of what was possible for women.<br /><br />
          A suffragist, philanthropist, and scientist, she broke boundaries from an early age, becoming one of the first women to graduate from MIT. She later went on to fund McCormick Hall, the first on-campus dormitory for women at MIT.
        </div>
        <div>
          <a
            href="https://libraries.mit.edu/exhibits/exhibit/a-wider-horizon/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#6447cc",
              fontWeight: 600,
              textDecoration: "underline",
              fontSize: 16.6
            }}
          >
            Learn more about the exhibit
          </a>
        </div>
      </div>
      <div style={{
        flex: "1 1 290px",
        background: "#efeafc",
        minWidth: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img
          src={exhibitBanner}
          alt="Exhibit: Katharine Dexter McCormick"
          style={{
            width: "100%",
            maxWidth: 350,
            minHeight: 240,
            objectFit: "cover",
            borderRadius: "0 0 0 24px"
          }}
        />
      </div>
    </div>

    {/* Details */}
    <div style={{ maxWidth: 940, margin: "0 auto", padding: "2.5rem 2rem 1.6rem", borderBottom: "1px solid #ece9f7" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        color: "#6c45d0",
        fontWeight: 700,
        fontSize: 19,
        marginBottom: 12
      }}>
        <FaMapMarkerAlt style={{ marginRight: 12, color: "#5746ab", fontSize: 21 }} />
        Building 14, Hayden Library (14S-100)
      </div>
      <div style={{ fontSize: 15.5, color: "#5a5e74", marginBottom: 7, marginLeft: 34 }}>
        160 MEMORIAL DR, Cambridge, MA 02139
      </div>
      {/* Transportation */}
      <div style={{ display: "flex", gap: 20, marginLeft: 34, marginBottom: 12 }}>
        <a href="https://www.google.com/maps/dir/?api=1&destination=160%20MEMORIAL%20DR,%20Cambridge,%20MA%2002139&travelmode=transit" target="_blank" rel="noopener noreferrer" style={{ color: "#644bb8", fontSize:16.4, textDecoration: "none" }} title="Public Transport"><FaTrain style={{ marginRight: 4 }} /> Public transport</a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=160%20MEMORIAL%20DR,%20Cambridge,%20MA%2002139&travelmode=driving" target="_blank" rel="noopener noreferrer" style={{ color: "#644bb8", fontSize:16.4, textDecoration: "none" }} title="Car"><FaCar style={{ marginRight: 4 }} /> Car</a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=160%20MEMORIAL%20DR,%20Cambridge,%20MA%2002139&travelmode=walking" target="_blank" rel="noopener noreferrer" style={{ color: "#644bb8", fontSize:16.4, textDecoration: "none" }} title="Walking"><FaWalking style={{ marginRight: 4 }} /> Walking</a>
      </div>
      <div style={{ background: "#f7f4fa", padding: "1.05em 1.25em", borderRadius: 11, fontSize: 16.3, color: "#384042", marginTop: 15, marginBottom: 0, maxWidth: 580 }}>
        <b>On view in the Hayden Library Loft (Floor 1M):&nbsp;</b>
        May 12 – September 30, 2025
      </div>
    </div>

    {/* Event meta tags etc */}
    <div style={{ maxWidth: 940, margin: "0 auto", padding: "1.6rem 2rem 1.7rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 18, fontSize: 15.3 }}>
        <span style={{ background: "#f2ecfb", color: "#7e53d7", borderRadius: 10, padding: "5px 17px", fontWeight: 600 }}>
          Exhibits
        </span>
        <span style={{ background: "#eaf2fa", color: "#5291c9", borderRadius: 10, padding: "5px 17px", fontWeight: 600 }}>
          Health/Wellness
        </span>
        <span style={{ background: "#faecdb", color: "#da8f2d", borderRadius: 10, padding: "5px 17px", fontWeight: 600 }}>
          Diversity/Inclusion
        </span>
        <span style={{ background: "#eaf8eb", color: "#53a96d", borderRadius: 10, padding: "5px 17px", fontWeight: 600 }}>
          General
        </span>
        <span style={{ background: "#f2eefb", color: "#7b53d4", borderRadius: 10, padding: "5px 17px", fontWeight: 600 }}>
          MIT Libraries
        </span>
      </div>
      <div style={{ marginTop: 15, fontSize: 16, color: "#6854c3" }}>
        Website:&nbsp;
        <a href="https://libraries.mit.edu/exhibits/exhibit/a-wider-horizon/" style={{ color: "#4c3fc3", fontWeight: 600, textDecoration: "underline" }}>https://libraries.mit.edu/exhibits/exhibit/a-wider-horizon/</a>
      </div>
    </div>

    {/* Responsive adjustments */}
    <style>{`
      @media (max-width: 900px) {
        .featured-event-card, .main-block { flex-direction: column !important; }
      }
      @media (max-width: 600px) {
        h1 { font-size: 1.2rem !important; }
        h2, h3 { font-size: 1.05rem !important; }
      }
    `}</style>
  </div>
);

export default AWiderHorizonPage;
