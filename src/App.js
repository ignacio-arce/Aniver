import React from 'react';
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import AboutUs from "./Sections/About-Us";
import Contact from './Sections/Contact';
import OurWorks from './Sections/OurWorks';
//import Footer from './Sections/Footer';
import './Sass/common/all.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <OurWorks />
      <Contact />      
    </div>
  );
}

export default App;
