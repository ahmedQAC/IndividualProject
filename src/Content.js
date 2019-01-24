import React, { Component } from 'react';

class Content extends Component{
    render(){
        return(
            <div>   
                <ul>
                    <li><a class="active" href="/home">Home</a></li>
                    <li><a href="/YourIngredients">Your Ingredients</a></li>
                    <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li>
                </ul>
            </div>

        )
    }
}
export default Content;
