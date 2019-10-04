import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextInput } from './components/Inputs';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { InputTypes } from './types';

@observer
class App extends Component {
  @observable
  private inputValue: string = '';
  @observable
  private inputHasError: boolean | null = null;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TextInput
            value={this.inputValue}
            onChange={this.onInputChange}
            hasError={this.inputHasError}
            type={InputTypes.EMAIL}
          />
        </header>
      </div>
    );
  }

  private onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      value,
      validity: { valid }
    } = event.currentTarget;
    this.inputValue = value;
    this.inputHasError = !value ? null : valid ? false : true;
  };
}

export default App;
