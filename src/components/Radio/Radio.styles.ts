import styled from 'styled-components';

interface IIndicatorProps {
  selected: boolean;
  circle: boolean;
}

const selectedIndicator = `
content: '';
display: block;
margin: 0 auto;
width: 8px;
height: 8px;
background-color: #1f8efa;
`;

export const RadioStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 12px;
  line-height: 12px;
  border: none;
  color: #ffffff;
`;

export const Indicator = styled.div<IIndicatorProps>`
  display: flex;
  align-items: center;
  background-color: #20293c;
  height: 12px;
  width: 12px;
  margin-right: 8px;
  ${({ circle }) => circle && 'border-radius: 50%'}
  &::before {
    ${({ selected }) => selected && selectedIndicator}
    ${({ circle }) => circle && 'border-radius: 50%'}
  }
`;
