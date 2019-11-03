import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { PoseGroup } from 'react-pose';
import { ReactComponent as Triangle } from '../../assets/triangle.svg';
import BaseInput from '../BaseInput';
import {
  DropdownBody,
  DropdownHeader,
  IconWrapper,
  IDropdownBodyProps,
  LabelWrapper,
  Wrapper
} from './Dropdown.styles';

interface IProps {
  children: any;
  /**
   * You can use onClose callback for functions in renderBody
   * @example
   * const renderBody = (onClose: () => void) => {
   *   const onItemClick = (item) => {
   *     console.log(item);
   *     onClose();
   *   }
   * }
   */
  renderBody: ((onClose: () => void) => any) | (() => any);
  /**
   * Label
   * @default Not provided
   */
  label?: string;
  /**
   * You can provide a custom svg icon
   */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  /**
   * Function that will be called after opening
   */
  onOpen?: () => void;
  /**
   * Function that will be called after closing
   */
  onClose?: () => void;
  isRotatable?: boolean;
}

type IDropdownProps = IProps & IDropdownBodyProps;

@observer
class Dropdown extends Component<IDropdownProps> {
  @observable
  private isOpened: boolean = false;
  public render() {
    const {
      label,
      children,
      renderBody,
      bodyWidth,
      bodyHeight,
      isRotatable,
      icon: Icon = Triangle
    } = this.props;

    return (
      <BaseInput label={label}>
        <Wrapper>
          <OutsideClickHandler onOutsideClick={this.onClose}>
            <DropdownHeader onClick={this.onClick}>
              <LabelWrapper>{children}</LabelWrapper>
              <IconWrapper isOpened={this.isOpened} isRotatable={isRotatable}>
                <Icon />
              </IconWrapper>
            </DropdownHeader>
            <PoseGroup>
              {this.isOpened && (
                <DropdownBody
                  key="drp-body"
                  bodyWidth={bodyWidth}
                  bodyHeight={bodyHeight}
                >
                  {renderBody(this.onClick)}
                </DropdownBody>
              )}
            </PoseGroup>
          </OutsideClickHandler>
        </Wrapper>
      </BaseInput>
    );
  }

  private onClick = () => {
    if (this.isOpened) {
      this.onClose();
    } else {
      this.onOpen();
    }
  };

  private onClose = () => {
    const { onClose = () => null } = this.props;
    this.isOpened = false;
    onClose();
  };

  private onOpen = () => {
    const { onOpen = () => null } = this.props;
    this.isOpened = true;
    onOpen();
  };
}

export default Dropdown;
