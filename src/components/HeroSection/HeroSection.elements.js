import styled from 'styled-components';
import banner from '../../images/bannerbackground.png';

export const BannerArea = styled.div`
  background-image: url(${banner});
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 400px) {
    background-position: -40vw;
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
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchSection = styled.input`
  padding: 15px;
  width: 70%;
  background-color: #ccc;
  border: none;
  border-radius: 30px;
  margin-top: 30px;
  outline: none;

  @media screen and (max-width: 400px) {
    width: 70%;
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

  @media screen and (max-width: 400px) {
    width: 40%;
    margin-top: 0;
  }
`;

export const HeroSectionHeading = styled.h1`
  @media screen and (max-width: 400px) {
    margin-bottom: 20px;
    margin-top: 50px;
    color: #fff;
  }
`;
