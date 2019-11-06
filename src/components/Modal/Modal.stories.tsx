import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Button from '../Button';

@observer
class ModalStory extends Component {
  @observable
  private isModalOpened: boolean = false;

  public render() {
    return (
      <Fragment>
        <Button onClick={this.openModal}>Open modal</Button>
        <Modal isOpened={this.isModalOpened} onClose={this.closeModal}>
          test
        </Modal>
      </Fragment>
    );
  }

  private openModal = () => {
    this.isModalOpened = true;
  };

  private closeModal = () => {
    this.isModalOpened = false;
  };
}

storiesOf('Components|Modal', module).add('Default', () => <ModalStory />);
