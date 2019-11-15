import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { rootStore } from '../../stores/RootStore';
import { observer } from 'mobx-react';
import Auth from '../../views/Auth';
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
        </Switch>
      </Router>
    );
  }
}

export default App;
