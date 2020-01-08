import styled from 'styled-components';

interface IWrapperProps {
  areas: string[];
}

interface IGridItemProps {
  name: string;
}

export const RadioWrapper = styled.label``;

export const RadioHTMLHidden = styled.input.attrs({ type: 'radio' })`
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
`;

export const Wrapper = styled.div<IWrapperProps>`
  display: grid;
  width: 160px;
  height: 110px;
  padding: 10px;
  background-color: #3e4e6c;
  border: none;
  border-radius: 4px;
  grid-template-areas: ${({ areas }) => areas};
  grid-gap: 6px;
  transition: background-color 0.2s;

  ${RadioHTMLHidden}:checked + & {
    background-color: #1f8efa;
  }

  .key-input ${RadioHTMLHidden}:focus + & {
    box-shadow: 0 0 8px 8px #1f8efa7f;
  }
`;

export const GridItem = styled.div<IGridItemProps>`
  background-color: #70889e;
  grid-area: ${({ name }) => name};
  border-radius: 2px;
  transition: background-color 0.2s;

  ${RadioHTMLHidden}:checked + ${Wrapper} > & {
    background-color: #79bbfc;
  }
`;
