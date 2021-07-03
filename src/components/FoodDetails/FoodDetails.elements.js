import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 0;
    padding-bottom: 100px;
  }
`;

export const DetailsTextArea = styled.div`
  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const DetailsHeading = styled.h2`
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const DetailsText = styled.p`
  font-size: 13px;
  color: #999;
  text-align: left;
  width: 80%;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: auto;
    width: 100%;
  }
`;

export const DetailsPrice = styled.h3`
  font-size: 30px;
`;

export const PricingCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-top: 2px;
  border: 1px solid #ccc;
  padding: 0 20px;
  border-radius: 50px;
`;

export const Decreaser = styled.span`
  color: #999;
  font-size: 30px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const ShownNumber = styled.span`
  color: #090909;
  height: 30px;
  width: 40px;
  text-align: center;
  font-size: 25px;
  margin-bottom: 0;
`;

export const Increaser = styled.span`
  color: #f91944;
  font-size: 20px;
  cursor: pointer;
`;

export const DetailsImage = styled.img`
  height: 500px;
  width: auto;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: auto;
    margin-top: 50px;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const AddButton = styled.button`
  padding: 10px 30px;
  background-color: #f91944;
  border-radius: 60px;
  color: #fff;
  font-size: 15px;
  margin: 10px;
  border: none;
  cursor: pointer;
  margin-left: -2px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
