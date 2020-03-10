import React, { Component } from 'react';
import Button from '../../../components/Button';

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<{}, IState> {
  readonly state: IState = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <Button onClick={() => window.location.reload()}>Reload</Button>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
