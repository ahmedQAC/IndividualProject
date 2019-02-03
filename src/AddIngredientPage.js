import React, { Component } from 'react';
import Text from './Text.js';
import AddIngredient from './AddIngredient.js';

class AddIngredientPage extends Component {
    constructor() {
        super();
        this.state = {
            validatedUser: JSON.parse(sessionStorage.getItem("User"))
        }
    }
    render() {
        if (this.state.validatedUser === null){
            return (
                <h1>You to dont have access to this page. Please login or signup</h1>
            );
        }
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a className="active" href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="/UpdateIngredientPage">Update Ingredient</a></li>
                    <li className="loginSignup"><a href="/Login">Logout</a></li>
                    {/* <li><a href="#contact">Food</a></li>
                    <li><a href="#about">Macros</a></li> */}
                </ul>
                <div>
                    <br /><br />
                    <Text text="Enter the corresponding information in the fields to add an ingredient" />
                    <AddIngredient />
                </div>
            </div>

        )
    }
}
export default AddIngredientPage;