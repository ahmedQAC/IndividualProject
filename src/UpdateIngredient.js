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
        updateIngredientID = (event) => {
            this.setState({
                ingredientID: event.target.value
            });
        }

        updateName = (event) => {
            this.setState({
                name: event.target.value
            });
        }
        updateWeight = (event) => {
            this.setState({
                weight: event.target.value
            });
        }

        updateIngredient = () => {
            axios({
                method: 'post',
                url: 'http://localhost:8080/Ingredient/api/ingredient/updateIngredient/'+this.state.ingredientID,
                data: {
                    name: this.state.name, 
                    weight: this.state.weight,
                    userID: this.state.userID
                }
            });
            console.log("successfully updated the ingredient with the new information: \n" +
            " Name: " + this.state.name + "\n" +
            " Weight: " + this.state.weight);
            this.setState({
                message: "successfully updated ingredient"
            });
        }

render() {
    return (
        <div>
            <form>
                <label>
                    <br /><input type ="text" name="Enter IngredientId to update" placeholder="Enter IngredientId to update" onChange={this.updateIngredientID} />
                    <br /><input type ="text" name="Enter new Name" placeholder="Enter new Name" onChange={this.updateName} />
                    <br /><input type ="text" name="Enter new Weight" placeholder="Enter new Weight" onChange={this.updateWeight} />
                    <br /><button type="button" name="button" onClick={this.updateIngredient}>Update Ingredient</button>
                    <Text text={this.state.message}/>
                </label>
                            
            </form>
            <form>
                
                </form>


        </div>
    )
}
}
export default AddIngredient;