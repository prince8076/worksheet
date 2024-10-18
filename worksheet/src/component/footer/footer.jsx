import React from 'react';
import './footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <h2>Unlocking the Potential of Every Child</h2>
            <p>At our education platform, we believe in the power of education to transform lives.</p>
            <button className="enroll-now-btn">Enroll Now</button>
        </div>
        <div className="footer-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>
            <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </footer>
);

export default Footer;
