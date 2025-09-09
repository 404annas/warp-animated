import React from 'react';
import Hero from '../components/Hero';
import HeroAno from '../components/HeroAno';
import AboutUs from '../components/AboutUs';
import Works from '../components/Works';
import Numbers from '../components/Numbers';
import Grid from '../components/Grid';
import Services from '../components/Services';
import WorksAnimation from '../components/WorksAnimation';

const HomePage = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Hero />
      </div>

      <div className="block md:hidden">
        <HeroAno />
      </div>

      <AboutUs />
      <Works />
      <WorksAnimation />
      {/* <Services /> */}
      <Numbers />
      <Grid />
    </div>
  );
};

export default HomePage;
