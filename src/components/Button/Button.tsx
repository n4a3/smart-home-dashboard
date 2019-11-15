import React from 'react';
import { ButtonStyled } from './Button.styles';
import { ButtonSkins } from '../../types/ButtonSkins';

interface IButtonProps {
  children: any;
  onClick?: () => void;
  skin?: ButtonSkins;
  width?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick = () => null,
  skin = ButtonSkins.DEFAULT,
  width
}) => {
  return (
    <ButtonStyled skin={skin} onClick={onClick} width={width}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
