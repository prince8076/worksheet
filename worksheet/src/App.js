import React from 'react';
import Header from './component/header/header';
import PromotionalSection from './page/PromotionalSection/PromotionalSection';
import EmpoweringSection from './page/EmpoweringSection/EmpoweringSection';
import TeddyBearSection from './page/TeddyBearSection/TeddyBearSection';
import Footer from './component/footer/footer';
import Carousel from './page/homepage/HomePage'; // Ensure this path is correct
import './App.css';

// Define images in App.js
const images = [
  'https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3913426/pexels-photo-3913426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/8612993/pexels-photo-8612993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel images={images} autoSlide={true} slideInterval={3000} />
      <PromotionalSection />
      <EmpoweringSection />
      <TeddyBearSection />
      <Footer />
    </div>
  );
}

export default App;
