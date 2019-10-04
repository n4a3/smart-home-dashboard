import styled from 'styled-components';

export interface IBaseStyledProps {
  width?: string;
  height?: string;
}

export const BaseStyled = styled.div<IBaseStyledProps>`
  width: ${({ width }) => width || '327px'};
  height: ${({ height }) => height || '32px'};
  background-color: #20293c;
  color: #98a7b9;
  border-radius: 4px;
  padding: 9px 13px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 22px;
`;
