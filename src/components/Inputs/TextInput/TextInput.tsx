import React, { FC } from 'react';
import { TextInputStyled, Wrapper, Indicator } from './TextInput.styles';
import { InputTypes } from '../../../types';
import { IBaseStyledProps } from '../base/baseStyle.styles';
import BaseInput from '../base';

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

const TextInput: FC<ITextInputProps> = ({
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
      <Wrapper>
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
