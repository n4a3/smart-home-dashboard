import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Header from './Header';
import { Wrapper } from './Dashboard.styles';
import Body from './Body';

interface IDashboardProps {}

@observer
class Dashboard extends Component<IDashboardProps> {
  public render() {
    return (
      <Wrapper>
        <Header />
        <Body />
      </Wrapper>
    );
  }
}

export default Dashboard;
