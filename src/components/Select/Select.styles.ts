import styled from 'styled-components';

interface IItemProps {
  isSelected: boolean;
}

export const List = styled.ol`
  margin: 0;
  padding: 4px 0;
  list-style: none;
`;

export const ItemWrapper = styled.li``;

export const Item = styled.button<IItemProps>`
  width: 100%;
  height: 32px;
  padding: 8px 13px;
  font-size: 12px;
  border: none;
  background-color: ${({ isSelected }) =>
    isSelected ? '#1f8efa' : 'transparent'};
  color: ${({ isSelected }) => isSelected && '#ffffff'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover,
  &:focus {
    background-color: #3e4e6c;
  }
`;
