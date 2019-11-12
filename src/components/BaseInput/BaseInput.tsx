import React from 'react';
import { Label, Wrapper } from './BaseInput.styles';

interface IBaseInputProps {
  children: any;
  label?: string;
  width?: string;
}

const BaseInput: React.FC<IBaseInputProps> = ({ children, label, width }) => {
  const hasLabel = !!label;
  return (
    <Wrapper>
      <Label hasLabel={hasLabel}>{label}</Label>
      {children}
    </Wrapper>
  );
};

export default BaseInput;
