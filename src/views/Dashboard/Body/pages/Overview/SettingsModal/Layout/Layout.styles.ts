import styled, { css } from 'styled-components';

interface IDescriptionProps {
  onlyOnKeyboard?: boolean;
}

export const Wrapper = styled.div`
  text-align: center;
`;

export const Description = styled.p<IDescriptionProps>`
  font-size: 17px;
  color: #869aac;
  margin-top: 32px;
  margin-bottom: 36px;
  ${({ onlyOnKeyboard }) =>
    onlyOnKeyboard &&
    css`
      display: none;

      .key-input & {
        display: block;
      }
    `}
`;

export const LayoutList = styled.ul`
  width: 746px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const LayoutItem = styled.li`
  margin: 0 auto;
  margin-top: 15px;
`;
