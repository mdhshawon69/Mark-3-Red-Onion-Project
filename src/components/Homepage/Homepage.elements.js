import icon1 from '../../images/Group 1.png';
import icon2 from '../../images/Group 2.png';
import icon3 from '../../images/Group 3.png';
import image1 from '../../images/whyImage1.png';
import image2 from '../../images/whyImage2.png';
import image3 from '../../images/whyImage3.png';
import styled from 'styled-components';

export const WhyChooseUsContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
`;

export const whyData = [
  {
    title: 'Fast Delivery',
    description:
      'Keep your systems in sync with automated web hook based notifications each time is paid and how we dream about future.',
    btn: 'See More',
    icon: icon1,
    image: image1,
  },
  {
    title: 'A Dood Auto Responder',
    description:
      'Keep your systems in sync with automated web hook based notifications each time is paid and how we dream about future.',
    btn: 'See More',
    icon: icon2,
    image: image2,
  },
  {
    title: 'Home Delivery',
    description:
      'Keep your systems in sync with automated web hook based notifications each time is paid and how we dream about future.',
    btn: 'See More',
    icon: icon3,
    image: image3,
  },
];
