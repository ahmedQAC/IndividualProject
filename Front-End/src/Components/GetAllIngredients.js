import React, { Component } from 'react';
import axios from 'axios';
import Text from './Text.js';

class getAllIngredients extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: [],
            message: "Click the button to display all ingredients",
            userID: JSON.parse(sessionStorage.getItem("User")).userID
        }
    }
    getAllIngredients = () => {
        //const LOCALHOST = 'http://localhost';
        const AZURE_IP_ADDRESS = '51.145.9.185';
        axios({
            method: 'get',
            url: AZURE_IP_ADDRESS + ':8080/Ingredient/api/ingredient/getUserIngredients/' + this.state.userID,
            responseType: 'json'
        }).then(response => {
            // console.log(response.data);
            this.setState({
                ingredients: response.data,
            });
            if (this.state.ingredients.length === 0) {
                this.setState({
                    message: "You currently dont have any ingredients added"
                });
            }
            else {
                this.setState({
                    message: "Here is a list of all your ingredients"
                });
            }
        }).catch(function (error) {
            console.log(error);
        });

    }

    render() {
        return (
            <div>
                <Text text={this.state.message} />
                <form>
                    <label>
                        <button type="button" name="button" onClick={this.getAllIngredients}>Get all Ingredients</button>
                    </label>
                </form>
                {(this.state.ingredients.map((values) =>
                    <div key={values.ingredientID}>
                        <br /><br />
                        IngredientID: {" " + values.ingredientID + " "}
                        Name: {" " + values.name + " "}
                        Weight: {" " + values.weight + " "}
                    </div>)
                )}
            </div>
        )
    }
}
export default getAllIngredients;