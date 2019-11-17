import { observable, action, computed } from 'mobx';
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
  Wrapper
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
  isRotatable?: boolean;
  skin?: DropdownSkins;
  flatButtonSkin?: ButtonSkins;
}

type IDropdownProps = IProps & IDropdownBodyProps;

@observer
class Dropdown extends Component<IDropdownProps> {
  @observable
  private isOpened: boolean = false;
  @observable
  private bodyPos: {
    left: number | null;
    right: number | null;
  } = {
    left: null,
    right: null
  };

  @computed
  private get bodyStyles() {
    const { left, right } = this.bodyPos;

    if (right) {
      return { right };
    } else {
      return { left };
    }
  }

  public render() {
    const {
      label,
      children,
      renderBody,
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
          <OutsideClickHandler onOutsideClick={this.onClose}>
            {skin === DropdownSkins.DEFAULT ? (
              <DropdownHeader onClick={this.onClick}>
                <LabelWrapper>{children}</LabelWrapper>
                <IconWrapper isOpened={this.isOpened} isRotatable={isRotatable}>
                  <Icon />
                </IconWrapper>
              </DropdownHeader>
            ) : (
              <Button onClick={this.onClick} skin={flatButtonSkin}>
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
                  ref={this.checkPos}
                  style={this.bodyStyles}
                >
                  {renderBody(this.onClick)}
                </DropdownBody>
              )}
            </PoseGroup>
          </OutsideClickHandler>
        </Wrapper>
      </Base>
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

  @action
  private checkPos = (ref: Element) => {
    if (!this.isOpened) {
      return;
    }

    const root = document.getElementById('root')!;
    const el = ref.getBoundingClientRect();

    if (el.right >= root.clientWidth) {
      this.bodyPos.right = 0;
    } else {
      this.bodyPos.left = -el.width / 2 + el.width / 8;
    }
  };
}

export default Dropdown;
