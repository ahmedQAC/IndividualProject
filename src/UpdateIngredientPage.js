import React, { Component } from 'react';
import Text from './Text.js';
import UpdateIngredient from './UpdateIngredient.js';

class UpdateIngredientPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a className="active" href="/UpdateIngredientPage">Update Ingredient</a></li>
                    {/* <li><a href="#contact">Food</a></li>
                    <li><a href="#about">Macros</a></li> */}
                </ul>
                <div>
                    <br /><br />
                    <Text text="Enter ingredient ID to update" />
                    <UpdateIngredient />
                </div>
            </div>

        )
    }
}
export default UpdateIngredientPage;