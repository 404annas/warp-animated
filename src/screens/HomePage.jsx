import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Works from '../components/Works';
import Numbers from '../components/Numbers';
import Grid from '../components/Grid';
import Services from '../components/Services';
import WorksAnimation from '../components/WorksAnimation';

const HomePage = () => {
  return (
    <div>
      <Hero />
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
