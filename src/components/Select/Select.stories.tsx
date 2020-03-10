import { storiesOf } from '@storybook/react';

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import Select from './Select';

interface IState {
  selected: number | null;
}

const Margin = styled.div`
  margin-bottom: 4rem;
`;

class SelectStory extends Component<{}, IState> {
  readonly state: IState = {
    selected: null
  };

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

  render() {
    return (
      <Fragment>
        <Select
          label="Default 'Select'"
          items={this.items}
          onSelect={this.onSelect}
          selected={this.state.selected}
        />
        <Margin />
        <Select
          label="'Select' which shows selected item"
          items={this.items}
          onSelect={this.onSelect}
          selected={this.state.selected}
          showSelected
        />
        <Margin />
        <Select
          label="'Select' with fixed width"
          items={this.items}
          onSelect={this.onSelect}
          selected={this.state.selected}
          bodyWidth="200px"
          showSelected
        />
        <Margin />
        <Select
          label="'Select' with custom icon and placeholder"
          items={this.days}
          onSelect={this.onSelect}
          selected={this.state.selected}
          icon={Calendar}
          placeholder="Select day"
          showSelected
        />
      </Fragment>
    );
  }

  private onSelect = (index: number) => {
    this.setState({
      selected: index
    });
  };
}

storiesOf('Components|Select', module).add('Default', () => <SelectStory />);
