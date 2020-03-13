import { storiesOf } from '@storybook/react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import TextInput from './TextInput';

@observer
class TextInputStory extends Component {
  @observable
  private value: string = 'Hello';
  @observable
  private hasError: boolean | null = null;

  render() {
    return (
      <TextInput
        label="Text"
        value={this.value}
        onChange={this.onChange}
        hasError={this.hasError}
        type="email"
      />
    );
  }

  private onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, validity } = e.currentTarget;
    this.value = value;
    this.hasError = value ? !validity.valid : true;
  };
}

storiesOf('Components|TextInput', module).add('Default', () => (
  <TextInputStory />
));
