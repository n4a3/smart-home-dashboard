import React from 'react';
import { IWrapperProps, Wrapper } from './Alert.styles';

type IAlertProps = IWrapperProps;

const Alert: React.FC<IAlertProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Alert;
