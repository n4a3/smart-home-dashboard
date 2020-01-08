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
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left: 7px solid transparent;
  padding-left: 20px;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #212a3d;
    color: #1f8efa;
    border-left-color: currentColor;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    .key-input &:focus {
      background-color: #44556b;
    }
  }

  svg {
    margin-right: 28px;
  }
`;
