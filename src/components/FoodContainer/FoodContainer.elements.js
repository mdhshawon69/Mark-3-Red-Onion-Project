import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FoodNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

export const FoodNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FoodNavItem = styled.li`
  margin-left: 40px;
  margin-right: 40px;
`;

export const FoodNavLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  color: #000;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #f91944;
    color: #f91944;
    transition: all 0.2s ease;
  }
`;

export const FoodItemsContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 70px;
`;

export const CheckOutBtn = styled.button`
  padding: 10px 50px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: #999;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`;
