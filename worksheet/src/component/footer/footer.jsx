import React from 'react';
import './footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-top">
            <h2>Unlocking the Potential of Every Child</h2>
            <p className="subheading">Inspiring the Next Generation</p>
            <button className="enroll-now-btn">Enroll Now</button>
        </div>

        <div className="footer-content">
            <div className="footer-left">
                <h3 className="left-align-line1">Empowering</h3>
                <h3 className="left-align-line2">Young Minds</h3>
                <p className="left-align">At our education platform, we believe in the power of education to transform lives.</p>
            </div>
        </div>

        <div className="footer-links">
            <a href="#" className="bold-text">Home</a>
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Partners</a>
            <a href="#">Blog</a>
            <a href="#" className="bold-text">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility</a>
            <a href="#">Site Map</a>
            <a href="#" className="bold-text">Careers</a>
            <a href="#">Support</a>
            <a href="#">Contact Us</a>
        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
