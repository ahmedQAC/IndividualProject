import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class DeleteIngredient extends Component {
    constructor() {
        super();
        this.state = {
            ingredientID: ""
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
                url: 'http://localhost:8080/Ingredient/api/ingredient/deleteIngredient/'+this.state.ingredientID,
                data: {
                    ingredientID: this.state.name
                }
            });
        }

render() {
    return (
        <div>
            <form>
                <label>
                    
                    <input type ="text" placeholder="Enter ID" name="Enter ID" onChange={this.handleInputID} />
                    <br /><button type="submit" name="submit" onClick={this.deleteIngredient}>Delete Ingredient</button>
                    <Text text={this.state.message}/>
                </label>
                            
            </form>
            <form>
                
                </form>


        </div>
    )
}
}
export default DeleteIngredient;