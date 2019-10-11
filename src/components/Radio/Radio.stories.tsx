import { storiesOf } from '@storybook/react';
import Radio from './Radio';
import React, { Fragment, Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class RadioStory extends Component {
  @observable
  private listSelected: number[] = [];
  @observable
  private radioSelected: number | null = null;

  private listItems = ['First', 'Second', 'Third'];

  render() {
    return (
      <Fragment>
        List:
        {this.listItems.map((item, index) => {
          const onClick = () => this.listClick(index);
          const selected = this.listSelected.indexOf(index) !== -1;
          return (
            <Radio onClick={onClick} selected={selected} key={index}>
              {item}
            </Radio>
          );
        })}
        Radio:
        {this.listItems.map((item, index) => {
          const onClick = () => {
            this.radioSelected = index;
          };
          const selected = this.radioSelected === index;
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
    const idx = this.listSelected.indexOf(index);
    if (idx !== -1) {
      this.listSelected.splice(idx, 1);
    } else {
      this.listSelected.push(index);
    }
  };
}

storiesOf('Components|Radio', module).add('Default', () => <RadioStory />);
