import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import Button from '../Button';
import TextInput from '../TextInput';

interface IState {
  isModalOpened: boolean;
  value: string;
}

class ModalStory extends Component<{}, IState> {
  readonly state: IState = {
    isModalOpened: true,
    value: ''
  };

  render() {
    return (
      <Fragment>
        <Button onClick={this.openModal}>Open modal</Button>
        <Modal
          isOpened={this.state.isModalOpened}
          onClose={this.closeModal}
          title={'Test title'}
        >
          <TextInput
            value={this.state.value}
            onChange={this.onTextChange}
            label="Test text input"
          />
        </Modal>
      </Fragment>
    );
  }

  private openModal = () => {
    this.setState({
      isModalOpened: true
    });
  };

  private closeModal = () => {
    this.setState({
      isModalOpened: false
    });
  };

  private onTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: event.currentTarget.value
    });
  };
}

storiesOf('Components|Modal', module).add('Default', () => <ModalStory />);
