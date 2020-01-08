import React from 'react';
import BaseInput, { IBaseStyledProps } from '../BaseInput';
import { Indicator, TextInputStyled, Wrapper } from './TextInput.styles';

interface IProps {
  hasError?: boolean | null;
  label?: string;
}

export type ITextInputProps = IProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  IBaseStyledProps;

const TextInput: React.FC<ITextInputProps> = ({
  hasError = null,
  width,
  height,
  label,
  ...rest
}) => {
  return (
    <BaseInput label={label}>
      <Wrapper width={width} height={height}>
        <TextInputStyled
          hasError={hasError}
          width={width}
          height={height}
          {...rest}
        />
        <Indicator hasError={hasError} />
      </Wrapper>
    </BaseInput>
  );
};

export default TextInput;
