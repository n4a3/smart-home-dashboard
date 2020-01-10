import React from 'react';
import { RadioStyled, Indicator } from './Radio.styles';

interface IRadioProps {
  selected: boolean;
  /**
   * Square or circle
   */
  circle?: boolean;
  onClick: () => void;
}

const Radio: React.FC<IRadioProps> = ({
  children,
  selected,
  circle = false,
  onClick
}) => {
  return (
    <RadioStyled onClick={onClick}>
      <Indicator selected={selected} circle={circle} />
      {children}
    </RadioStyled>
  );
};

export default Radio;
