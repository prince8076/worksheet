import React from 'react';
import './PromotionalSection.css';

function PromotionalSection() {
    return (
        <div className="promotional-section">
            <div className="text-content">
                <h3 className="subheading">Igniting Curiosity</h3>
                <h2 className="heading">
                    <span className="line1">Discover the</span>
                    <span className="line2">Joy of Learning</span>
                </h2>
                <h3 className="subheading">Empowering Students</h3>

                <p className="description">
                    Our educational programs are designed to ignite a lifelong passion
                    for learning in children. We believe that education should be
                    engaging, interactive, and tailored to the unique needs and interests
                    of each student.
                </p>
                <button className="join-us-btn">Join Us</button>
            </div>

            <div className="circular-image">
                <img
                    src="https://images.pexels.com/photos/21997922/pexels-photo-21997922/free-photo-of-girl-sleeping-with-a-book-in-her-hand-and-flowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Girl sleeping with a book"
                />
                <div className="circle orange-circle"></div>
                <div className="circle blue-circle"></div>
            </div>
        </div>
    );
}

export default PromotionalSection;
