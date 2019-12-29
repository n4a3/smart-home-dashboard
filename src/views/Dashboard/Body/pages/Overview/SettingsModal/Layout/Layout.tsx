import React from 'react';
import { convertAreas } from '../../../../../../../utils/convertAreas';
import { gridLayouts } from '../../../../../../../constants/girdLayouts';
import LayoutPreview from '../../../../../../../components/LayoutItem';
import { observer } from 'mobx-react';
import { Wrapper, Description, LayoutList, LayoutItem } from './Layout.styles';

interface ILayoutProps {
  selected: number;
  onSelect: (index: number) => void;
}

const Layout: React.FC<ILayoutProps> = ({ selected, onSelect }) => (
  <Wrapper>
    <Description>
      Customize your overview page layout. Choose the one that best fits your
      needs.
    </Description>
    <LayoutList>
      {gridLayouts.map((layout, index) => {
        const areas = convertAreas(layout);
        const onItemSelect = () => onSelect(index);

        return (
          <LayoutItem key={index}>
            <LayoutPreview
              areas={areas}
              selected={index === selected}
              onSelect={onItemSelect}
            />
          </LayoutItem>
        );
      })}
    </LayoutList>
  </Wrapper>
);

export default observer(Layout);
