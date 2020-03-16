import React, { Component, Suspense, lazy } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { GlobalStyle, LoaderWraper } from './App.styles';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from '../../components/Loader';
import { observer } from 'mobx-react';
import { observable, runInAction } from 'mobx';
import Button from '../../components/Button';
import { configure } from 'mobx';

configure({ enforceActions: 'always' });

const Auth = lazy(() => import('../../views/Auth'));
const Dashboard = lazy(() => import('../../views/Dashboard'));

@observer
class App extends Component {
  @observable
  private hasError = false;

  componentDidMount() {
    document.body.addEventListener('mousedown', this.setMouseInput);
    document.body.addEventListener('keydown', this.keyboardHandler);
  }

  componentDidCatch() {
    runInAction(() => {
      this.hasError = true;
    });
  }

  render() {
    return (
      <HashRouter>
        <GlobalStyle />
        {this.hasError ? (
          <Button onClick={() => window.location.reload()}>Refresh</Button>
        ) : (
          <Suspense
            fallback={
              <LoaderWraper>
                <Loader />
              </LoaderWraper>
            }
          >
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Auth} />
              <Redirect to="/dashboard" />
            </Switch>
          </Suspense>
        )}
      </HashRouter>
    );
  }

  private setMouseInput = () => {
    document.body.classList.remove('key-input');
    document.body.removeEventListener('mousedown', this.setMouseInput);
    document.body.addEventListener('keydown', this.keyboardHandler);
  };

  private keyboardHandler = (event: KeyboardEvent) => {
    const keys = ['Tab', 'Escape'];
    if (keys.includes(event.key)) {
      this.setKeyboardInput();
    }
  };

  private setKeyboardInput = () => {
    document.body.classList.add('key-input');
    document.body.removeEventListener('keydown', this.keyboardHandler);
    document.body.addEventListener('mousedown', this.setMouseInput);
  };
}

export default App;
