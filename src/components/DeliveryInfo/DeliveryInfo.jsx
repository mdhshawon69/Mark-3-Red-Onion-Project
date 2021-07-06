import React from 'react';
import {
  CommonContainer,
  ContactBtn,
  DeliveryBoyImg,
  DeliveryIcon,
  DeliveryInfoContainer,
  DeliveryInfoLeft,
  DeliveryInfoRight,
  DeliveryLocation,
  DeliveryMan,
  DeliveryMap,
  DeliveryTime,
  MainText,
  SubText,
} from './DeliveryInfo.elements';
import mapImg from '../../images/map.png';
import rider from '../../images/rider.png';
import icon from '../../images/icon.png';

const DeliveryInfo = () => {
  return (
    <DeliveryInfoContainer>
      <DeliveryInfoLeft>
        <DeliveryMap src={mapImg} />
      </DeliveryInfoLeft>
      <DeliveryInfoRight>
        <DeliveryBoyImg src={rider} />
        <DeliveryLocation>
          <CommonContainer>
            <MainText>Your Location</MainText>
            <SubText>107 Rd No 8</SubText>
          </CommonContainer>
          <CommonContainer>
            <MainText>Shop Address</MainText>
            <SubText>Gulshan Plaza Restaurant GPR</SubText>
          </CommonContainer>
        </DeliveryLocation>
        <DeliveryTime>9:30</DeliveryTime>
        <SubText>Estimated delivery time</SubText>
        <DeliveryMan>
          <DeliveryIcon src={icon} />
          <div>
            <MainText>Hamim</MainText>
            <SubText>Your rider</SubText>
          </div>
        </DeliveryMan>
        <ContactBtn>Contact</ContactBtn>
      </DeliveryInfoRight>
    </DeliveryInfoContainer>
  );
};

export default DeliveryInfo;
