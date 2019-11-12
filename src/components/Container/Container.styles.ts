import styled from 'styled-components';

interface IWrapperProps {
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
}

export const Wrapper = styled.div<IWrapperProps>`
  margin-left: ${({ marginLeft = 'unset' }) => getProp(marginLeft)};
  margin-right: ${({ marginRight = 'unset' }) => getProp(marginRight)};
  margin-top: ${({ marginTop = 'unset' }) => getProp(marginTop)};
  margin-bottom: ${({ marginBottom = 'unset' }) => getProp(marginBottom)};
  padding-left: ${({ paddingLeft = 'unset' }) => getProp(paddingLeft)};
  padding-right: ${({ paddingRight = 'unset' }) => getProp(paddingRight)};
  padding-top: ${({ paddingTop = 'unset' }) => getProp(paddingTop)};
  padding-bottom: ${({ paddingBottom = 'unset' }) => getProp(paddingBottom)};
`;

const getProp = (prop: string | number) => {
  return isNaN(+prop) ? prop : `${prop}px`;
};
