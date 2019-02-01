import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Text from './Text.js';
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }

        this.handleInput = (event) => {
            this.setState({
                [event.target.id]: event.target.value
            });
        }

        this.addUser = () => {
            axios({
                method: 'post',
                url: 'http://localhost:8080/Ingredient/api/user/createUser',
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    ingredients: []
                }
            });
        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/YourIngredientsPage">Your Ingredients</a></li>
                    <li><a href="/AddIngredientPage">Add a new Ingredient</a></li>
                    <li><a href="/DeleteIngredientPage">Delete Ingredient</a></li>
                    <li><a href="/UpdateIngredientPage">Update Ingredient</a></li>
                    <li className="loginSignup"><a href="/Login">Login</a></li>
                    <li className="loginSignup"><a href="/Signup">Signup</a></li>
                    {/* <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li> */}
                </ul>
                <div>
                    <h5><Text text="Signup" /></h5>
                    <form>
                        <label>
                            <br /> <input type="text" id="username" placeholder="Enter username" onChange={this.handleInput} />
                            <br /> <input type="text" id="password" placeholder="Enter password" onChange={this.handleInput} />
                            {/* <br /> <input type="text" name="Confirm password" placeholder="Confirm password" onChnage={this.handleInput} /> */}
                            <br /> <button type="button" onClick={this.addUser}>Create create </button>
                            </label>
                        </form>
                        <br /><br />

                        <Text text="Everything" />
                </div>
                </div>

                )
    }
}
export default Signup;