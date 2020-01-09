import React from 'react';
import { LinkInternalStyled, LinkExternalStyled } from './Link.styles';
import { LinkSkins } from '../../types';
import { LinkProps } from 'react-router-dom';

interface IProps {
  skin?: LinkSkins;
  children: any;
  to: string;
}

type ILinkProps = IProps & LinkProps;

const onLinkKeyPress = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
  if (event.key === ' ') {
    event.preventDefault();
    (event.target as HTMLAnchorElement).click();
  }
};

const Link: React.FC<ILinkProps> = ({
  skin = LinkSkins.PRIMARY,
  children,
  to,
  ...props
}) => {
  return to.indexOf('://') !== -1 ? (
    <LinkExternalStyled
      skin={skin}
      href={to}
      onKeyDown={onLinkKeyPress}
      {...props}
    >
      {children}
    </LinkExternalStyled>
  ) : (
    <LinkInternalStyled
      skin={skin}
      to={to}
      onKeyDown={onLinkKeyPress}
      {...props}
    >
      {children}
    </LinkInternalStyled>
  );
};

export default Link;
