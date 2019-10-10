import { storiesOf } from '@storybook/react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import Select from './Select';

const Margin = styled.div`
  margin-bottom: 4rem;
`;

@observer
class SelectStory extends Component {
  @observable
  private selected: number | null = null;

  private items = [
    'First item',
    'Second item',
    'Aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'Verylongtexttest Verylongtexttest Verylongtexttest Verylongtexttest',
    'VerylongtexttestVerylongtexttestVerylongtexttestVerylongtexttestVerylongtexttestVerylongtexttest'
  ];

  private days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Saturday',
    'Sunday'
  ];

  public render() {
    return (
      <Fragment>
        <Select
          label="Default 'Select'"
          items={this.items}
          onSelect={this.onSelect}
          selected={this.selected}
        />
        <Margin />
        <Select
          label="'Select' which shows selected item"
          items={this.items}
          onSelect={this.onSelect}
          selected={this.selected}
          showSelected
        />
        <Margin />
        <Select
          label="'Select' with fixed width"
          items={this.items}
          onSelect={this.onSelect}
          selected={this.selected}
          bodyWidth="200px"
          showSelected
        />
        <Margin />
        <Select
          label="'Select' with custom icon and placeholder"
          items={this.days}
          onSelect={this.onSelect}
          selected={this.selected}
          icon={Calendar}
          placeholder="Select day"
          showSelected
        />
      </Fragment>
    );
  }

  private onSelect = (index: number) => {
    this.selected = index;
  };
}

storiesOf('Components|Select', module).add('Default', () => <SelectStory />);
