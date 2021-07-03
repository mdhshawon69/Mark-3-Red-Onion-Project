import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterMain = styled.div`
  background-color: #191919;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterMainContainer = styled.div`
  width: 90%;
`;

export const FooterContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.img`
  height: 50px;
  width: auto;
  margin-bottom: 200px;
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    height: 20px;
    width: auto;
  }
`;

export const FooterFirst = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 2;
`;

export const FooterSecond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: -135px;

  @media screen and (max-width: 768px) {
    margin-top: -115px;
  }

  @media screen and (max-width: 400px) {
    margin-top: -50px;
  }
`;

export const FooterThird = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: -135px;

  @media screen and (max-width: 768px) {
    margin-top: -115px;
  }

  @media screen and (max-width: 400px) {
    margin-top: -92px;
  }
`;

export const FooterUl = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FooterLi = styled.li`
  padding: 5px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: #f91944;
    transition: all 0.3s ease;
  }
`;

export const CopyRightArea = styled.div`
  display: flex;
  justify-self: flex-start;
`;

export const CopyRightText = styled.div`
  color: #999;
  font-size: 12px;
  display: flex;
  flex-grow: 1;
`;

export const FooterUlTwo = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: -30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -17px;
  }
`;

export const FooterLiTwo = styled.li`
  padding: 5px;
  margin: 0 30px;
`;
