import React from "react";
import mgmLogo from './assets/images/mgm.png';

const Footer = () => (
  <footer>
    <div className="footer-main">
      <div className="footer-cols">
        <ul><li><a href="about.html">About Us</a></li></ul>
        <ul><li><a href="#">Pre-University Courses</a></li></ul>
        <ul><li><a href="ug.html">Undergraduate Courses</a></li></ul>
        <ul><li><a href="pg.html">Post Graduate Courses</a></li></ul>
        <ul><li><a href="#">Important Links</a></li></ul>
      </div>
      <div className="footer-actions">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSenTbBdErlrlLYSUNQB_h4_1XQjS2rZjfgxGhyU-d1ybegGWw/viewform"
          className="footer-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPLY FOR ADMISSIONS
        </a>
        <a
          href="assets/PDFs/MGM-Prospectus-2020-21.pdf"
          className="footer-btn alt"
          download
        >
          DOWNLOAD PROSPECTUS
        </a>
      </div>
    </div>
    <div className="footer-secondary">
      <div className="footer-brand">
        <img src={mgmLogo} alt="MGM Logo" className="footer-logo" />
      </div>
      <div className="footer-social-newsletter">
        <div className="css-social-icons">
          {/* Icons can be added here if desired */}
        </div>
        <div className="newsletter">
          <span>Newsletter Signup</span>
          <form
            onSubmit={e => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Email id"
              aria-label="Email id"
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
