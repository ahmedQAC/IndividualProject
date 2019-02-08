import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class DeleteIngredient extends Component {
    constructor() {
        super();
        this.state = {
            ingredientID: "",
            userID: JSON.parse(sessionStorage.getItem("User")).userID,
            message: " "
        }
    }
    handleInputID = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    deleteIngredient = () => {
        //const LOCALHOST = 'http://localhost';
        const AZURE_IP_ADDRESS = '51.145.9.185';
        axios({
            method: 'delete',
            url: AZURE_IP_ADDRESS + ':8080/Ingredient/api/ingredient/deleteIngredient/' + this.state.ingredientID + '/' + this.state.userID,
        })
            .then(response => {
                // console.log(response.data);
                this.setState({
                    message: response.data.message
                });
            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <form>
                    <label>

                        <input type="text" placeholder="Enter ID" name="Enter ID" id="ingredientID" onChange={this.handleInputID} />
                        <br /><button type="button" name="submit" onClick={this.deleteIngredient}>Delete Ingredient</button>
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