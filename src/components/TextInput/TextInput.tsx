import React from 'react';
import { InputTypes } from '../../types';
import BaseInput, { IBaseStyledProps } from '../BaseInput';
import { Indicator, TextInputStyled, Wrapper } from './TextInput.styles';

interface IProps {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  required?: boolean;
  hasError?: boolean | null;
  type?: InputTypes;
  pattern?: string;
  label?: string;
}

type ITextInputProps = IProps & IBaseStyledProps;

const TextInput: React.FC<ITextInputProps> = ({
  value,
  onChange,
  required,
  hasError = null,
  type = InputTypes.TEXT,
  pattern,
  width,
  height,
  label
}) => {
  return (
    <BaseInput label={label}>
      <Wrapper width={width} height={height}>
        <TextInputStyled
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          hasError={hasError}
          pattern={pattern}
          width={width}
          height={height}
        />
        <Indicator hasError={hasError} />
      </Wrapper>
    </BaseInput>
  );
};

export default TextInput;
