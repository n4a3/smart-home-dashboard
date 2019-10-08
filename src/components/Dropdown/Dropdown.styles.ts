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
    y: -100,
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
`;

export const DropdownBody = styled(PosedDropdownBody)<IDropdownBodyProps>`
  background-color: #20293c;
  border-radius: 4px;
  width: ${({ bodyWidth }) => bodyWidth};
  height: ${({ bodyHeight }) => bodyHeight};
  margin-top: 6px;
  padding: 6px 0;
`;
