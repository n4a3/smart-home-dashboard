import { storiesOf } from '@storybook/react';
import Radio from './Radio';
import React, { Fragment, Component } from 'react';

interface IState {
  listSelected: number[];
  radioSelected: number | null;
  listItems: string[];
}

class RadioStory extends Component<{}, IState> {
  readonly state: IState = {
    listSelected: [],
    radioSelected: null,
    listItems: ['First', 'Second', 'Third']
  };

  render() {
    return (
      <Fragment>
        List:
        {this.state.listItems.map((item, index) => {
          const onClick = () => this.listClick(index);
          const selected = this.state.listSelected.indexOf(index) !== -1;
          return (
            <Radio onClick={onClick} selected={selected} key={index}>
              {item}
            </Radio>
          );
        })}
        Radio:
        {this.state.listItems.map((item, index) => {
          const onClick = () => {
            this.setState({
              radioSelected: index
            });
          };
          const selected = this.state.radioSelected === index;
          return (
            <Radio onClick={onClick} selected={selected} key={index} circle>
              {item}
            </Radio>
          );
        })}
      </Fragment>
    );
  }

  private listClick = (index: number) => {
    const idx = this.state.listSelected.indexOf(index);
    if (idx !== -1) {
      const newList = [
        ...this.state.listSelected.slice(idx),
        ...this.state.listSelected.slice(idx + 1)
      ];
      this.setState({
        listSelected: newList
      });
    } else {
      const newList = [...this.state.listSelected, index];
      this.setState({
        listSelected: newList
      });
    }
  };
}

storiesOf('Components|Radio', module).add('Default', () => <RadioStory />);
