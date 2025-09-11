import React from 'react';
import Hero from '../components/Hero';
import HeroAno from '../components/HeroAno';
import AboutUs from '../components/AboutUs';
import Works from '../components/Works';
import Numbers from '../components/Numbers';
import Grid from '../components/Grid';
import Services from '../components/Services';
import WorksAnimation from '../components/WorksAnimation';
import WorksAnoAni from '../components/WorksAnoAni';
import Cursor from '../components/Cursor';
import ServicesAno from '../components/ServicesAno';
import AboutAno from '../components/AboutAno';
import ContactAno from '../components/ContactAno';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main className="relative">
      {/* <Cursor /> */}

      <div className="hidden md:block">
        <Hero />
      </div>

      <div className="block md:hidden">
        <HeroAno />
      </div>

      <AboutAno />
      <AboutUs />
      <Works />
      <WorksAnoAni />
      <ServicesAno />
      <Services />
      <Numbers />
      <Grid />
      <ContactAno />
      <Contact />
    </main>
  );
};

export default HomePage;
