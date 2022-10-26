import { createGlobalStyle } from "styled-components";
import { config } from "../configs/config";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    color: ${config.colors.primary};
    font-family: 'Montserrat', sans-serif;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    background: ${config.colors.secondary};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  table {
    margin: 0;
  }
`;
