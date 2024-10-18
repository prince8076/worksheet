import React from 'react';
import './EmpoweringSection.css';

const EmpoweringSection = () => {
    return (
        <div className="empowering-section">
            <h1>Empowering</h1>
            <div className="portraits">
                <div className="portrait">
                    <img
                        src="https://images.pexels.com/photos/20556417/pexels-photo-20556417/free-photo-of-smiling-boy-sitting-with-notebook.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Boy 1"
                    />
                    <h2>Explore</h2>
                    <p>Our Comprehensive Curriculum</p>
                </div>
                <div className="portrait">
                    <img
                        src="https://images.pexels.com/photos/5604251/pexels-photo-5604251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Boy 2"
                    />
                    <h2>Nurturing Potential</h2>
                    <p>We believe in the power of education to transform lives.</p>
                </div>
                <div className="portrait">
                    <img
                        src="https://images.pexels.com/photos/2801567/pexels-photo-2801567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Boy 3"
                    />
                    <h2>Discover</h2>
                    <p>The Joy of Learning</p>
                </div>
            </div>
            <button className="join-us-btn">Join Us</button>
        </div>
    );
};

export default EmpoweringSection;
