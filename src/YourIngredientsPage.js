import React, { Component } from 'react';
import Text from './Text.js';
import GetAllIngredients from './GetAllIngredients.js'

class YourIngredientsPage extends Component {
    constructor(){
        super();
        this.state = {
            validatedUser: JSON.parse(sessionStorage.getItem("User"))
        }
    }
    render() {
        if (this.state.validatedUser === null) {
            return (
                <h1>You to dont have access to this page. Please login or signup</h1>
            );
        }
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a className="active" href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="/UpdateIngredientPage">Update Ingredient</a></li>
                    <li className="loginSignup"><a href="/Login">Logout</a></li>
                    {/* <li><a href="#contact">Food</a></li>
                    <li><a href="#about">Macros</a></li> */}
                </ul>
                <div>
                    <br /><br />
                    <Text text="Here is a list of all your ingredients" />
                    <GetAllIngredients />
                </div>
            </div>

        )
    }
}
export default YourIngredientsPage;