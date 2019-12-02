import React from 'react';
import { Wrapper } from './Body.styles';
import Navigation from './Navigation';

interface IBodyProps {}

const Body: React.FC<IBodyProps> = () => {
  return (
    <Wrapper>
      <Navigation />
    </Wrapper>
  );
};

export default Body;
