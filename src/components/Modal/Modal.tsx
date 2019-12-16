import React, { Component } from 'react';
import { Portal } from 'react-portal';
import {
  ModalWrapper,
  LayerOverlay,
  OverlayStyled,
  PosedChildren,
  ModalTitle,
  ModalHeader,
  ModalCloseIconWrapper,
  ModalBody
} from './Modal.styles';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { clickable } from '../../hocs/clickable';
import { PoseGroup } from 'react-pose';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import OutsideClickHandler from 'react-outside-click-handler';

interface IModalProps {
  isOpened: boolean;
  onClose: () => void;
  children: ((onClose: () => void) => any) | any;
  title?: string;
}

const ESC_KEY_CODE = 27;

const ClickableCloseIcon = clickable(CloseIcon);

@observer
class Modal extends Component<IModalProps> {
  @observable
  private isOpened: boolean = true;

  public componentDidUpdate() {
    if (!this.props.isOpened) {
      this.isOpened = true;
      document.removeEventListener('keydown', this.onPressEsc);
    } else {
      document.addEventListener('keydown', this.onPressEsc);
    }
  }

  public render() {
    const { children, isOpened: isOpenedExt, onClose, title } = this.props;
    return (
      isOpenedExt && (
        <Portal>
          <LayerOverlay>
            <PoseGroup animateOnMount onRest={onClose}>
              {this.isOpened && <OverlayStyled key="OS" />}
              {this.isOpened && (
                <PosedChildren key="PC">
                  <OutsideClickHandler onOutsideClick={this.onClose}>
                    <ModalWrapper>
                      <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalCloseIconWrapper>
                          <ClickableCloseIcon onClick={this.onClose} />
                        </ModalCloseIconWrapper>
                      </ModalHeader>
                      <ModalBody>
                        {typeof children === 'function'
                          ? children(this.onClose)
                          : children}
                      </ModalBody>
                    </ModalWrapper>
                  </OutsideClickHandler>
                </PosedChildren>
              )}
            </PoseGroup>
          </LayerOverlay>
        </Portal>
      )
    );
  }

  private onClose = () => {
    this.isOpened = false;
  };

  private onPressEsc = (event: KeyboardEvent) => {
    if (event.keyCode === ESC_KEY_CODE) {
      this.onClose();
    }
  };
}

export default Modal;
