import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Text from './Text.js';

class HomePage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li>
                </ul>
                <div>
                    <SearchBar />
                    <br /><br />
                    <Text text="Here is a list of recently added ingredients" />
                </div>
            </div>

        )
    }
}
export default HomePage;