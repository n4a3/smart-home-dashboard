import React, { Component } from 'react';
import Dropdown from '../Dropdown';
import { IDropdownBodyProps } from '../Dropdown/Dropdown.styles';
import { Item, List, ItemWrapper } from './Select.styles';

interface IProps {
  /**
   * Array of items to display in a list
   */
  items: string[];
  /**
   * The action that will be called after clicking on an item
   */
  onSelect: (index: number) => void;
  selected: number | null;
  /**
   * Label for dropdown
   */
  label?: string;
  /**
   * Text to display in the header of the dropdown if no items are selected or showSelected is false/not provided
   * @default "Select..."
   */
  placeholder?: string;
  /**
   * If true, the selected item will be displayed in the header of the dropdown
   */
  showSelected?: boolean;
  /**
   * Custom icon
   */
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

  render() {
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
