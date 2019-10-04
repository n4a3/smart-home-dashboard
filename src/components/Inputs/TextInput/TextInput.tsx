import React, { FC } from 'react';
import { TextInputStyled, Wrapper, Label, Indicator } from './TextInput.styles';
import { InputTypes } from '../../../types';
import { IBaseStyledProps } from '../baseStyle.styles';

interface IProps {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  required?: boolean;
  hasError?: boolean | null;
  type?: InputTypes;
  pattern?: string;
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
  height
}) => {
  return (
    <Label>
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
    </Label>
  );
};

export default TextInput;
