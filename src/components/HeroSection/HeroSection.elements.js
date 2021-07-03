import styled from 'styled-components';
import banner from '../../images/bannerbackground.png';

export const BannerArea = styled.div`
  background-image: url(${banner});
  height: 90vh;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MiddleSection = styled.div`
  text-align: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;
