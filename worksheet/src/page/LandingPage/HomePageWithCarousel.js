import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './HomePageWithCarousel.css';

const HomePageWithCarousel = ({ images = [], autoSlide = true, slideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [videos, setVideos] = useState([]);
    const [videoIndex, setVideoIndex] = useState(0);
    const [products, setProducts] = useState([]);

    // Function to go to the next image in the carousel
    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            if (images.length === 0) return 0;
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
    }, [images]);

    // Function to go to the previous image in the carousel
    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            if (images.length === 0) return 0;
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        });
    }, [images]);

    // Auto-slide functionality for image carousel
    useEffect(() => {
        if (autoSlide && images.length > 0) {
            const slideTimer = setInterval(goToNext, slideInterval);
            return () => clearInterval(slideTimer);
        }
    }, [goToNext, autoSlide, slideInterval, images.length]);

    // Fetch videos from the backend
    useEffect(() => {
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

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    // Function to move to the next/previous video in the video carousel
    const moveVideoCarousel = (direction) => {
        setVideoIndex((prevIndex) => {
            if (videos.length === 0) return 0;
            return (prevIndex + direction + videos.length) % videos.length;
        });
    };

    // Get 3 random products from the fetched products
    const getRandomProducts = () => {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    return (
        <div className="home-page-with-carousel">
            {/* Left section: Image Carousel */}
            {images.length > 0 ? (
                <div className="carousel">
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div
                                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                                key={index}
                                style={{ display: index === currentIndex ? 'block' : 'none' }}
                            >
                                <img src={image} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control left" onClick={goToPrevious}>
                        ❮
                    </button>
                    <button className="carousel-control right" onClick={goToNext}>
                        ❯
                    </button>
                </div>
            ) : (
                <div>No images to display</div>
            )}

            {/* Right section: Video reviews */}
            <div className="right-section">
                <h2>What Our Students Say</h2>
                <div className="video-carousel">
                    {videos.length > 0 ? (
                        <div className="carousel-item">
                            <video controls className="section-video">
                                <source src={`http://localhost:5000/${videos[videoIndex].url}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="review-section">
                                {videos[videoIndex].reviews.map((review, reviewIndex) => (
                                    <div key={reviewIndex} className="review-card">
                                        <p className="review-comment">"{review.comment}"</p>
                                        <p className="reviewer">- {review.reviewer}</p>
                                        <p className="review-rating">Rating: {review.rating} ★</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>No videos to display</div>
                    )}
                </div>
                {videos.length > 0 && (
                    <>
                        <button className="carousel-control left" onClick={() => moveVideoCarousel(-1)}>
                            &#10094;
                        </button>
                        <button className="carousel-control right" onClick={() => moveVideoCarousel(1)}>
                            &#10095;
                        </button>
                    </>
                )}
            </div>

            {/* Random Product Cards */}
            <div className="product-cards">
                <h2>Random Products</h2>
                <div className="product-card-container">
                    {getRandomProducts().map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePageWithCarousel;
