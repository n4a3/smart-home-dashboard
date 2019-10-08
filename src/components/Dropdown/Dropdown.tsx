import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { PoseGroup } from 'react-pose';
import BaseInput from '../BaseInput';
import {
  DropdownBody,
  DropdownHeader,
  IDropdownBodyProps,
  Wrapper
} from './Dropdown.styles';

interface IProps {
  /**
   * Label
   * @default Not provided
   */
  label?: string;
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
   * Function that will be called after opening
   */
  onOpen?: () => void;
  /**
   * Function that will be called after closing
   */
  onClose?: () => void;
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
      bodyWidth = '100%',
      bodyHeight = ''
    } = this.props;

    return (
      <BaseInput label={label}>
        <Wrapper>
          <OutsideClickHandler
            onOutsideClick={this.isOpened ? this.onClick : () => {}}
          >
            <DropdownHeader onClick={this.onClick}>{children}</DropdownHeader>
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
    const { onOpen = () => {}, onClose = () => {} } = this.props;
    console.log('onClick');
    if (this.isOpened) {
      onClose();
    } else {
      onOpen();
    }
    this.isOpened = !this.isOpened;
  };
}

export default Dropdown;
