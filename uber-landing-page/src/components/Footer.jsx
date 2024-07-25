import React from "react";
import "../styles.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="u">
            <a href="#">Uber</a>
          </h2>
          <p className="hh">
            <a href="#">Visit Help Center</a>
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <div className="cpm">
              <a href="#">About us</a>
              <a href="#" className="st">
                Our offerings
              </a>
              <a href="#">Newsroom</a>
              <a href="#">Investors</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Uber AI</a>
              <a href="#">Gift cards</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <div className="pro">
              <a href="#">Ride</a>
              <a href="#">Drive</a>
              <a href="#">Deliver</a>
              <a href="#">Eat</a>
              <a href="#">Uber for Business</a>
              <a href="#">Uber Freight</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Global citizenship</h3>
            <div className="gc">
              <a href="#">Safety</a>
              <a href="#">Diversity and Inclusion</a>
              <a href="#">Sustainability</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Travel</h3>
            <div className="t">
              <a href="#">Reserve</a>
              <a href="#">Airports</a>
              <a href="#">Cities</a>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <div className="footer-location">
            <span>
              <a href="#">
                <FaGlobe /> English
              </a>
            </span>
            <span>
              <a href="#">
                <FaMapMarkerAlt /> Dehradun
              </a>
            </span>
          </div>
        </div>
        <div className="footer-apps">
          <a href="#">
            <FaGooglePlay /> Get it on Google Play
          </a>
          <a href="#">
            <FaApple /> Download on the App Store
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Uber Technologies Inc.</span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
