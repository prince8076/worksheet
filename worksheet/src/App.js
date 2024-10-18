import React from 'react';
import Header from './component/header/header';
import Main from './page/homepage/HomePage';
import PromotionalSection from './page/PromotionalSection/PromotionalSection';
import EmpoweringSection from './page/EmpoweringSection/EmpoweringSection';
import TeddyBearSection from './page/TeddyBearSection/TeddyBearSection';
import Footer from './component/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <PromotionalSection />
      <EmpoweringSection />
      <TeddyBearSection />
      <Footer />
    </div>
  );
}

export default App;
