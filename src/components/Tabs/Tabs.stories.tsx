import { storiesOf } from '@storybook/react';
import Tabs from './Tabs';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class TabsStory extends Component {
  @observable
  private selected: number = 0;

  private items = ['1111111', '2222222', 'third item', '4th item'];

  public render() {
    return (
      <Tabs
        items={this.items}
        selected={this.selected}
        onSelect={this.onSelect}
      />
    );
  }

  private onSelect = (index: number) => {
    this.selected = index;
  };
}

storiesOf('Components|Tabs', module).add('Default', () => <TabsStory />);
