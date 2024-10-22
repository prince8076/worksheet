import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import PromotionalSection from './page/PromotionalSection/PromotionalSection';
import EmpoweringSection from './page/EmpoweringSection/EmpoweringSection';
import TeddyBearSection from './page/TeddyBearSection/TeddyBearSection';
import Carousel from './page/homepage/HomePage';
import AdminPage from './page/admin_page/AdminPanel';
import ProductPage from './page/Product/productlist/ProductListPage';
import ProductDetailsPage from './page/Product/ProductDetails/ProductDetailsPage';
import './App.css';
const images = [
  'https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3913426/pexels-photo-3913426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/8612993/pexels-photo-8612993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel images={images} autoSlide={true} slideInterval={3000} />
              <PromotionalSection />
              <EmpoweringSection />
              <TeddyBearSection />
            </>
          } />
          <Route path="/admin" element={<AdminPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
