import styled from 'styled-components';

export const DeliveryTitle = styled.h3`
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const CartContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 100px 0 120px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const DeliveryForm = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const DeliveryInput = styled.input`
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f7f7f7;
  margin-top: 15px;
`;

export const DeliveryTextArea = styled.textarea`
  padding: 15px 20px 25px;
  border: none;
  border-radius: 4px;
  background-color: #f7f7f7;
  color: #fff;
  margin-top: 15px;
`;

export const DeliverySubmit = styled.input`
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f91944;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
`;

export const MainText = styled.h6`
  text-transform: capitalize;
  font-size: 13px;
  margin-left: ${({ mar }) => (mar ? '0' : '10px')};
`;

export const SubText = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const OrderPlaceBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${({ cart }) => (cart.length ? '#f91944' : '#999')};
  width: 250px;
  margin-top: 20px;
  color: #fff;
  cursor: pointer;
`;

export const DeliveryDetails = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CommonContainer = styled.div`
  display: flex;
`;

export const CartFoodItems = styled.div`
  width: 350px;
  height: ${({ cart }) => (cart.length >= 5 ? '405px' : 'auto')};
  overflow-x: ${({ cart }) => (cart.length >= 5 ? 'scroll' : null)};
  margin-bottom: 20px;
`;
