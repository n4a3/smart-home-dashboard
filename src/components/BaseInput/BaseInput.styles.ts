import styled, { css } from 'styled-components';

export interface IBaseStyledProps {
  width?: string;
  height?: string;
}

export const BaseStyled = styled.div<IBaseStyledProps>`
  width: ${({ width }) => width || '327px'};
  height: ${({ height }) => height || '32px'};
  box-sizing: border-box;
  background-color: #20293c;
  color: #98a7b9;
  border-radius: 4px;
  padding: 8px 13px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
`;

export const Wrapper = styled.label``;

export const Label = styled.p<{ hasLabel?: boolean }>`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: 300;
  ${({ hasLabel }) =>
    hasLabel &&
    css`
      margin-bottom: 6px;
    `}
`;