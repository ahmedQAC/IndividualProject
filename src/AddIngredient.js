import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class AddIngredient extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            weight: "",
            message: ""
        }
        this.addName = (event) => {
            this.setState({
                name: event.target.value
            });
        }
        this.addWeight = (event) => {
            this.setState({
                weight: event.target.value
            });
        }

        this.addIngredient = () => {
            axios({
                method: 'post',
                url: 'http://localhost:8080/Ingredient/api/ingredient/addIngredient',
                data: {
                    name: this.state.name, 
                    weight: this.state.weight
                }
            });
            console.log("successfully added the ingredient with the information: \n" +
            " Name: " + this.state.name + "\n" +
            " Weight: " + this.state.weight);
            this.setState({
                message: "successfully added ingredient"
            });
        }
    }
render() {
    return (
        <div>
            <form>
                <label>
                    
                    <input type ="text" placeholder="Enter Name" onChange={this.addName} />
                    <br /><input type="text" placeholder="Enter Weight" onChange={this.addWeight} />
                    <br /><button type="button" onClick={this.addIngredient}>Add Ingredient</button>
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