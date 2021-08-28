import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Presentation from '../pages/Presentation/Presentation';
import Activitees from '../pages/Activites/Activitees';
import Temoignage from '../pages/Temoignage/Temoignage';

function Home() {
  return (
    <>
      <HeroSection />
      <Presentation />
      <Activitees />
      <Temoignage />
      <Footer />
    </>
  );
}

export default Home;
