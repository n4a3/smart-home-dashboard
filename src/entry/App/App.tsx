import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import { rootStore } from '../../stores/RootStore';
import Auth from '../../views/Auth';
import Dashboard from '../../views/Dashboard';
import { GlobalStyle } from './App.styles';

@observer
class App extends Component {
  private body = document.querySelector('body')!;

  private get route() {
    return rootStore.authStore.authStatus ? (
      <Redirect to="/dashboard" />
    ) : (
      <Redirect to="/login" />
    );
  }

  public componentDidMount() {
    this.body.addEventListener('mousedown', this.setMouseInput);
    this.body.addEventListener('keydown', this.keyboardHandler);
  }

  public render() {
    return (
      <Router>
        <GlobalStyle />
        <Route path="/" render={() => this.route} />
        <Route path="/login" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    );
  }

  private setMouseInput = () => {
    this.body.classList.remove('key-input');
    this.body.removeEventListener('mousedown', this.setMouseInput);
    this.body.addEventListener('keydown', this.keyboardHandler);
  };

  private keyboardHandler = (event: KeyboardEvent) => {
    const keyCodes = [9, 27];
    if (keyCodes.includes(event.keyCode)) {
      this.setKeyboardInput();
    }
  };

  private setKeyboardInput = () => {
    this.body.classList.add('key-input');
    this.body.removeEventListener('keydown', this.keyboardHandler);
    this.body.addEventListener('mousedown', this.setMouseInput);
  };
}

export default App;
