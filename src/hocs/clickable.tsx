import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const clickable = (Component: any) =>
  class Wrapped extends PureComponent<{
    onClick: () => void;
    [prop: string]: any;
  }> {
    render() {
      const { onClick, ...otherProps } = this.props;
      return (
        <ButtonWrapper onClick={onClick}>
          <Component {...otherProps} />
        </ButtonWrapper>
      );
    }
  };
