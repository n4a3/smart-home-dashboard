import { observer } from 'mobx-react';
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { rootStore } from '../../stores/RootStore';
import Auth from '../../views/Auth';
import Dashboard from '../../views/Dashboard';
import { GlobalStyle } from './App.styles';

@observer
class App extends Component {
  public render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            {rootStore.getAuthStatus() ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
