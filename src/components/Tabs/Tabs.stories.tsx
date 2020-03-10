import { storiesOf } from '@storybook/react';
import Tabs from './Tabs';
import React, { Component } from 'react';

interface IState {
  selected: number;
}

class TabsStory extends Component<{}, IState> {
  readonly state: IState = {
    selected: 0
  };

  private items = ['1111111', '2222222', 'third item', '4th item'];

  render() {
    return (
      <Tabs
        items={this.items}
        selected={this.state.selected}
        onSelect={this.onSelect}
      />
    );
  }

  private onSelect = (index: number) => {
    this.setState({
      selected: index
    });
  };
}

storiesOf('Components|Tabs', module).add('Default', () => <TabsStory />);
