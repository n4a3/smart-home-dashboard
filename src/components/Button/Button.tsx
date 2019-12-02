import React from 'react';
import { ButtonStyled } from './Button.styles';
import { ButtonSkins } from '../../types';

interface IButtonProps {
  children: any;
  onClick?: () => void;
  skin?: ButtonSkins;
  width?: string | number;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick = () => null,
  skin = ButtonSkins.DEFAULT,
  width,
  disabled
}) => {
  return (
    <ButtonStyled
      skin={skin}
      onClick={onClick}
      width={width}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
