import posed from 'react-pose';
import styled, { css } from 'styled-components';
import { BaseStyled } from '../BaseInput';
import { DropdownSkins } from '../../types';
import { getProp } from '../../utils/getProp';

export interface IDropdownBodyProps {
  /**
   * Custom width for dropdown body
   */
  bodyWidth?: string | number;
  /**
   * Custom height for dropdown body
   */
  bodyHeight?: string | number;
  /**
   * Skin for dropdown;
   * If "FLAT" is used, it renders only the <Button>, w/o any labels, icons and etc.
   */
  skin?: DropdownSkins;
}

export interface IIconWrapperProps {
  /**
   * Rotate the icon when the Dropdown opens/closes
   */
  isRotatable?: boolean;
  isOpened: boolean;
}

const PosedDropdownBody = posed.div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 25,
    opacity: 0
  }
});

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const DropdownHeader = styled(BaseStyled)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

export const LabelWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const IconWrapper = styled.div<IIconWrapperProps>`
  flex-shrink: 1;
  margin-right: -5px;
  margin-left: 8px;
  ${({ isRotatable = true, isOpened }) =>
    isRotatable &&
    css`
      transform: rotate(${isOpened ? '180deg' : '0deg'})
        translateY(${isOpened ? '0' : '-2px'});
      transition: transform 0.2s;
    `}
`;

export const DropdownBody = styled(PosedDropdownBody)<IDropdownBodyProps>`
  position: absolute;
  z-index: 1;
  margin-top: 8px;
  border-radius: 4px;
  color: #ffffff;
  height: ${({ bodyHeight = 'auto' }) => getProp(bodyHeight)};
  ${({ skin, bodyWidth }) => {
    switch (skin) {
      case DropdownSkins.DEFAULT:
        return css`
          background-color: #20293c;
          padding: 6px 0;
          width: ${getProp(bodyWidth) || '100%'};
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `;

      case DropdownSkins.FLAT:
        return css`
          background-color: #2f3b52;
          padding-top: 4px;
          top: 100%;
          width: ${getProp(bodyWidth) || 'auto'};

          &::before {
            display: block;
            content: '';
            width: 18px;
            height: 18px;
            background-color: #2f3b52;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -14px) rotate(45deg);
            z-index: -1;
          }
        `;
    }
  }}
`;

export const JustifyWrapper = styled.div<{ skin?: DropdownSkins }>`
  ${({ skin }) => {
    switch (skin) {
      case DropdownSkins.FLAT:
        return css`
          display: flex;
          justify-content: center;
        `;
    }
  }}
`;
