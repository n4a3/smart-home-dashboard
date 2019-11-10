import React from 'react';
import { ButtonStyled } from './Button.styles';
import { ButtonSkins } from '../../types/ButtonSkins';

interface IButtonProps {
  onClick: () => void;
  children: any;
  skin?: ButtonSkins;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  skin = ButtonSkins.DEFAULT
}) => {
  return (
    <ButtonStyled skin={skin} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
