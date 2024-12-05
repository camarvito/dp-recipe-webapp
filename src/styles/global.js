import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', sans-serif;
    transition: all 0.25s linear;
    margin: 0;
    padding: 20px;
  }

  .App {
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  p {
    margin: 10px 0;
  }
`;
