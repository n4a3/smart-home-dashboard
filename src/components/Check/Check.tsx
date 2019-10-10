import React from 'react';
import { CheckStyled, ICheckStyledProps } from './Check.styles';

interface IProps {
  children: string;
}

type ICheckProps = IProps & ICheckStyledProps;

const Check: React.FC<ICheckProps> = ({ children, square }) => {
  return <CheckStyled square={square}>{children}</CheckStyled>;
};

export default Check;
