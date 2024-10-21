import React, { useState, useEffect, useCallback } from 'react';
import './HomePage.css';

const Carousel = ({ images, autoSlide = true, slideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, [images.length]);

    // Function to go to the previous image
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto slide functionality
    useEffect(() => {
        if (autoSlide) {
            const slideTimer = setInterval(goToNext, slideInterval);
            return () => clearInterval(slideTimer); // Clean up the interval on component unmount
        }
    }, [goToNext, autoSlide, slideInterval]);

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                        style={{
                            display: index === currentIndex ? 'block' : 'none',
                        }}
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
    );
};

export default Carousel;
