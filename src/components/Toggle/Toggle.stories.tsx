import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Toggle from './Toggle';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class ToggleStory extends Component {
  @observable
  private checked: boolean = false;

  render() {
    return <Toggle checked={this.checked} onClick={this.toggle} />;
  }

  private toggle = () => {
    this.checked = !this.checked;
  };
}

storiesOf('Components|Toggle', module).add('Default', () => <ToggleStory />);
