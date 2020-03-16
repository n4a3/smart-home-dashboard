import React from 'react';
import Header from './Header';
import { Wrapper } from './Dashboard.styles';
import Body from './Body';
import { observer } from 'mobx-react';

const Dashboard = () => (
  <Wrapper>
    <Header />
    <Body />
  </Wrapper>
);

export default observer(Dashboard);
