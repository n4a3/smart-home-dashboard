import React from 'react';
import Header from './Header';
import { Wrapper } from './Dashboard.styles';
import Body from './Body';

const Dashboard = () => (
  <Wrapper>
    <Header />
    <Body />
  </Wrapper>
);

export default Dashboard;
