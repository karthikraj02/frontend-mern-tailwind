import React from "react";
import campusImg from './assets/images/campus.jpg';
import depImg from './assets/images/facgroup.png';
import facImg from './assets/images/fac.jpg';
import inoImg from './assets/images/ino.jpg';
import placeImg from './assets/images/place.jpg';
import stuImg from './assets/images/stu.jpg';
import swcImg from './assets/images/swc.jpg';
import taImg from './assets/images/ta.jpg';
import tmapaiImg from './assets/images/tmapai.jpg';
import vpImg from './assets/images/vp.jpg';

const bannerImages = new Array(3).fill(taImg);

const HomeBody = ({
  bannerIdx,
  setBannerIdx,
  stopPropagation
}) => (
  <main>
    <section className="mit-banner-static" aria-label="Banner and Rankings">
      <div className="mit-banner-left">
        <h2>Mahatma Gandhi Memorial Autonomous College, Udupi</h2>
        <p>has been ranked</p>
        <div className="banner-rank">
          <span>#14th Among Colleges in Udupi</span>
          <div>according to collegedunia.com</div>
        </div>
        <div className="banner-rank">
          <span>#9th in Karnataka</span>
          <span>#58th in India</span>
          <div>
            for autonomous colleges
            <br />
            According to EW India Ranking
          </div>
        </div>
      </div>
      <div className="mit-banner-right">
        <div className="banner-image-slider">
          <button
            className="banner-img-nav left"
            aria-label="Previous Image"
            onClick={(e) => {
              stopPropagation(e);
              setBannerIdx(
                (bannerIdx - 1 + bannerImages.length) % bannerImages.length
              );
            }}
          >
            &larr;
          </button>
          <img id="bannerSlideImg" src={bannerImages[bannerIdx]} alt="MGM College campus" />
          <button
            className="banner-img-nav right"
            aria-label="Next Image"
            onClick={(e) => {
              stopPropagation(e);
              setBannerIdx((bannerIdx + 1) % bannerImages.length);
            }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>

    {/* College Description Section + Programs */}
    <section className="mit-description" aria-label="College Description and Programs">
      <div className="mit-description-left">
        <h3>
          The Mahatma Gandhi Memorial College (MGM), Udupi was established by
          T.M.A Pai
          <br />
          in 1949 amidst many challenging circumstances.
        </h3>
        <p>
          The Mahatma Gandhi Memorial College, founded in 1949 was the brainchild
          of the late Dr. T.M.A. Pai, the architect of modern Manipal. Located
          in the sylvan terrain of Sagri, close to Manipal-International centre
          for education, this institution is a premier Arts, Science and Commerce
          College in the district. MGM was the beacon, Manipal followed and MAHE
          flowered, transforming the topography into the “Education Kashi of
          South India. Over the past five and a half decades, the College has
          witnessed both academic and infrastructural growth and has opened new
          vistas in the educational and cultural history of this part of coastal
          Karnataka. It has enriched the lives of hundreds and thousands of young
          men and women and inspired educationists and philanthropists of
          erstwhile South Kanara to start similar temples of learning elsewhere.
          Veritably, the College is a torchbearer and trendsetter in the field of
          higher education.
        </p>
        <a href="#" className="explore-programs-btn">EXPLORE PROGRAMS</a>
      </div>
      <div className="mit-description-right" aria-label="Founder's image and information">
        <img src={tmapaiImg} alt="Dr. T.M.A. Pai - Founder MGM College" className="tma-pai-img" />
        <div className="tma-pai-caption">
          Dr. T.M.A. Pai
          <br />
          Founder – MGM College
        </div>
        <div className="our-programs-title">Our Programs</div>
        <div className="programs-list">
          <a href="ug.html" className="program-box" role="button" tabIndex={0}>
            <span>Undergraduate</span>
            <span className="arrow">&#8594;</span>
          </a>
          <a href="pg.html" className="program-box" role="button" tabIndex={0}>
            <span>Postgraduate</span>
            <span className="arrow">&#8594;</span>
          </a>
        </div>
      </div>
    </section>

    {/* Dashboard Cards */}
    <section className="mgm-dashboard" aria-label="Campus Highlights and Links">
      <div className="mgm-main-cards">
        <div className="mgm-experience card" tabIndex={0}>
          <img src={campusImg} alt="Students studying on campus" />
          <div className="card-title">Campus Experience</div>
        </div>
        <a href="placement.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <div className="mgm-placements card" tabIndex={0}>
            <img src={placeImg} alt="Student in placement lab" />
            <div className="card-title">Placements</div>
          </div>
        </a>
        <div className="mgm-innovation card" tabIndex={0}>
          <img src={inoImg} alt="Innovation Center students with project" />
          <div className="card-title">Innovation Center</div>
        </div>
        <div className="mgm-welfare card" tabIndex={0}>
          <img src={swcImg} alt="Student Welfare & Clubs" />
          <div className="card-title">Student Welfare & Student Clubs(SWC)</div>
        </div>
        <div className="mgm-achievement card" tabIndex={0}>
          <img src={stuImg} alt="Student achievement" />
          <div className="card-title">Student Achievements</div>
        </div>
        <div className="mgm-faculty card" tabIndex={0}>
          <img src={facImg} alt="Faculty achievement seminar" />
          <div className="card-title">Faculty Achievements</div>
        </div>
        <div className="mgm-department card" tabIndex={0}>
          <img src={depImg} alt="Department and faculty" />
          <div className="card-title">Department and Faculty List</div>
        </div>
      </div>
      <aside className="mgm-links" aria-label="Related Links and Director Info">
        <div className="links-block">
          <div className="links-title">Related Links</div>
          <ul>
            <li><a href="placement.html">Placements Overview</a></li>
            <li><a href="#">Industry Partnerships</a></li>
            <li><a href="#">Internationalisation @ MIT</a></li>
            <li><a href="#">Midday Meal, Scholarships Portal</a></li>
            <li><a href="#">COVID-19 Circulars</a></li>
            <li><a href="#">Extra-curricular Activities</a></li>
          </ul>
        </div>
        <div className="director-card" aria-label="College Director">
          <img src={vpImg} alt="Director MGM College" className="director-img" />
          <div className="director-info">
            <span className="director-title">Dr Anil Rana</span>
            <br />
            <span className="director-role">Director, MIT, Manipal</span>
          </div>
        </div>
      </aside>
    </section>
  </main>
);

export default HomeBody;
