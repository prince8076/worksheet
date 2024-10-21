import React, { useState, useEffect } from 'react';
import './PromotionalSection.css';
import axios from 'axios';

function HomePage() {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch videos from backend
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/videos');
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, []);

    const moveCarousel = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            return (newIndex + videos.length) % videos.length; // Looping
        });
    };

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
            </section>
            <section className="right-section">
                <h2>What Our Students Say</h2>
                <div className="carousel">
                    <div className="carousel-inner">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                            >
                                <video controls className="section-video">
                                    <source src={`http://localhost:5000/${video.url}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="review-section">
                                    {video.reviews.map((review, reviewIndex) => (
                                        <div key={reviewIndex} className="review-card">
                                            <p className="review-comment">"{review.comment}"</p>
                                            <p className="reviewer">- {review.reviewer}</p>
                                            <p className="review-rating">Rating: {review.rating} ★</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control left" onClick={() => moveCarousel(-1)}>
                        &#10094;
                    </button>
                    <button className="carousel-control right" onClick={() => moveCarousel(1)}>
                        &#10095;
                    </button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
