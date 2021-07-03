import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WhyChooseUsItem = styled.div`
  width: 350px;
  height: 600px;
  border-radius: 6px;
  text-align: center;
`;

export const WhyImage = styled.img`
  height: 350px;
  width: 350px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 15px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #090909;
  margin-left: 10px;
  margin-top: 10px;
`;

export const Icon = styled.img`
  height: 40px;
  width: auto;
`;

export const Description = styled.p`
  color: #999;
  font-size: 12px;
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 70px;
`;

export const SeeMore = styled(Link)`
  text-decoration: none;
  color: #5278f7;
  font-weight: 600;
  margin-left: -125px;
`;
