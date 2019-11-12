import React from 'react';
import { LinkStyled } from './Link.styles';
import { LinkSkins } from '../../types/LinkSkins';
import { LinkProps } from 'react-router-dom';

interface IProps {
  skin?: LinkSkins;
  children: any;
}

type ILinkProps = IProps & LinkProps;

const Link: React.FC<ILinkProps> = ({
  skin = LinkSkins.PRIMARY,
  children,
  ...props
}) => {
  return (
    <LinkStyled skin={skin} {...props}>
      {children}
    </LinkStyled>
  );
};

export default Link;
