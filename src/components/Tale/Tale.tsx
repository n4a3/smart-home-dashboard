import React from 'react';
import { Wrapper, TaleHeader } from './Tale.styles';

interface ITaleProps {
  gridName: string;
}

const Tale: React.FC<ITaleProps> = ({ gridName }) => {
  return (
    <Wrapper gridName={gridName}>
      <TaleHeader></TaleHeader>
    </Wrapper>
  );
};

export default Tale;
