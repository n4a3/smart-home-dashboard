import { storiesOf } from '@storybook/react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import Select from './Select';

@observer
class SelectStory extends Component {
  @observable
  private selected: number | null = null;
  private items = ['First item', 'Second item', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaa'];

  public render() {
    return (
      <Select
        label="Select"
        items={this.items}
        onSelect={this.onSelect}
        selected={this.selected}
      />
    );
  }

  private onSelect = (index: number) => {
    this.selected = index;
  };
}

storiesOf('Components|Select', module)
  .addParameters({
    props: {
      propTables: [Select]
    }
  })
  .add('Default', () => <SelectStory />);
