import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="separator"></div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l8 xl6">
          <ul className="footer-menu">
            <li><a href="/#">Terms and Conditions</a></li>
            <li><a href="/#">Privacy Policy</a></li>
            <li><a href="/#">Contact Us</a></li>
          </ul>
        </div>
        <div className="col s12 l4 xl6">
          <ul className="footer-social-menu">
            <li><p>Follow Us</p></li>
            <li><a href="/#"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href="/#"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;