import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 32px;
    font-family: 'Inter', sans-serif;
  }

  #root {
    background-color: #ccc;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

`;