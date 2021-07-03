import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: space-between;
  max-width: 1300px;

  @media screen and (max-width: 400px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export default GlobalStyles;
