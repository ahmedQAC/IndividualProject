import React, { Component } from 'react';

class YourIngredients extends Component{
    render(){
        return(
            <div>   
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a class="active" href="/YourIngredients">Your Ingredients</a></li>
                    <li><a href="#contact">Food</a></li>
                    <li><a href="#about">Macros</a></li>
                </ul>
            </div>

        )
    }
}
export default YourIngredients;