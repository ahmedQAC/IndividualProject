import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            displayText: [],
            inputText: ""
        }

        this.updateText = (event) => {
            this.setState({
                inputText: event.target.value
            });
        }

        this.setText = () => {
            axios({
                method: 'get',
                url: 'http://localhost:8080/Ingredient/api/ingredient/getAllIngredients',
                responseType: 'json'
            }).then(response => {
                console.log(response.data);
                this.setState({
                     displayText: response.data }); //this.state.inputText
                    
                })
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        <br /> Enter Name:<input type="text" onChange={this.updateText} />
                        <button type="button" onClick={this.setText}>UpdateText</button>

                        {/* <Text text={this.state.displayText} /> */}
                    </label>
                </form>
                {(this.state.displayText.map((text) =>
                <div>
                    ingredientID: {text.ingredientID}
                    name: {text.name}
                    weight: {text.weight}
                    </div>)
                )}
            </div>

        )
    }

}
export default SearchBar;