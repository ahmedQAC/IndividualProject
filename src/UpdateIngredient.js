import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class AddIngredient extends Component {
    constructor() {
        super();
        this.state = {
            ingredientID: "",
            name: "",
            weight: "",
            userID: JSON.parse(sessionStorage.getItem("User")).userID,
            message: ""
        }
    }
    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    updateIngredient = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/Ingredient/api/ingredient/updateIngredient/' + this.state.ingredientID + '/' + this.state.userID,
            data: {
                name: this.state.name,
                weight: this.state.weight,
            }
        }).then(response => {
            // console.log(response.data);
            this.setState({
                message: response.data.message
            });
        });
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <br /><input type="text" name="Enter Ingredient ID" id="ingredientID" placeholder="Enter Ingredient ID" onChange={this.handleInput} />
                        <br /><input type="text" name="Enter new Name" id="name" placeholder="Enter new Name" onChange={this.handleInput} />
                        <br /><input type="text" name="Enter new Weight" id="weight" placeholder="Enter new Weight" onChange={this.handleInput} />
                        <br /><button type="button" name="button" onClick={this.updateIngredient}>Update Ingredient</button>
                        <Text text={this.state.message} />
                    </label>
                </form>
            </div>
        );
    }
}
export default AddIngredient;