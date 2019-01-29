import React, { Component } from 'react';
import './App.css';
import Text from './Text.js';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import YourIngredientsPage from './YourIngredientsPage';
import ContentPage from './ContentPage.js';
import AddIngredientPage from './AddIngredientPage.js';
import DeleteIngredientPage from './DeleteIngredientPage.js';
import UpdateIngredientPage from './UpdateIngredientPage.js';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              {/* <h1><Text text="Welcome to my Website"/></h1> */}
              <Text text="You are able to list all foods you can make with the ingredients you currently have" />
            </header>
            <div>
                <Route exact path={"/"} component={ContentPage} />
                <Route path={"/home"} component={HomePage} />
                <Route path={"/yourIngredientsPage"} component={YourIngredientsPage} />
                <Route path={"/addIngredientPage"} component={AddIngredientPage} />
                <Route path={"/DeleteIngredientPage"} component={DeleteIngredientPage} />
                <Route path={"/UpdateIngredientPage"} component={UpdateIngredientPage} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
