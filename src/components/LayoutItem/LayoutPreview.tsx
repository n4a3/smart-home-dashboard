import React from 'react';
import {
  RadioWrapper,
  RadioHTMLHidden,
  Wrapper,
  GridItem
} from './LayoutPreview.styles';

interface ILayoutItemProps {
  areas: string[];
  selected: boolean;
  onSelect: () => void;
}

const LayoutPreview: React.FC<ILayoutItemProps> = ({
  areas,
  selected,
  onSelect
}) => {
  return (
    <RadioWrapper>
      <RadioHTMLHidden checked={selected} onChange={onSelect} />
      <Wrapper areas={areas}>
        <GridItem name="a" />
        <GridItem name="b" />
        <GridItem name="c" />
      </Wrapper>
    </RadioWrapper>
  );
};

export default LayoutPreview;
