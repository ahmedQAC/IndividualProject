import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Text from './Text.js';

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a class="active" href="/">Home</a></li>
                    <li><a href="/YourIngredients">Your Ingredients</a></li>
                    <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li>
                </ul>
                <body>
                    <SearchBar />
                    <br /><br />
                    <p><Text text="Here is a list of recently added ingredients" /></p>
                </body>
            </div>

        )
    }
}
export default Home;