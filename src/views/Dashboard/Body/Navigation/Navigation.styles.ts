import styled from 'styled-components';

interface INavListProps {
  isVisible: boolean;
}

export const NavList = styled.ul<INavListProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 182px;
  transform: translateX(${({ isVisible }) => (isVisible ? 0 : '-100%')});
  transition: transform 0.4s;
`;
