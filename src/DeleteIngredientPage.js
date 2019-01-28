import React, { Component } from 'react';
import Text from './Text.js';
import DeleteIngredient from './DeleteIngredient.js';

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
                <div>
                    <br /><br />
                    <Text text="Enter ingredient ID to delete" />
                    <DeleteIngredient/>
                </div>
            </div>

        )
    }
}
export default DeleteIngredientPage;