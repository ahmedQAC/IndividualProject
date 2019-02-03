import React, { Component } from 'react';
import axios from 'axios';

class AddIngredient extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            weight: "",
            userID: JSON.parse(sessionStorage.getItem("User")).userID,
            message: ""
        }
    }
    addName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    addWeight = (event) => {
        this.setState({
            weight: event.target.value
        });
    }

    addIngredient = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/Ingredient/api/ingredient/addIngredient',
            data: {
                name: this.state.name,
                weight: this.state.weight,
                userID: this.state.userID
            }
        });
        console.log("successfully added the ingredient with the information: \n" +
            " Name: " + this.state.name + "\n" +
            " Weight: " + this.state.weight);
        this.setState({
            message: "successfully added ingredient"
        });
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Enter Name" name="Enter Name" onChange={this.addName} />
                        <br /><input type="text" placeholder="Enter Weight" name="Enter Weight" onChange={this.addWeight} />
                        <br /><button type="button" name="button" onClick={this.addIngredient}>Add Ingredient</button>
                        <br />{this.state.message}
                    </label>
                </form>

            </div>
        )
    }
}
export default AddIngredient;