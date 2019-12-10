import styled from 'styled-components';

interface INavListProps {
  isVisible: boolean;
}

export const NavList = styled.ul<INavListProps>`
  position: absolute;
  width: 182px;
  margin: 0;
  padding: 0;
  list-style: none;
  transform: translateX(${({ isVisible }) => (isVisible ? 0 : '-182px')})
    translateZ(0);
  transition: transform 0.4s;
`;
