import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import mgmLogo from './assets/images/mgm.png';

const Header = ({
  announceVisible, setAnnounceVisible,
  loginOpen, setLoginOpen,
  aboutOpen, setAboutOpen,
  deptOpen, setDeptOpen,
  blockDropdown, setBlockDropdown,
  blockName, setBlockName,
  stopPropagation, blockItems
}) => {
  useEffect(() => {
    const handleClick = () => {
      setLoginOpen(false);
      setDeptOpen(false);
      setAboutOpen(false);
      setBlockDropdown(false);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [setLoginOpen, setDeptOpen, setAboutOpen, setBlockDropdown]);

  return (
    <>
      {/* Announcement Bar */}
      {announceVisible && (
        <div className="announcement-bar">
          Announcement | SSP Account Creation link:{" "}
          <a href="https://ssp.postmatric.karnataka.gov.in/CA/" target="_blank" rel="noopener noreferrer">
            https://ssp.postmatric.karnataka.gov.in/CA/
          </a>
          <span className="close-announcement"
            onClick={() => setAnnounceVisible(false)} style={{ cursor: "pointer" }}>&times;
          </span>
        </div>
      )}

      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="topnav-section">
          <span>Social Media Hub ▼</span>
          <div className="login-dropdown-container" style={{ position: "relative" }}>
            <button
              className="login-dropdown-btn"
              id="loginDropdownBtn"
              aria-haspopup="true"
              aria-expanded={loginOpen}
              onClick={e => { stopPropagation(e); setLoginOpen(open => !open); }}>
              Login hub <span className="arrow">▼</span>
            </button>
            <div className={"login-dropdown-menu" + (loginOpen ? " open" : "")}
              id="loginDropdownMenu"
              role="menu"
              style={{ display: loginOpen ? "block" : "none", position: "absolute" }}
              onClick={stopPropagation}>
              <a href="#" className="dropdown-link" role="menuitem">Alumni Portal</a>
              <a href="#" className="dropdown-link" role="menuitem">Student Portal</a>
              <a href="#" className="dropdown-link" role="menuitem">Campus Email</a>
              <a href="#" className="dropdown-link" role="menuitem">e-Prints</a>
            </div>
          </div>
          <span>Information for ▼</span>
          <span>Careers ▼</span>
        </div>
        <a
          className="apply-btn"
          href="https://docs.google.com/forms/d/e/1FAIpQLSenTbBdErlrlLYSUNQB_h4_1XQjS2rZjfgxGhyU-d1ybegGWw/viewform"
          target="_blank" rel="noopener noreferrer">
          APPLY
        </a>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <img src={mgmLogo} alt="MGM Logo" className="logo" />
        <div className="campus-search">
          {/* Block Dropdown */}
          <div className={"dropdown" + (blockDropdown ? " open" : "")} style={{ position: "relative" }}>
            <button
              className="dropdown-toggle"
              id="deptDropdownBtn"
              aria-haspopup="true"
              aria-expanded={blockDropdown}
              onClick={e => { stopPropagation(e); setBlockDropdown(open => !open); }}>
              {blockName} <span className="arrow">▼</span>
            </button>
            <div
              className="dropdown-menu"
              id="deptDropdownMenu"
              role="menu"
              style={{
                display: blockDropdown ? "block" : "none",
                position: "absolute",
                zIndex: 2,
              }}
              onClick={stopPropagation}
            >
              {blockItems.map(name => (
                <div
                  className="dropdown-item"
                  key={name}
                  tabIndex={0}
                  role="menuitem"
                  onClick={() => {
                    setBlockName(name);
                    setBlockDropdown(false);
                  }}>{name}
                </div>
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Search Here"
            className="search-box"
            aria-label="Search Here"
          />
        </div>
      </header>

      {/* Navigation */}
            <nav className="main-nav" role="navigation" aria-label="Primary">
              <ul>
                <li className="about-dropdown-container">
                  <button
                    className="about-dropdown-btn"
                    id="aboutDropdownBtn"
                    aria-haspopup="true"
                    aria-expanded={aboutOpen}
                    onClick={(e) => {
                      stopPropagation(e);
                      setAboutOpen((open) => !open);
                    }}
                  >
                    About Us <span className="arrow"></span>
                  </button>
                  <div
                    className="about-dropdown-menu"
                    id="aboutDropdownMenu"
                    role="menu"
                    aria-labelledby="aboutDropdownBtn"
                    style={{ display: aboutOpen ? "block" : "none" }}
                    onClick={stopPropagation}
                  >
                    <div
                      className="dropdown-link has-submenu"
                      tabIndex={0}
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About
                      <span className="submenu-arrow"></span>
                      <div className="about-submenu" role="menu">
                        <a href="about.html" className="submenu-link" role="menuitem">
                          Overview
                        </a>
                        <a href="#" className="submenu-link" role="menuitem">
                          Leadership
                        </a>
                        <a href="principal.html" className="submenu-link" role="menuitem">
                          Message From The Principals
                        </a>
                        <a href="vission.html" className="submenu-link" role="menuitem">
                          Vision &amp; Mission
                        </a>
                        <a href="contact.html" className="submenu-link" role="menuitem">
                          Contact Us
                        </a>
                      </div>
                    </div>
                    <a href="history.html" className="dropdown-link" role="menuitem">
                      Nostalgia
                    </a>
                    <div className="dropdown-link has-submenu" tabIndex={0}>
                      Campus Life
                      <span className="submenu-arrow"></span>
                      <div className="about-submenu campus-submenu">
                        <a href="#" className="submenu-link" role="menuitem">
                          Hostel
                        </a>
                        <a href="#" className="submenu-link" role="menuitem">
                          Student Welfare and Student Clubs
                        </a>
                        <a href="#" className="submenu-link" role="menuitem">
                          Library
                        </a>
                        <a href="#" className="submenu-link" role="menuitem">
                          Innovation Centre
                        </a>
                        <a href="#" className="submenu-link" role="menuitem">
                          Placements
                        </a>
                        <a href="#" className="submenu-link" role="menuitem">
                          Experience
                        </a>
                        <a href="#" className="submenu-link" role="menuitem">
                          Student Projects and Activities
                        </a>
                      </div>
                    </div>
      
                    <a href="rules.html" className="dropdown-link" role="menuitem">
                      Rules &amp; Regulations
                    </a>
                    <a href="#" className="dropdown-link" role="menuitem">
                      Achievements
                    </a>
                    <a href="#" className="dropdown-link" role="menuitem">
                      Center for Regulation
                    </a>
                    <a
                      href="assets/PDFs/Mahithi_MGM.pdf"
                      className="dropdown-link"
                      role="menuitem"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      RTI Act
                    </a>
                    <a
                      href="assets/PDFs/rti.pdf"
                      className="dropdown-link"
                      role="menuitem"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      RTI Act Report
                    </a>
                    <a
                      href="assets/PDFs/Gandhian_study_center.pdf"
                      className="dropdown-link"
                      role="menuitem"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Gandhian Study Center
                    </a>
                    <div
                      className="dropdown-link has-submenu right-submenu"
                      tabIndex={0}
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Department &amp; Faculty
                      <span className="submenu-arrow submenu-arrow-right"></span>
                      <div className="about-submenu about-submenu-right" role="menu">
                        <a href="dep.html" className="submenu-link" role="menuitem">
                          Departments
                        </a>
                        <a href="lib.html" className="submenu-link" role="menuitem">
                          Library
                        </a>
                        <a href="museum.html" className="submenu-link" role="menuitem">
                          Museum
                        </a>
                        <a href="garden.html" className="submenu-link" role="menuitem">
                          Garden
                        </a>
                        <a href="facilities.html" className="submenu-link" role="menuitem">
                          Campus Facilities
                        </a>
                        <a href="block.html" className="submenu-link" role="menuitem">
                          Campus Blocks
                        </a>
                        <a href="cell.html" className="submenu-link" role="menuitem">
                          Campus Blocks
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="crash-courses.html" role="menuitem">
                    Skill Development
                  </a>
                </li>
                <li className="department-dropdown-container">
                  <button
                    className="department-dropdown-btn"
                    id="departmentDropdownBtn"
                    aria-haspopup="true"
                    aria-expanded={deptOpen}
                    onClick={(e) => {
                      stopPropagation(e);
                      setDeptOpen((open) => !open);
                    }}
                  >
                    Academics <span className="scarrow"></span>
                  </button>
                  <div
                    className="department-dropdown-menu"
                    id="departmentDropdownMenu"
                    role="menu"
                    aria-labelledby="departmentDropdownBtn"
                    style={{ display: deptOpen ? "block" : "none" }}
                    onClick={stopPropagation}
                  >
                    <a href="courses.html" className="dropdown-link" role="menuitem">
                      Course
                    </a>
                    <a href="research.html" className="dropdown-link" role="menuitem">
                      Admission
                    </a>
                    <a href="#" className="dropdown-link" role="menuitem">
                      Calender
                    </a>
                    <a href="IQAC.html" className="dropdown-link" role="menuitem">
                      IQAC Annual Report
                    </a>
                    <a href="scholarship.html" className="dropdown-link" role="menuitem">
                      Scholarships
                    </a>
                    <a href="#" className="dropdown-link" role="menuitem">
                      Exam Result
                    </a>
                    <a href="ranklist.html" className="dropdown-link" role="menuitem">
                      Rank List
                    </a>
                    <a href="e-resource.html" className="dropdown-link" role="menuitem">
                      E Resourse
                    </a>
                  </div>
                </li>
      
                <li
                  className="dropdown-link has-submenu right-submenu"
                  tabIndex={0}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Cultural Center
                  <span className="submenu-arrow submenu-arrow-right"></span>
                  <div className="about-submenu about-submenu-right" role="menu">
                    <a href="kendra.html" className="submenu-link" role="menuitem">
                      Yakshagana Kendra
                    </a>
                    <a href="RKG.html" className="submenu-link" role="menuitem">
                      RKG Pai Research Centre
                    </a>
                    <a href="REGIONAL.html" className="submenu-link" role="menuitem">
                      REGIONAL RESEARCH CENTRE
                    </a>
                    <a href="#" className="submenu-link" role="menuitem">
                      Workshops/Seminars
                    </a>
                  </div>
                </li>
      
                <li
                  className="dropdown-link has-submenu right-submenu"
                  tabIndex={0}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Activities
                  <span className="submenu-arrow submenu-arrow-right"></span>
                  <div className="about-submenu about-submenu-right" role="menu">
                    <a href="alumin.html" className="submenu-link" role="menuitem">
                      Alumni
                    </a>
                    <a href="activity.html" className="submenu-link" role="menuitem">
                      NCC and NSS
                    </a>
                    <a href="club.html" className="submenu-link" role="menuitem">
                      Clubs @ MGM
                    </a>
                    <a href="sports.html" className="submenu-link" role="menuitem">
                      Sports
                    </a>
                    <li>
        <Link to="/eventcalendar" className="submenu-link" role="menuitem">
          Calendar
        </Link>
      </li>
                    <a
                      href="https://mgmcollegeudupi.blogspot.com/"
                      className="submenu-link"
                      role="menuitem"
                    >
                      What is New?
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
    </>
  );
};

export default Header;
