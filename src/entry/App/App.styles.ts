import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: #242e42;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  };

  * {
    box-sizing: border-box;
    outline: none;
  };

  .key-input {
    *:focus { 
      background-color: #44556b;
    };

    *:active { 
      background-color: #3e4e6c;
    }
  };
`;
