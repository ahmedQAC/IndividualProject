import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
import PageContent from './PageContent.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      inputText: "",
      displayText: ""
    }

    this.updateText = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    this.setText = () => {
        this.setState({
            displayText: this.state.inputText
        });
    }

  }
  render() {
    return (
      <div>
            <div className="nav-bar">
              <body>
                  <div>
                    <PageContent />
                </div>

             </body>
            </div>
       <div className="App">
        <header className="App-header">

          <h1><Text text="Welcome to my Website"/></h1>
          <p><Text text="You are able to list all foods you can make with the ingredients you have"/></p>
        </header>

        <div>


            <div>
         <body>

           <form>
             <label>
                <br/> Enter Name:<input type="text" onChange={this.updateText} />
                <button type="button" onClick={this.setText}>UpdateText</button>                
                <Text text={this.state.displayText} />
            </label>
             </form>
             <br/><br/>
          <p><Text text="What do you want to achieve"/></p>
          <p><Text text="Everything"/></p>
          </body>
          </div>
          </div>
          </div>
      {/* //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a> */}

      // </div>

    );
  }
}

export default App;
