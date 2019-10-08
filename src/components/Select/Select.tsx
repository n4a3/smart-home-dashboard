import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import { IDropdownBodyProps } from '../Dropdown/Dropdown.styles';
import { Item, List } from './Select.styles';

interface IProps {
  items: string[];
  onSelect: (index: number) => void;
  selected: number | null;
  label?: string;
  placeholder?: string;
  showSelected?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

type ISelectProps = IProps & IDropdownBodyProps;

class Select extends Component<ISelectProps & IDropdownBodyProps> {
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

  private get placeholder() {
    const { showSelected, selected, placeholder, items } = this.props;

    if (showSelected && selected !== null) {
      return items[selected];
    } else {
      return placeholder || 'Select...';
    }
  }

  public render() {
    const { label, icon, bodyWidth, bodyHeight } = this.props;
    return (
      <Dropdown
        label={label}
        renderBody={this.renderBody}
        icon={icon}
        bodyWidth={bodyWidth}
        bodyHeight={bodyHeight}
      >
        {this.placeholder}
      </Dropdown>
    );
  }
}

export default Select;
