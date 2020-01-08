import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: #242e42;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  };

  * {
    box-sizing: border-box;
  };

  *:focus {
    outline: none;
  };

  *::-moz-focus-inner {
    border: none;
  };

  input, button { 
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
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

export const LoaderWraper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
`;
