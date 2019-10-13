import React from 'react';
import { List, Item } from './Tabs.styles';

interface ITabsProps {
  items: string[];
  selected: number | null;
  onSelect: (index: number) => void;
}

const Tabs: React.FC<ITabsProps> = ({ items, selected = null, onSelect }) => {
  return (
    <List>
      {items.map((item, index) => {
        const onClick = () => onSelect(index);
        const isSelected = selected === index;
        return (
          <Item key={index} onClick={onClick} selected={isSelected}>
            {item}
          </Item>
        );
      })}
    </List>
  );
};

export default Tabs;
