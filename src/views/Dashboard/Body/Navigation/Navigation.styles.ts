import styled from 'styled-components';

interface INavListProps {
  isVisible: boolean;
}

export const NavList = styled.ul<INavListProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  width: ${({ isVisible }) => (isVisible ? '182px' : 0)};
  transform: translateX(${({ isVisible }) => (isVisible ? 0 : '-182px')});
  transition: 0.4s;
`;
