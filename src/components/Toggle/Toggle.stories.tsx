import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Toggle from './Toggle';

interface IState {
  checked: boolean;
}

class ToggleStory extends Component<{}, IState> {
  readonly state: IState = {
    checked: false
  };

  render() {
    return <Toggle checked={this.state.checked} onClick={this.toggle} />;
  }

  private toggle = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
}

storiesOf('Components|Toggle', module).add('Default', () => <ToggleStory />);
