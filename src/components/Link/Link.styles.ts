import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkSkins } from '../../types/LinkSkins';

interface ILinkStyledProps {
  skin: LinkSkins;
}

const sharedStyles = css`
  font-size: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const getStyles = (skin: LinkSkins) => {
  switch (skin) {
    case LinkSkins.PRIMARY:
      return css`
        color: #1f8efa;
        font-weight: 700;
        ${sharedStyles}
      `;
    case LinkSkins.SECONDARY:
      return css`
        color: #98a7b9;
        font-weight: 400;
        ${sharedStyles}
      `;
  }
};

export const LinkInternalStyled = styled(Link)<ILinkStyledProps>`
  ${({ skin }) => getStyles(skin)}
  ${sharedStyles}
`;

export const LinkExternalStyled = styled.a<ILinkStyledProps>`
  ${({ skin }) => getStyles(skin)}
  ${sharedStyles}
`;
