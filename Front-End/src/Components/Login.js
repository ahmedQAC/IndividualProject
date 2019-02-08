import React, { Component } from 'react';
import Text from './Text.js';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            username: "",
            password: "",
            loginMessage: "",
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    login = () => {
        //const LOCALHOST = 'http://localhost';
        const AZURE_IP_ADDRESS = 'http://recipe.uksouth.cloudapp.azure.com';
        axios({
            method: 'get',
            url: AZURE_IP_ADDRESS + ':8080/Ingredient/api/user/getAllUsers',
            responseType: 'json'
        }).then(response => {
            // console.log(response.data);
            this.setState({
                users: response.data
            });
            for (let user = 0; user < this.state.users.length; user++) {
                if ((this.state.users[user].username === this.state.username) && (this.state.users[user].password === this.state.password)) {
                    sessionStorage.setItem("User", JSON.stringify(this.state.users[user]));
                    this.props.history.push("/Home");
                }
                else {
                    this.setState({
                        loginMessage: "You have typed in the wrong username or password. Please check that you have typed in the correct details"
                    })
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
    logout = () => {
        sessionStorage.clear();
        this.props.history.push("/Login")

    }

    render() {
        if (JSON.parse(sessionStorage.getItem("User")) === null) {
            return (
                <div>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li className="loginSignup"><a className="active" href="/Login">Login</a></li>
                        <li className="loginSignup"><a href="/Signup">Signup</a></li>
                        {/* <li><a href="Food">Food</a></li>
                    <li><a href="Macros">Macros</a></li> */}
                    </ul>
                    <div>
                        <h5><Text text="Login" /></h5>
                        <Text text={this.state.loginMessage} />
                        <form>
                            <label>
                                <br /> <input type="text" id="username" placeholder="Enter username" onChange={this.handleInput} />
                                <br /> <input type="password" id="password" placeholder="Enter password" onChange={this.handleInput} />
                                <br /> <button type="button" onClick={this.login}>Login</button>
                            </label>
                        </form>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {this.logout()}
            </div>
        )
    }
}
export default Login;