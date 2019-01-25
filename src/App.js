import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import YourIngredients from './YourIngredients';
import Content from './Content.js';
import SearchBar from './SearchBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              {/* <h1><Text text="Welcome to my Website"/></h1> */}
              <p><Text text="You are able to list all foods you can make with the ingredients you currently have" /></p>
            </header>
            <div>
              <body>
                <Route exact path={"/"} component={Content} />
                <Route path={"/home"} component={Home} />
                <Route path={"/yourIngredients"} component={YourIngredients} />
              </body>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
