import React, { Component } from 'react';
import axios from 'axios';

class getAllIngredients extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: [],
            userID: JSON.parse(sessionStorage.getItem("User")).userID
        }
    }
    getAllIngredients = () => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/Ingredient/api/ingredient/getUserIngredients/' + this.state.userID,
            responseType: 'json'
        }).then(response => {
                console.log(response.data);
                this.setState({
                    ingredients: response.data
                });

            })
    }
    render() {
        return (
            <div>
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