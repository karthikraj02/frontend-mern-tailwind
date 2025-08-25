import React from "react";

const AnnouncementBar = ({ announceVisible, setAnnounceVisible }) => {
  if (!announceVisible) return null;
  return (
    <div className="announcement-bar">
      Announcement | SSP Account Creation link:{" "}
      <a
        href="https://ssp.postmatric.karnataka.gov.in/CA/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://ssp.postmatric.karnataka.gov.in/CA/
      </a>
      <span
        className="close-announcement"
        onClick={() => setAnnounceVisible(false)}
        style={{ cursor: "pointer" }}
        aria-label="Close announcement"
      >
        &times;
      </span>
    </div>
  );
};

export default AnnouncementBar;
