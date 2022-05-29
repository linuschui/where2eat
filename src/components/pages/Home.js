import React from 'react';
import '../../App.css';
import HomePageCards from '../HomePageCards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <HomePageCards />
      <Footer />
    </>
  );
}

export default Home;
