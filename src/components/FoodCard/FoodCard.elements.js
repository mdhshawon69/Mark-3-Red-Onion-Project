import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardItem = styled.div`
  height: 320px;
  width: 400px;
  text-align: center;
  background-color: #fff;
  margin-bottom: 30px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  color: #090909;
`;

export const CardSubTitle = styled.p`
  color: #999;
  font-size: 12px;
  margin-top: 10px;
`;

export const CardPrice = styled.h4`
  font-size: 22px;
  margin-top: 10px;
  font-weight: 500;
  color: #090909;
`;

export const CardImage = styled.img`
  height: 200px;
  width: auto;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;
