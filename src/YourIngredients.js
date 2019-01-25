import React, { Component } from 'react';
import Text from './Text.js';

class YourIngredients extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a class="active" href="/YourIngredients">Your Ingredients</a></li>
                    <li><a href="#contact">Food</a></li>
                    <li><a href="#about">Macros</a></li>
                </ul>
                <body>
                    <br /><br />
                    <p><Text text="Here is a list of all your ingredients" /></p>
                    </body>
            </div>

        )
    }
}
export default YourIngredients;