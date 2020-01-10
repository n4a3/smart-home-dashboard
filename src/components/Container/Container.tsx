import React from 'react';
import { Wrapper, IWrapperProps } from './Container.styles';

const Container: React.FC<IWrapperProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Container;
