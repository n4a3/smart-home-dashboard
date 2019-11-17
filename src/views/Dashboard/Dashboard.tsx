import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Header from './Header';
import { Wrapper } from './Dashboard.styles';

interface IDashboardProps {}

@observer
class Dashboard extends Component<IDashboardProps> {
  public render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default Dashboard;
