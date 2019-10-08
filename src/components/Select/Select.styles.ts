import styled from 'styled-components';

interface IItemProps {
  isSelected: boolean;
}

export const List = styled.ol`
  margin: 0;
  padding: 4px 0;
  list-style: none;
`;

export const Item = styled.li<IItemProps>`
  width: 100%;
  height: 32px;
  padding: 8px 13px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#1f8efa' : 'none')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#98a7b9')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover,
  &:focus {
    background-color: #3e4e6c;
  }
`;
