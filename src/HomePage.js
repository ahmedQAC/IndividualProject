import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Text from './Text.js';

class HomePage extends Component {
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
                        <li><a className="active" href="/Home">Home</a></li> {/* style={{float: "right"}} */}
                        <li className="loginSignup"><a href="/Login">Login</a></li>
                        <li className="loginSignup"><a href="/Signup">Signup</a></li>
                        {/* <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li> */}
                    </ul>
                </div>
            );
        }
        return (
            <div>
                <ul>
                    <li><a className="active" href="/">Home</a></li> {/* style={{float: "right"}} */}
                    <li><a href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="/UpdateIngredientPage">Update Ingredient</a></li>
                    <li className="loginSignup"><a href="/Login">Logout</a></li>
                    {/* <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li> */}
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