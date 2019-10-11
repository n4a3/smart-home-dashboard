import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

@observer
class App extends Component {
  @observable
  private inputValue: string = '';
  @observable
  private inputHasError: boolean | null = null;

  private test = {
    a: {
      b: 1,
      c: 2
    }
  };

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
            Learn React {this.test.a.c}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
