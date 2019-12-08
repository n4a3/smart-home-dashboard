import React from 'react';
import { StyledNavLink, ListItemWrapper } from './NavLink.styles';
import { NavLinkProps } from 'react-router-dom';

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  activeClassName,
  ...props
}) => {
  return (
    <ListItemWrapper>
      <StyledNavLink to={to} exact {...props}>
        {children}
      </StyledNavLink>
    </ListItemWrapper>
  );
};

export default NavLink;
