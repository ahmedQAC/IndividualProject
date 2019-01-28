import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Text from './Text.js';

class ContentPage extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li><a class="active" href="/home">Home</a></li>
                    <li><a href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li>
                </ul>
                <body>
                    <SearchBar />
                    <br /><br />
                    <p><Text text="What do you want to achieve" /></p>
                    <p><Text text="Everything" /></p>
                </body>
            </div>

        )
    }
}
export default ContentPage;
