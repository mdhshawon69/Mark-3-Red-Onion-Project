import styled from 'styled-components';
import banner from '../../images/bannerbackground.png';

export const BannerArea = styled.div`
  background-image: url(${banner});
  padding: 320px 0;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 500px) {
    height: 0;
    padding: 200px 0;
  }
`;

export const MiddleSection = styled.div`
  text-align: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: auto;
    margin-top: -20px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchSection = styled.input`
  padding: 15px 115px;
  background-color: #ccc;
  border: none;
  border-radius: 30px;
  margin-top: 30px;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 60%;
    margin: auto;
  }
`;

export const SearchButton = styled.button`
  padding: 14px 40px;
  margin-top: 29px;
  background-color: #f91944;
  color: #fff;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: -50px;

  @media screen and (max-width: 500px) {
    width: 40%;
    margin-top: 0;
  }
`;

export const HeroSectionHeading = styled.h1`
  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
