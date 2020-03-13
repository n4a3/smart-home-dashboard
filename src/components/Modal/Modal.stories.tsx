import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Button from '../Button';
import TextInput from '../TextInput';

@observer
class ModalStory extends Component {
  @observable
  private isModalOpened = true;
  @observable
  private value = '';

  render() {
    return (
      <Fragment>
        <Button onClick={this.openModal}>Open modal</Button>
        <Modal
          isOpened={this.isModalOpened}
          onClose={this.closeModal}
          title={'Test title'}
        >
          <TextInput
            value={this.value}
            onChange={this.onTextChange}
            label="Test text input"
          />
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

  private onTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.value = event.currentTarget.value;
  };
}

storiesOf('Components|Modal', module).add('Default', () => <ModalStory />);
