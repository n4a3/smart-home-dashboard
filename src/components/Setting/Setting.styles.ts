import styled, { css } from 'styled-components';

interface IWrapperProps {
  hasDescription: boolean;
}

interface ILineWrapperProps {
  hasDescription: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  margin-bottom: 38px;
  ${({ hasDescription }) =>
    hasDescription
      ? css`
          flex-direction: column;
        `
      : css`
          justify-content: space-between;
        `};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-size: 17px;
  font-weight: 300;
  margin: 0;
`;

export const LineWrapper = styled.div<ILineWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ hasDescription }) =>
    hasDescription &&
    css`
      margin-top: 8px;
    `}
`;

export const Description = styled.p`
  margin: 0;
  font-size: 12px;
  color: #98a7b9;
`;

export const Switcher = styled.div`
  margin-left: 10px;
`;
