import styled, { css } from 'styled-components';

interface IButtonStyledProps {
  badge?: boolean;
  circle?: boolean;
}

export const ButtonStyled = styled.button<IButtonStyledProps>`
  min-width: 172px;
  height: 33px;
  margin: 0;
  padding: 0 8px;
  background-color: #1f8efa;
  border-radius: 2px;
  border: none;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 50ms;
  box-sizing: border-box;

  ${({ badge, circle }) => {
    if (badge) {
      return css`
        min-width: unset;
        height: unset;
        padding: 4px 15px;
        background-color: #3e4e6c;
        border-radius: 50px;
      `;
    }
    if (circle) {
      return css`
        min-width: unset;
        width: 42px;
        height: 42px;
        border-radius: 50%;
      `;
    }
  }}

  &:active {
    background-color: #3e4e6c;
    transition: background-color 50ms;
  }
`;
