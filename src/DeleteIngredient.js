import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class DeleteIngredient extends Component {
    constructor() {
        super();
        this.state = {
            ingredientID: "",
            userID: JSON.parse(sessionStorage.getItem("User")).userID,
            message: ""
        }
    }
    handleInputID = (event) => {
        this.setState({
            ingredientID: event.target.value
        });
    }
    deleteIngredient = () => {
        axios({
            method: 'delete',
            url: 'http://localhost:8080/Ingredient/api/ingredient/deleteIngredient/' + this.state.ingredientID + '/' + this.state.userID,
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: response.data
                });
            });
    }

    render() {
        return (
            <div>
                <form>
                    <label>

                        <input type="text" placeholder="Enter ID" name="Enter ID" onChange={this.handleInputID} />
                        <br /><button type="submit" name="submit" onClick={this.deleteIngredient}>Delete Ingredient</button>
                    </label>
                </form>
                <div>
                    <Text text={this.state.message} />
                </div>
            </div>
        )
    }
}
export default DeleteIngredient;