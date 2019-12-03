import React from 'react';
import { StyledNavLink, ListItemWrapper } from './NavLink.styles';

interface INavLinkProps {
  children: any;
  to: string;
  icon?: React.ReactSVGElement;
}

const NavLink: React.FC<INavLinkProps> = ({ children, to, icon }) => {
  return (
    <ListItemWrapper>
      <StyledNavLink to={to} exact>
        {children}
      </StyledNavLink>
    </ListItemWrapper>
  );
};

export default NavLink;
