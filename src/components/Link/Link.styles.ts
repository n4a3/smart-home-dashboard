import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkSkins } from '../../types/LinkSkins';

interface ILinkStyledProps {
  skin: LinkSkins;
}

export const LinkStyled = styled(Link)<ILinkStyledProps>`
  font-size: 12px;
  text-decoration: none;
  ${({ skin }) => {
    switch (skin) {
      case LinkSkins.PRIMARY:
        return css`
          color: #1f8efa;
          font-weight: 700;
        `;
      case LinkSkins.SECONDARY:
        return css`
          color: #98a7b9;
          font-weight: 400;
        `;
    }
  }}
`;
