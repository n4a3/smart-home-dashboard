import React, { Component, Suspense, lazy } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { GlobalStyle, LoaderWrapper } from './App.styles';
// import PrivateRoute from './PrivateRoute';
import Loader from '../../components/Loader';
import ErrorBoundary from './ErrorBoundary';

const Auth = lazy(() => import('../../views/Auth'));
// const Dashboard = lazy(() => import('../../views/Dashboard'));

class App extends Component {
  componentDidMount() {
    document.body.addEventListener('mousedown', this.setMouseInput);
    document.body.addEventListener('keydown', this.keyboardHandler);
  }

  render() {
    return (
      <HashRouter>
        <GlobalStyle />
        <ErrorBoundary>
          <Suspense
            fallback={
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            }
          >
            <Switch>
              {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
              <Route path="/login" component={Auth} />
              <Redirect to="/login" />
            </Switch>
          </Suspense>
        </ErrorBoundary>
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
