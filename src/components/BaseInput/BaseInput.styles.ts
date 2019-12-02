import styled, { css } from 'styled-components';
import { getProp } from '../../utils/getProp';

export interface IBaseStyledProps {
  width?: string | number;
  height?: string | number;
}

export const BaseStyled = styled.div<IBaseStyledProps>`
  width: ${({ width = 328 }) => getProp(width)};
  height: ${({ height = 32 }) => getProp(height)};
  background-color: #20293c;
  border-radius: 4px;
  padding: 8px 13px;
  font-size: 12px;
`;

export const Wrapper = styled.label``;

export const Label = styled.p<{ hasLabel?: boolean }>`
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 17px;
  font-weight: 300;
  ${({ hasLabel }) =>
    hasLabel &&
    css`
      margin-bottom: 6px;
    `}
`;
