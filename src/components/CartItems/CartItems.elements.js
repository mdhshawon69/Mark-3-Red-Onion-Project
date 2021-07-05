import styled from 'styled-components';

export const CartItem = styled.div`
  width: 300px;
  height: 80px;
  background-color: #f7f7f7;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

export const CartItemImage = styled.img`
  width: 60px;
  height: auto;
`;

export const CartItemDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 170px;
  margin-left: 15px;
`;

export const CartItemTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const CartItemPrice = styled.h3`
  color: #f91944;
  margin: 5px 0;
`;
export const CartItemDeliveryText = styled.p`
  font-size: 8px;
  font-weight: bold;
`;

export const PricingCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Decreaser = styled.span`
  color: #999;
  font-size: 20px;
  margin-bottom: 3px;
  cursor: pointer;
`;

export const ShownNumber = styled.span`
  color: #090909;
  height: 10px;
  width: 20px;
  text-align: center;
  font-size: 15px;
  margin-bottom: 8px;
`;

export const Increaser = styled.span`
  color: #f91944;
  font-size: 15px;
  cursor: pointer;
`;
