import React from 'react';
import { ToggleWrapper, ToggleHTMLHidden, ToggleStyled } from './Toggle.styles';

interface IToggleProps {
  checked: boolean;
  onClick: () => void;
}

const Toggle: React.FC<IToggleProps> = ({ checked, onClick }) => {
  return (
    <ToggleWrapper>
      <ToggleHTMLHidden type="checkbox" checked={checked} onChange={onClick} />
      <ToggleStyled />
    </ToggleWrapper>
  );
};

export default Toggle;
