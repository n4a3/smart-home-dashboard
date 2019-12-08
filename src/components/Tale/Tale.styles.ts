import styled from 'styled-components';

interface IWrapperProps {
  gridName: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  background-color: #2f3b52;
  box-shadow: 0 6px 13px rgba(21, 33, 56, 0.53);
  border-radius: 2px;
  padding: 12px 8px;
  padding-top: 0;
  grid-area: ${({ gridName }) => gridName};
`;

export const TaleHeader = styled.div``;
