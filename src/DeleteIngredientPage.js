import React, { Component } from 'react';
import Text from './Text.js';
import GetAllIngredients from './GetAllIngredients.js';
import AddIngredient from './AddIngredient.js';

class DeleteIngredientPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a className="active" href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="#contact">Food</a></li>
                    <li><a href="#about">Macros</a></li>
                </ul>
                <body>
                    <br /><br />
                    <p><Text text="Enter ingredient ID to delete" /></p>
                </body>
            </div>

        )
    }
}
export default DeleteIngredientPage;