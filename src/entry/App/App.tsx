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
  private root = document.getElementById('root')!;

  public componentDidMount() {
    this.root.addEventListener('mousedown', this.setMouseInput);
    this.root.addEventListener('keydown', this.setKeyboardInput);
  }

  public render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            {rootStore.authStore.authStatus ? (
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

  private setMouseInput = () => {
    this.root.classList.remove('key-input');
    this.root.removeEventListener('mousedown', this.setMouseInput);
    this.root.addEventListener('keydown', this.setKeyboardInput);
  };

  private setKeyboardInput = () => {
    this.root.classList.add('key-input');
    this.root.removeEventListener('keydown', this.setKeyboardInput);
    this.root.addEventListener('mousedown', this.setMouseInput);
  };
}

export default App;
