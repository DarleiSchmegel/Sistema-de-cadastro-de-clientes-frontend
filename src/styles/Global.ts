import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        /* a cada 1rem será considera 10px */

    }
    html,
    body {
      height: 100vh;
      font-size: 62.5%;
      font: 400 0.9rem Roboto, sans-serif;
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
      /* background: black; */
    }
    body {

        color: #e1e1e6;

        font-size: 1.6rem;
    }
    
`;
