import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class getAllIngredients extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: []
        }
        this.getAllIngredients = () => {
            axios({
                method: 'get',
                url: 'http://localhost:8080/Ingredient/api/ingredient/getAllIngredients',
                responseType: 'json'
            }).then(response => {
                console.log(response.data);
                this.setState({
                     ingredients: response.data }); //this.state.inputText
                    
                })
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                       <button type="button" onClick={this.getAllIngredients}>Get all Ingredients</button>
                    </label>
                </form>
                {(this.state.ingredients.map((text) =>
                  <div key={text.ingredientID}> {/*Each child in an array or iterator should have a unique "key" prop. See https://fb.me/react-warning-keys for more information. */}
                    <br/><br/>
                    IngredientID: {" " + text.ingredientID + " "}
                    Name: {" " + text.name + " "}
                    Weight: {" " + text.weight + " "}
                    
                    </div>)
                )}
            </div>
        )
    }
}
export default getAllIngredients;