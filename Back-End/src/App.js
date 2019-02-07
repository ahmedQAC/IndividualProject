import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Text from './Components/Text.js';
import HomePage from './Components/HomePage';
import YourIngredientsPage from './Components/YourIngredientsPage';
import ContentPage from './Components/ContentPage.js';
import AddIngredientPage from './Components/AddIngredientPage.js';
import DeleteIngredientPage from './Components/DeleteIngredientPage.js';
import UpdateIngredientPage from './Components/UpdateIngredientPage.js';
import Signup from './Components/Signup.js';
import Login from './Components/Login.js';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Text text="You are able to list all foods you can make with the ingredients you currently have" />
            </header>
            <div>
              <Route exact path={"/"} component={ContentPage} />
              <Route path={"/home"} component={HomePage} />
              <Route path={"/yourIngredientsPage"} component={YourIngredientsPage} />
              <Route path={"/addIngredientPage"} component={AddIngredientPage} />
              <Route path={"/DeleteIngredientPage"} component={DeleteIngredientPage} />
              <Route path={"/UpdateIngredientPage"} component={UpdateIngredientPage} />
              <Route path={"/Signup"} component={Signup} />
              <Route path={"/Login"} component={Login} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
