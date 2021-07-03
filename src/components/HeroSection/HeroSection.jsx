import React from 'react';
import { Container } from '../GlobalStyles';
import {
  BannerArea,
  MiddleSection,
  SearchButton,
  SearchForm,
  SearchSection,
} from './HeroSection.elements';

const HeroSection = () => {
  return (
    <BannerArea>
      <Container>
        <MiddleSection>
          <h1>LIFE'S TOO SHORT FOR BORING FOOD</h1>
          <SearchForm>
            <SearchSection type='text' placeholder='Search for your food' />
            <SearchButton type='submit'>Search</SearchButton>
          </SearchForm>
        </MiddleSection>
      </Container>
    </BannerArea>
  );
};

export default HeroSection;
