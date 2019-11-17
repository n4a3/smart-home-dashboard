import posed from 'react-pose';
import styled, { css } from 'styled-components';
import { BaseStyled } from '../BaseInput';
import { DropdownSkins } from '../../types';

export interface IDropdownBodyProps {
  /**
   * Custom width for dropdown body
   */
  bodyWidth?: string;
  /**
   * Custom height for dropdown body
   */
  bodyHeight?: string;
  skin?: DropdownSkins;
}

export interface IIconWrapperProps {
  /**
   * Rotate icon?
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
      transform: rotate(${isOpened ? '180deg' : '0deg'});
      transition: transform 0.2s;
    `}
`;

export const DropdownBody = styled(PosedDropdownBody)<IDropdownBodyProps>`
  position: absolute;
  z-index: 1;
  background-color: #20293c;
  border-radius: 4px;
  width: ${({ bodyWidth, skin }) =>
    bodyWidth || skin === DropdownSkins.DEFAULT ? '100%' : 'auto'};
  height: ${({ bodyHeight }) => bodyHeight || 'auto'};
  margin-top: 6px;
  padding: 6px 0;
  ${({ skin }) =>
    skin === DropdownSkins.DEFAULT &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;
