import styled, { css } from 'styled-components';
import { getProp } from '../../utils/getProp';
import { AlertSkins } from '../../types';

export interface IWrapperProps {
  width?: number | string;
  skin?: AlertSkins;
}

export const Wrapper = styled.div<IWrapperProps>`
  border-radius: 4px;
  border: 1px solid #1f8efa;
  background-color: #1f8efa33;
  color: #1f8efa;
  width: ${({ width }) => getProp(width)};
  padding: 8px 13px;
  font-size: 12px;

  ${({ skin = AlertSkins.INFO }) => {
    switch (skin) {
      case AlertSkins.WARNING:
        return css`
          background-color: #ffab4f33;
          border-color: #ffab4f;
          color: #ffab4f;
        `;
      case AlertSkins.ERROR:
        return css`
          background-color: #ee423d33;
          border-color: #ee423d;
          color: #ee423d;
        `;
    }
  }}
`;
