import styled from 'styled-components';

export const DeliveryInfoContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  padding-top: 50px;
  padding-bottom: 100px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DeliveryInfoLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const DeliveryMap = styled.img`
  height: 500px;
  width: auto;

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 50px;
  }
`;

export const DeliveryInfoRight = styled.div`
  height: 500px;
  width: 300px;
  padding: 20px;
  padding-bottom: 0;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const DeliveryBoyImg = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

export const DeliveryLocation = styled.div`
  width: 250px;
  height: 120px;
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const DeliveryTime = styled.h3`
  font-size: 30px;
  font-weight: 500;
`;

export const SubText = styled.p`
  font-size: 12px;
  color: #999;
`;

export const MainText = styled.h4`
  font-size: 14px;
  font-weight: 500;
`;

export const DeliveryMan = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const DeliveryIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const ContactBtn = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #f91944;
  margin: 30px 0;
  cursor: pointer;
`;

export const CommonContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;
