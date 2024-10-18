import React from 'react';
import './TeddyBearSection.css';

const TeddyBearSection = () => (
    <div className="teddy-bear-section">
        <div className="text-content">
            <h3 className="subheading">Inspiring Futures</h3>
            <h2 className="heading">
                <span className="line1">Cultivating</span>
                <span className="line2">Young Minds</span>
            </h2>
            <h3 className="subheading">Empowering Children</h3>

            <p className="description">
                Our educational programs are designed to ignite a passion for learning in children from an early age.
                We believe that education should be a transformative experience that not only imparts knowledge but also
                nurtures curiosity and creativity.
            </p>
            <button className="join-us-btn">Join Us</button>
        </div>
        <div className="teddy-bear-image">
            <img src="https://images.pexels.com/photos/4887217/pexels-photo-4887217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Teddy bear" />
            <div className="circle orange-circle"></div>
            <div className="circle blue-circle"></div>
        </div>
    </div>
);

export default TeddyBearSection;
