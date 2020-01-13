import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
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
  Wrapper,
  JustifyWrapper
} from './Dropdown.styles';
import { DropdownSkins, ButtonSkins } from '../../types';
import Button from '../Button';

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
  headerWidth?: string | number;
  /**
   * Rotate the icon when the Dropdown opens/closes
   */
  isRotatable?: boolean;
  /**
   * Skin for Button;
   * Use with "FLAT" Dropdown skin!
   */
  flatButtonSkin?: ButtonSkins;
}

type IDropdownProps = IProps & IDropdownBodyProps;

@observer
class Dropdown extends Component<IDropdownProps> {
  @observable
  private isOpened: boolean = false;

  public componentDidUpdate() {
    if (this.isOpened) {
      document.addEventListener('keydown', this.onPressEsc);
    } else {
      document.removeEventListener('keydown', this.onPressEsc);
    }
  }

  public render() {
    const {
      label,
      children,
      renderBody,
      headerWidth,
      bodyWidth,
      bodyHeight,
      isRotatable,
      skin = DropdownSkins.DEFAULT,
      flatButtonSkin = ButtonSkins.ICON,
      icon: Icon = Triangle
    } = this.props;

    const Base = skin === DropdownSkins.DEFAULT ? BaseInput : Fragment;
    const props = skin === DropdownSkins.DEFAULT ? { label } : {};

    return (
      <Base {...props}>
        <Wrapper>
          <OutsideClickHandler
            onOutsideClick={this.onClose}
            disabled={!this.isOpened}
          >
            <JustifyWrapper skin={skin}>
              {skin === DropdownSkins.DEFAULT ? (
                <DropdownHeader
                  as="button"
                  width={headerWidth}
                  onClick={this.onClick}
                  onBlur={this.onBlur}
                >
                  <LabelWrapper>{children}</LabelWrapper>
                  <IconWrapper
                    isOpened={this.isOpened}
                    isRotatable={isRotatable}
                  >
                    <Icon />
                  </IconWrapper>
                </DropdownHeader>
              ) : (
                <Button
                  skin={flatButtonSkin}
                  onClick={this.onClick}
                  onBlur={this.onBlur}
                >
                  {children}
                </Button>
              )}
              <PoseGroup>
                {this.isOpened && (
                  <DropdownBody
                    key="drp-body"
                    bodyWidth={bodyWidth}
                    bodyHeight={bodyHeight}
                    skin={skin}
                  >
                    {renderBody(this.onClick)}
                  </DropdownBody>
                )}
              </PoseGroup>
            </JustifyWrapper>
          </OutsideClickHandler>
        </Wrapper>
      </Base>
    );
  }

  private onClick = () => {
    this.isOpened ? this.onClose() : this.onOpen();
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

  private onBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (this.isOpened) {
      const dropdownBody = event.currentTarget.nextElementSibling;
      const nextFocusedElement = event.relatedTarget as Node;
      if (dropdownBody && dropdownBody.contains(nextFocusedElement)) {
        return;
      }
      this.onClose();
    }
  };

  private onPressEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.onClose();
    }
  };
}

export default Dropdown;
