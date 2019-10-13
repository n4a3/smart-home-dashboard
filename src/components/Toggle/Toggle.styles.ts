import styled from 'styled-components';

export const ToggleWrapper = styled.label`
  display: block;
  position: relative;
  width: 26px;
  height: 11px;
  cursor: pointer;
`;

export const ToggleHTMLHidden = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

export const ToggleStyled = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 7px;
  background-color: #20293c;
  &::before {
    display: block;
    content: '';
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #70889e;
    transition: 0.2s;
    ${ToggleHTMLHidden}:checked + & {
      background-color: #1f8efa;
      transform: translateX(100%);
      transition: 0.2s;
    }
  }
`;
