import React, { Component } from 'react';
import GetAllIngredients from './GetAllIngredients.js'

class YourIngredientsPage extends Component {
    constructor() {
        super();
        this.state = {
            validatedUser: JSON.parse(sessionStorage.getItem("User"))
        }
    }
    render() {
        if (this.state.validatedUser === null) {
            return (
                <div>
                    <ul>
                        <li><a className="active" href="/Home">Home</a></li>
                        <li className="loginSignup"><a href="/Login">Login</a></li>
                        <li className="loginSignup"><a href="/Signup">Signup</a></li>
                    </ul>
                    <h1>You to dont have access to this page. Please login or signup</h1>
                </div >
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
                    <GetAllIngredients />
                </div>
            </div>

        )
    }
}
export default YourIngredientsPage;