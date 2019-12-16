import styled, { css } from 'styled-components';
import { getProp } from '../../utils/getProp';

interface IListProps {
  width?: string | number;
}

interface IItemProps {
  selected: boolean;
}

export const List = styled.ul<IListProps>`
  margin: 0 auto;
  padding: 2px;
  border-radius: 2px;
  background-color: #242e42;
  list-style: none;
  width: ${({ width = 'fit-content' }) => getProp(width)};
  color: #657d95;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Item = styled.li<IItemProps>`
  display: inline-block;
  margin: 0;
  padding: 6px 8px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      color: #ffffff;
      background-color: #1f8efa;
      border-radius: 2px;
    `}
`;
