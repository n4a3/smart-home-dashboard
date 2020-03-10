import React, { PureComponent } from 'react';
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
import OutsideClickHandler from 'react-outside-click-handler';

interface IModalProps {
  isOpened: boolean;
  onClose: () => void;
  children: ((onClose: () => void) => any) | any;
  title?: string;
}

interface IState {
  isOpened: boolean;
}

const ClickableCloseIcon = clickable(CloseIcon);

class Modal extends PureComponent<IModalProps, IState> {
  readonly state: IState = {
    isOpened: true
  };

  componentDidUpdate(prevProps: IModalProps) {
    if (prevProps.isOpened === this.props.isOpened) {
      return;
    }
    if (!this.props.isOpened) {
      this.setState(() => ({
        isOpened: true
      }));
      document.removeEventListener('keydown', this.onPressEsc);
    } else {
      document.addEventListener('keydown', this.onPressEsc);
    }
  }

  render() {
    const { children, isOpened: isOpenedExt, onClose, title } = this.props;
    return (
      isOpenedExt && (
        <Portal>
          <LayerOverlay>
            <PoseGroup animateOnMount onRest={onClose}>
              {this.state.isOpened && <OverlayStyled key="OS" />}
              {this.state.isOpened && (
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
    this.setState({
      isOpened: false
    });
  };

  private onPressEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.onClose();
    }
  };
}

export default Modal;
