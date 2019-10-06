import React from 'react';
import Dropdown from '../../Dropdown';
import { Component } from 'react';
import { List, Item } from './Select.styles';

interface ISelectProps {
  items: string[];
  onSelect: (index: number) => void;
  label?: string;
  selected: number | null;
}

class Select extends Component<ISelectProps> {
  private get renderBody() {
    const { items, onSelect, selected } = this.props;

    return (onClose: () => void) => (
      <List>
        {items.map((item, index) => {
          const onClick = () => {
            onSelect(index);
            onClose();
          };
          const isSelected = selected === index;
          return (
            <Item key={index} onClick={onClick} isSelected={isSelected}>
              {item}
            </Item>
          );
        })}
      </List>
    );
  }

  public render() {
    return (
      <Dropdown label={this.props.label} renderBody={this.renderBody}>
        Choose...
      </Dropdown>
    );
  }
}

export default Select;
