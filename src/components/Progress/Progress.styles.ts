import styled from 'styled-components';

interface ProgressStyled {
  percent: number;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-right: 6px;
  display: flex;
`;

export const ProgressStyled = styled.div<ProgressStyled>`
  width: 167px;
  height: 9px;
  padding: 2px;
  border-radius: 5px;
  background-color: #20293c;
  &::before {
    display: block;
    content: '';
    width: ${({ percent }) => `${percent}%`};
    height: 100%;
    border-radius: 5px;
    background-color: #1f8efa;
  }
`;
