import React from 'react';
import './TeddyBearSection.css';

const TeddyBearSection = () => (
    <div className="teddy-bear-section">
        <div className="teddy-bear-image">
            <img src="https://images.pexels.com/photos/5240467/pexels-photo-5240467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Teddy bear" />
        </div>
        <div className="text-content">
            <h2>Cultivating Young Minds</h2>
            <p>
                Our educational programs are designed to ignite a passion for learning in children from an early age.
            </p>
            <button className="join-us-btn">Join Us</button>
        </div>
    </div>
);

export default TeddyBearSection;
