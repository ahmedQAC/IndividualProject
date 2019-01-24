import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>   
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="YourIngredients">Your Ingredients</a></li>
                    <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li>
                </ul>
            </div>

        )
    }
}
export default Home;