import React from 'react';
import { ButtonStyled } from './Button.styles';

interface IButtonProps {
  onClick: () => void;
  children: any;
  badge?: boolean;
  circle?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  badge,
  circle
}) => {
  return (
    <ButtonStyled badge={badge} circle={circle} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
