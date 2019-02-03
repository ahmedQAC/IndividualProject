import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Text from './Text.js';

class ContentPage extends Component {
    constructor() {
        super();
        this.state = {
            validatedUser: JSON.parse(sessionStorage.getItem("User"))
        }
    }
    render() {
        if (this.state.validatedUser === null) {
            return(
            <div>
                <ul>
                    <li><a className="active" href="/Home">Home</a></li>
                    <li className="loginSignup"><a href="/Login">Login</a></li>
                    <li className="loginSignup"><a href="/Signup">Signup</a></li>
                </ul>
            </div>
            );
        }
        return (
            <div>
                <ul>
                    <li><a className="active" href="/Home">Home</a></li>
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
                    <Text text="What do you want to achieve" />
                    <Text text="Everything" />
                </div>
            </div>

        )
    }
}
export default ContentPage;
