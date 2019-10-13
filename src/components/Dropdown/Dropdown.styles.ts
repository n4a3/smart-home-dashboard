import posed from 'react-pose';
import styled from 'styled-components';
import { BaseStyled } from '../BaseInput';

export interface IDropdownBodyProps {
  /**
   * Custom width for dropdown body
   */
  bodyWidth?: string;
  /**
   * Custom height for dropdown body
   */
  bodyHeight?: string;
}

const PosedDropdownBody = posed.div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -50,
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

export const IconWrapper = styled.div`
  flex-shrink: 1;
  margin-right: -5px;
  margin-left: 8px;
`;

export const DropdownBody = styled(PosedDropdownBody)<IDropdownBodyProps>`
  position: absolute;
  z-index: 1;
  background-color: #20293c;
  border-radius: 4px;
  width: ${({ bodyWidth }) => bodyWidth || '100%'};
  height: ${({ bodyHeight }) => bodyHeight || 'auto'};
  margin-top: 6px;
  padding: 6px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
