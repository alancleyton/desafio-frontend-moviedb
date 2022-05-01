import { createGlobalStyle } from 'styled-components';
import { secondaryGray, primaryLightGray } from './colors';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    min-height: 100vh;
    height: 100%;
    background-color: ${secondaryGray};
    font-size: 16px;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    color: ${primaryLightGray};
    line-height: 1;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    overflow: auto;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, span, p, small, a, em, strong {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  button:focus,
  button:active,
  input:focus,
  input:active {
    outline: none;
    box-shadow: none;
  }
`;
