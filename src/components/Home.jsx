import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import HomeBody from "./HomeBody";
import Footer from "./Footer";
import AnnouncementBar from "./AnnouncementBar";
import NewsAndEventsRow from './NewsAndEventsRow';
import LatestNews from "./NewsAndEventsRow";

const blockItems = [
  "Administrative Block",
  "Old Administrative Block",
  "Science Block",
  "Vajrasauda",
  "Library",
  "Hostel",
  "Ravindra Mantapa",
  "Mantapa",
  "Parvathi Nilaya",
  "Canteen",
  "Sports Complex",
  "PU Block",
  "Qutras",
];

const Home = () => {
  const [announceVisible, setAnnounceVisible] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [blockDropdown, setBlockDropdown] = useState(false);
  const [blockName, setBlockName] = useState("Block");
  const [bannerIdx, setBannerIdx] = useState(0);

  const newsSliderRef = useRef(null);
  const eventsSliderRef = useRef(null);

  const stopPropagation = (e) => e.stopPropagation();

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIdx((idx) => (idx + 1) % 3); // Assuming 3 banner images
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: "#f7f6fb" }}>
      <AnnouncementBar
        announceVisible={announceVisible}
        setAnnounceVisible={setAnnounceVisible}
      />

      <Header
        announceVisible={announceVisible}
        setAnnounceVisible={setAnnounceVisible}
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        aboutOpen={aboutOpen}
        setAboutOpen={setAboutOpen}
        deptOpen={deptOpen}
        setDeptOpen={setDeptOpen}
        blockDropdown={blockDropdown}
        setBlockDropdown={setBlockDropdown}
        blockName={blockName}
        setBlockName={setBlockName}
        stopPropagation={stopPropagation}
        blockItems={blockItems}
      />

      <HomeBody
        bannerIdx={bannerIdx}
        setBannerIdx={setBannerIdx}
        newsSliderRef={newsSliderRef}
        stopPropagation={stopPropagation}
      />

      <NewsAndEventsRow eventsSliderRef={eventsSliderRef} />

      <Footer />
    </div>
  );
};

export default Home;
