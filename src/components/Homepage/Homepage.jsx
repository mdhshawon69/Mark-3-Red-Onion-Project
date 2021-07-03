import React from 'react';
import FoodContainer from '../FoodContainer/FoodContainer';
import HeroSection from '../HeroSection/HeroSection';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import { WhyChooseUsContainer } from './Homepage.elements';
import { whyData } from './Homepage.elements';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FoodContainer />
      <WhyChooseUsContainer>
        {whyData.map((data) => (
          <WhyChooseUs data={data} />
        ))}
      </WhyChooseUsContainer>
    </>
  );
};

export default Homepage;
