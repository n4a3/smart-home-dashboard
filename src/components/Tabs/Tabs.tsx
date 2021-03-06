import React from 'react';
import { List, Item, ItemButton } from './Tabs.styles';

interface ITabsProps {
  /**
   * Array of items to display in a tab
   */
  items: any[];
  selected: number | null;
  onSelect: (index: number) => void;
  width?: string | number;
}

const Tabs: React.FC<ITabsProps> = ({
  items,
  selected = null,
  onSelect,
  width
}) => {
  return (
    <List width={width}>
      {items.map((item, index) => {
        const onClick = () => onSelect(index);
        const isSelected = selected === index;
        return (
          <Item key={index}>
            <ItemButton onClick={onClick} selected={isSelected}>
              {item}
            </ItemButton>
          </Item>
        );
      })}
    </List>
  );
};

export default Tabs;
