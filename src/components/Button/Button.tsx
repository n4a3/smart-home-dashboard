import React from 'react';
import { ButtonStyled } from './Button.styles';
import { ButtonSkins } from '../../types';

interface IProps {
  children: any;
  skin?: ButtonSkins;
  width?: string | number;
}

type IButtonProps = IProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({
  children,
  skin = ButtonSkins.DEFAULT,
  width,
  disabled,
  ...rest
}) => {
  return (
    <ButtonStyled skin={skin} width={width} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
