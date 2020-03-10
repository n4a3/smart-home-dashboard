import { storiesOf } from '@storybook/react';

import React, { Component } from 'react';
import TextInput from './TextInput';

interface IState {
  value: string;
  hasError: boolean | null;
}

class TextInputStory extends Component<{}, IState> {
  readonly state: IState = {
    value: 'Hello',
    hasError: null
  };

  render() {
    return (
      <TextInput
        label="Text"
        value={this.state.value}
        onChange={this.onChange}
        hasError={this.state.hasError}
        type="email"
      />
    );
  }

  private onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, validity } = e.currentTarget;
    this.setState({
      value,
      hasError: value ? !validity.valid : true
    });
  };
}

storiesOf('Components|TextInput', module).add('Default', () => (
  <TextInputStory />
));
