import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import YourIngredientsPage from './YourIngredientsPage';
import ContentPage from './ContentPage.js';
import SearchBar from './SearchBar.js';
import AddIngredientPage from './AddIngredientPage.js';
import DeleteIngredientPage from './DeleteIngredientPage.js';

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
                <Route exact path={"/"} component={ContentPage} />
                <Route path={"/home"} component={HomePage} />
                <Route path={"/yourIngredientsPage"} component={YourIngredientsPage} />
                <Route path={"/addIngredientPage"} component={AddIngredientPage} />
                <Route path={"/DeleteIngredientPage"} component={DeleteIngredientPage} />
              </body>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
