import React from 'react';
import {
  TitleContainer,
  WhyChooseUsItem,
  Title,
  Icon,
  WhyImage,
  Description,
  SeeMore,
} from './WhyChooseUs.elements';

const WhyChooseUs = ({ data }) => {
  const { title, description, icon, btn, image } = data;
  return (
    <div>
      <WhyChooseUsItem>
        <WhyImage src={image} />
        <TitleContainer>
          <Icon src={icon} />
          <Title>{title}</Title>
        </TitleContainer>
        <Description>{description}</Description>
        <SeeMore type='button'>{btn}</SeeMore> <span>&rarr;</span>
      </WhyChooseUsItem>
    </div>
  );
};

export default WhyChooseUs;
