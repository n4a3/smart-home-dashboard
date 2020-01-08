import BaseInput from './BaseInput';
import {
  BaseStyled,
  IBaseStyledProps as IIBaseStyledProps // For TS 3.7
} from './BaseInput.styles';

export type IBaseStyledProps = IIBaseStyledProps;
export { BaseStyled };
export default BaseInput;
