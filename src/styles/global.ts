import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  /* body, input, button {
    font-size: 18px;
  } */

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button, a {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    border: 0;
    text-decoration: none;
  }
`;
