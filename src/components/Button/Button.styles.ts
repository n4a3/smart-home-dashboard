import styled, { css } from 'styled-components';
import { ButtonSkins } from '../../types';

interface IButtonStyledProps {
  skin: ButtonSkins;
  width?: string;
}

export const ButtonStyled = styled.button<IButtonStyledProps>`
  min-width: 82px;
  width: ${({ width }) => width || 'auto'};
  height: 33px;
  margin: 0;
  padding: 0 8px;
  background-color: #1f8efa;
  border-radius: 2px;
  border: none;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 50ms;

  ${({ skin }) => {
    switch (skin) {
      case ButtonSkins.BADGE:
        return css`
          min-width: unset;
          height: unset;
          padding: 4px 15px;
          background-color: #3e4e6c;
          border-radius: 50px;
        `;
      case ButtonSkins.CIRCLE:
      case ButtonSkins.ICON:
        return css`
          min-width: unset;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: unset;
          ${skin === ButtonSkins.CIRCLE && 'border-radius: 50%'};
          ${skin === ButtonSkins.ICON && 'background-color: transparent'};
        `;
      case ButtonSkins.TRANSPARENT:
        return css`
          background-color: transparent;
        `;
    }
  }}

  &:active {
    background-color: #3e4e6c;
    transition: background-color 50ms;
  }
`;
