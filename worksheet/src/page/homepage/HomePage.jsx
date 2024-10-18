import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <section className="left-section">
                <h1>Empowering Young Minds</h1>
                <p>Education for Children</p>
                <p>
                    At our education platform, we believe in nurturing the intellectual
                    and creative potential of every child. We offer a comprehensive
                    curriculum that combines traditional learning with innovative methods.
                </p>
                <button className="enroll-now-btn">Enroll Now</button>
                <video controls className="section-video" autoPlay loop muted>
                    <source
                        src="https://videos.pexels.com/video-files/6996735/6996735-uhd_1440_2560_30fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className="right-section">
                <img
                    src="https://images.pexels.com/photos/17210083/pexels-photo-17210083/free-photo-of-girl-holding-3d-poster-with-donkeys.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Girl with colored pencils"
                    className="section-image"
                />
            </section>
        </div>
    );
}

export default HomePage;
