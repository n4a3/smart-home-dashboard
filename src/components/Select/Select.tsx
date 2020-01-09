import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import { IDropdownBodyProps } from '../Dropdown/Dropdown.styles';
import { Item, List, ItemWrapper } from './Select.styles';

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
          const onBlur = () => {
            if (index === items.length - 1) {
              onClose();
            }
          };
          const isSelected = selected === index;
          return (
            <ItemWrapper key={index}>
              <Item onClick={onClick} isSelected={isSelected} onBlur={onBlur}>
                {item}
              </Item>
            </ItemWrapper>
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
