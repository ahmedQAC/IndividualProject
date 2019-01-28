import React, { Component } from 'react';
import Text from './Text.js';
import GetAllIngredients from './GetAllIngredients.js'

class YourIngredientsPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a className="active" href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="#contact">Food</a></li>
                    <li><a href="#about">Macros</a></li>
                </ul>
                <body>
                    <br /><br />
                    <p><Text text="Here is a list of all your ingredients" /></p>
                    <GetAllIngredients />
                </body>
            </div>

        )
    }
}
export default YourIngredientsPage;