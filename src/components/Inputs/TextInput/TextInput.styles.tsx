import React from 'react';
import styled, { css } from 'styled-components';
import { BaseStyled } from '../base/baseStyle.styles';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const TextInputStyled = styled(({ hasError, ...props }) => (
  <BaseStyled as="input" {...props} />
))`
  border: 1px solid #3e4e6c;

  &:focus {
    border-color: #1f8efa;
    color: #1f8efa;
  }

  ${({ hasError }) =>
    hasError === true &&
    css`
      color: #ee423d;
      border-color: #ee423d;
    `}

  ${({ hasError }) =>
    hasError === false &&
    css`
      color: #05c985;
      border-color: #05c985;
    `}
`;

export const Indicator = styled.div<{ hasError: boolean | null }>`
  ${({ hasError }) =>
    hasError === true &&
    css`
      background-color: #ee423d;
    `}

  ${({ hasError }) =>
    hasError === false &&
    css`
      background-color: #05c985;
    `}
  position: absolute;
  width: 1px;
  top: 6px;
  bottom: 6px;
  left: 8px;
  ${TextInputStyled}:focus + & {
    background-color: #1f8efa;
  }
`;
