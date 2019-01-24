import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div> 
                <body>
                 <ul>
                    <li><a class="active" href="/">Home</a></li>
                    <li><a href="/YourIngredients">Your Ingredients</a></li>
                    <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li>
                </ul> 
                </body>
            </div>

        )
    }
}
export default Home;