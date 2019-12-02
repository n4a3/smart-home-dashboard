import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItemWrapper = styled.li`
  display: flex;
  width: 100%;
  height: 48px;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  display: flex;
  flex-grow: 1;
  align-items: center;
  text-decoration: none;
  color: #98a7b9;

  &.active {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #212a3d;
    color: #1f8efa;
  }
`;
