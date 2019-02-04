import React, { Component } from 'react';
import axios from 'axios';
import Text from './Text.js';

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
            <div >
                <form>
                    <label>
                        <input type="text" placeholder="Enter Name" name="Enter Name" onChange={this.addName} />
                        <br /><input type="text" placeholder="Enter Weight" name="Enter Weight" onChange={this.addWeight} />
                        <br /><button type="button" name="button" onClick={this.addIngredient}>Add Ingredient</button>
                    </label>
                </form>
                <div>
                     <Text text ={this.state.message} />
                    </div>

            </div >
        )
    }
}
export default AddIngredient;