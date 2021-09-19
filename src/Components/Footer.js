import React from 'react';
import insta from '../Assets/insta.svg';
import youtube from '../Assets/yt.svg';
import facebook from '../Assets/facebook.svg';
import linkedin from '../Assets/linkedin.svg';
import twitter from '../Assets/twitter.svg';


export default function AppFooter() {
  return (
    <div className="root">

      <footer className="App-footer">
        <div className="flexbox-container">

          <div className="flexbox-item footer-header">
            <h2>Lilavati Hospitals</h2>
            <h5>More Than Healthcare, Human Care</h5>
          </div>

          <div className="flexbox-item footer-link footer-first-link">
            <h3>Ambulance</h3>
          </div>

          <div className="flexbox-item footer-link footer-middle-link">
            <h3>Convenience &amp; Facilities</h3>
          </div>

          <div className="flexbox-item footer-link footer-middle-link">
            <h3>Media &amp; Press Releases</h3>
          </div>

          <div className="flexbox-item footer-link footer-middle-link">
            <h3>Social Initiatives</h3>
          </div>

          <div className="flexbox-item footer-link footer-middle-link">
            <h3>Floor Directory</h3>
          </div>

          <div className="flexbox-item footer-link footer-middle-link">
            <h3>Photo Gallery</h3>
          </div>

          <div className="flexbox-item footer-link footer-middle-link">
            <h3>Statutory Compliance</h3>
          </div>

          <div className="flexbox-item footer-link footer-middle-link">
            <h3>E-Tender</h3>
          </div>

          <div className="flexbox-container social-media">

            <div className="flexbox-item social-media-icon instagram-container">
              <img src={insta} className="insta-logo" alt="insta" />
            </div>

            <div className="flexbox-item social-media-icon youtube-container">
              <img src={youtube} className="youtube-logo" alt="youtube" />
            </div>

            <div className="flexbox-item social-media-icon facebook-container">
              <img src={facebook} className="facebook-logo" alt="facebook" />
            </div>

            <div className="flexbox-item social-media-icon linkedin-container">
              <img src={linkedin} className="linkedin-logo" alt="linkedin" />
            </div>

            <div className="flexbox-item social-media-icon twitter-container">
              <img src={twitter} className="twitter-logo" alt="twitter" />
            </div>

            <div className="flexbox-item footer-copyright">
              <p>&copy; 2021, Mahti Ganatra, Juhi Goenka, Srikar Kanchumarthi</p>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}